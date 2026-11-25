import { getChatProfile, getChatSources } from '@/lib/chat-profile';

type Message = { role: 'user' | 'assistant'; content: string };

export async function POST(request: Request) {
  let body;
  try {
    const raw = await request.text();
    if (raw.length > 64000) return Response.json({ error: 'Request too large' }, { status: 413 });
    body = JSON.parse(raw);
  } catch { return Response.json({ error: 'Invalid JSON' }, { status: 400 }); }
  const lang = body?.lang === 'en' ? 'en' : 'id';
  const messages: Message[] = body?.messages;
  if (!Array.isArray(messages) || !messages.length || messages.length > 20 || messages.some(m => !m || !['user', 'assistant'].includes(m.role) || typeof m.content !== 'string' || !m.content.trim() || m.content.length > (m.role === 'user' ? 2000 : 8000)) || messages.at(-1)?.role !== 'user') {
    return Response.json({ error: 'Invalid messages' }, { status: 400 });
  }
  const backend = process.env.CHAT_BACKEND_API || process.env.VITE_BACKEND_API;
  if (!backend) return Response.json({ error: 'Chat unavailable' }, { status: 503 });
  // Keep whole recent turns while leaving room for the full portfolio context.
  const recent = [...messages];
  while (recent.length > 1 && recent.reduce((sum, m) => sum + m.content.length, 0) > 16000) recent.splice(0, 2);
  try {
    const response = await fetch(backend, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ context: getChatProfile(lang), messages: recent, lang }),
      signal: AbortSignal.any([request.signal, AbortSignal.timeout(30000)]), cache: 'no-store',
    });
    if (!response.ok) return Response.json({ error: 'Chat unavailable' }, { status: response.status === 429 ? 429 : response.status === 503 ? 503 : 502 });
    const data = await response.json();
    if (typeof data.reply !== 'string' || !data.reply.trim()) return Response.json({ error: 'Empty response' }, { status: 502 });
    const reply = data.reply.trim().slice(0, 8000);
    return Response.json({ reply, sources: getChatSources(reply, lang) });
  } catch { return Response.json({ error: 'Chat unavailable' }, { status: 502 }); }
}
