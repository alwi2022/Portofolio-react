export type ChatMessage = { id: string; role: 'user' | 'assistant'; content: string; sources?: { label: string; href: string }[] };
export type ChatThread = { id: string; title: string; archived: boolean; updatedAt: number; messages: ChatMessage[] };
export const THREAD_STORAGE_KEY = 'imam-portfolio-threads-v1';

export function parseThreads(raw: string | null): ChatThread[] {
  if (!raw) return [];
  const data: unknown = JSON.parse(raw);
  if (!Array.isArray(data)) throw new Error('Invalid history');
  return data.filter((thread): thread is ChatThread => {
    if (!thread || typeof thread.id !== 'string' || typeof thread.title !== 'string' || typeof thread.archived !== 'boolean' || !Number.isFinite(thread.updatedAt) || !Array.isArray(thread.messages)) return false;
    return thread.messages.every((message: ChatMessage) => message && typeof message.id === 'string' && ['user', 'assistant'].includes(message.role) && typeof message.content === 'string' && message.content.length <= 8000 && (message.sources === undefined || (Array.isArray(message.sources) && message.sources.every(source => typeof source.label === 'string' && typeof source.href === 'string' && source.href.startsWith('/') && !source.href.startsWith('//')))));
  }).slice(0, 50).map(thread => ({ ...thread, title: thread.title.slice(0, 80), messages: thread.messages.slice(-100) }));
}

export function saveThread(threads: ChatThread[], thread: ChatThread) {
  return [thread, ...threads.filter(item => item.id !== thread.id)].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 50);
}
