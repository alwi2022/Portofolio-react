// src/components/Chat/MessageList.tsx
import React from "react";
import type { ChatMessage } from "../../types/Chat";
import { sanitizeHTML } from "./sanitize";
import { displayUrl } from "./utils"; // <-- tambah ini

// 1) linkify URL polos  2) pendekkan innerText dari <a>
function linkifyAndShorten(html: string) {
  // step A: linkify url polos
  const urlRe = /((https?:\/\/)?([\w.-]+)\.[a-z]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=%]*)?)/gi;
  let linked = html.replace(urlRe, (m) => {
    // jangan dobel-link kalau sudah di dalam tag <a ...>...</a>
    if (m.startsWith("<a ") || m.endsWith("</a>")) return m;
    const href = /^https?:\/\//i.test(m) ? m : `https://${m}`;
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-blue-400 underline break-all inline-block max-w-full">${displayUrl(href)}</a>`;
  });

  // step B: kalau sudah ada <a>, pendekkan innerText-nya
  try {
    const doc = new DOMParser().parseFromString(linked, "text/html");
    doc.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href") || "";
      a.textContent = displayUrl(href);
      a.classList.add("text-blue-400", "underline", "break-all", "inline-block", "max-w-full");
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    });
    return doc.body.innerHTML;
  } catch {
    return linked;
  }
}

type Props = {
  messages: ChatMessage[];
  suggestions: ReadonlyArray<string>;
  onSuggestClick?: (s: string) => void;
  listRef: React.RefObject<HTMLDivElement | null>;
  hello: string;
};

export default function MessageList({
  messages,
  suggestions,
  onSuggestClick,
  listRef,
  hello,
}: Props) {
  const hasUserMessage = messages.some((m) => m.role === "user");
  const compactSuggestions = suggestions.slice(0, 2);

  return (
    <div ref={listRef} className="h-[50vh] sm:h-72 overflow-y-auto px-3 py-2 space-y-2">
      <div className="flex justify-start">
        <div className="bg-zinc-800 text-white max-w-[85%] px-3 py-2 rounded-2xl
                        whitespace-pre-wrap leading-relaxed text-sm
                        break-words [overflow-wrap:anywhere] min-w-0">
          {hello}
        </div>
      </div>

      {messages.map((m) => {
        const safe = sanitizeHTML(m.content);
        const html = linkifyAndShorten(safe); // <-- gunakan transform ini
        const bubble =
          "max-w-[85%] px-3 py-2 rounded-2xl whitespace-pre-wrap leading-relaxed text-sm " +
          "break-words [overflow-wrap:anywhere] min-w-0";
        return (
          <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`${m.role === "user" ? "bg-white text-black" : "bg-zinc-800 text-white"} ${bubble}`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        );
      })}

      {!hasUserMessage && onSuggestClick && compactSuggestions.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {compactSuggestions.map((s) => (
            <button
              key={s}
              onClick={() => onSuggestClick(s)}
              className="text-[11px] px-2 py-1.5 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
