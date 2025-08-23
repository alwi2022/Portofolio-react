//src/components/Chat/useChatAssistant.ts
import { useEffect, useMemo, useRef, useState } from "react";
import { buildSystemPrompt } from "./utils";
import type { ChatMessage } from "../../types/Chat";

function sanitize(text: string) {
  let t = text;

  // hilangkan bold/italic/backtick markdown
  t = t.replace(/\*\*(.*?)\*\*/g, "$1");
  t = t.replace(/__(.*?)__/g, "$1");
  t = t.replace(/_(.*?)_/g, "$1");
  t = t.replace(/`{1,3}([\s\S]*?)`{1,3}/g, "$1");

  // hilangkan bullet mark di awal baris
  t = t.replace(/^\s*[-*]\s+/gm, "");

  // (opsional) buang emoji umum (boleh dihapus kalau mau tetap izinkan)
  t = t.replace(/[\u{1F300}-\u{1FAFF}]/gu, "");

  // rapikan spasi/line
  t = t.replace(/\n{3,}/g, "\n\n").trim();

  return t;
}

export function useChatAssistant(lang: "en" | "id", _hello: string) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const systemPrompt = useMemo(() => buildSystemPrompt(lang), [lang]);

  async function ask(text: string) {
    if (!text.trim()) return;
    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: systemPrompt,
          messages: [...messages, userMsg].map(({ role, content }) => ({ role, content })),
          lang,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      const assistantText = sanitize((data.reply || "").toString());
      setMessages((m) => [...m, { id: crypto.randomUUID(), role: "assistant", content: assistantText }]);
    } catch (e) {
      const fallback =
        lang === "id"
          ? `Maaf, info itu belum tersedia di data saya. Hubungi Alwi langsung: `
            + `<a href="https://wa.me/62895618216004" target="_blank">WhatsApp</a> · `
            + `<a href="mailto:imambahrialwi21@gmail.com" target="_blank">Email</a> · `
            + `<a href="https://www.linkedin.com/in/imambahrialwi/" target="_blank">LinkedIn</a>`
          : `Sorry, that info isn’t available. Please contact Alwi: `
            + `<a href="https://wa.me/62895618216004" target="_blank">WhatsApp</a> · `
            + `<a href="mailto:imambahrialwi21@gmail.com" target="_blank">Email</a> · `
            + `<a href="https://www.linkedin.com/in/imambahrialwi/" target="_blank">LinkedIn</a>`;
      setMessages((m) => [...m, { id: crypto.randomUUID(), role: "assistant", content: fallback }]);
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return { open, setOpen, messages, input, setInput, loading, ask, listRef } as const;
}

