//src/components/Chat/ChatAssistant.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { useLang } from "../../context/LangContext";
import { langData } from "../../data/langData";

export type ChatRole = "user" | "assistant";
interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

const ChatAssistant: React.FC = () => {
  const { lang } = useLang();
  const t = langData[lang].chatAssistant; 
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  const systemPrompt = useMemo(() => {
    const summary = `Imam Bahri Alwi – Full Stack Developer. Experienced in React.js, Next.js, React Native/Expo, Node.js/Express, REST APIs, SQL/NoSQL. Built Finance Tracker, Quickhire Dev, Maneka, and legaltech Hallo Hukum. Education: Hacktiv8 (Full Stack JS Immersive). Certifications: React.js, Node.js, SQL, Problem Solving. Skills: Frontend (React, Next.js, RN), Backend (Node/Express, GraphQL), DB (Postgres, MongoDB), Cloud (AWS, Vercel), Real-time (Socket.io, Stream), Gitflow. Available for junior/mid frontend/fullstack roles.`;
    return `${t.systemInstructionHint}\n\n${summary}`;
  }, [lang]);

  const ask = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: systemPrompt,
          messages: [...messages, userMsg],
          lang,
        }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "assistant", content: t.error },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label={t.button}
        className="fixed z-50 bottom-6 right-6 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white text-black shadow-lg hover:opacity-90"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">{t.button}</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Chat Panel */}
      <div
        className={`fixed z-50 bottom-6 right-6 w-[92vw] sm:w-[420px] bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden transition-transform ${open ? "scale-100" : "scale-0"
          }`}
      >
        <div className="px-4 py-3 border-b border-zinc-700 flex items-start gap-3">
          <div className="flex-1">
            <h3 className="text-white font-semibold">{t.header}</h3>
            <p className="text-zinc-400 text-xs leading-snug">{t.sub}</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-zinc-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div
          ref={listRef}
          className="h-[56vh] overflow-y-auto px-4 py-3 space-y-3"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"
                }`}
            >
              <div
                className={`${m.role === "user"
                    ? "bg-white text-black"
                    : "bg-zinc-800 text-white"
                  } max-w-[85%] px-3 py-2 rounded-2xl whitespace-pre-wrap leading-relaxed`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {messages.length <= 2 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {t.suggestions.map((s: string) => (
                <button
                  key={s}
                  onClick={() => ask(s)}
                  className="text-xs px-3 py-2 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!loading) ask(input);
          }}
          className="p-3 border-t border-zinc-700 flex items-center gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.inputPlaceholder}
            className="flex-1 bg-zinc-800 text-white px-3 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className={`inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl px-3 ${loading ? "bg-zinc-700" : "bg-white text-black hover:opacity-90"
              }`}
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </form>

        <div className="px-4 py-2 bg-zinc-950 text-[10px] text-zinc-500 border-t border-zinc-800">
          {t.disclaimer}
        </div>
      </div>
    </>
  );
};

export default ChatAssistant;
