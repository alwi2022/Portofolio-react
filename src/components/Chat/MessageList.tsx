// src/components/Chat/MessageList.tsx
import React from "react";
import type { ChatMessage } from "../../types/Chat";

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
    <div
      ref={listRef}
      className="h-[50vh] sm:h-72 overflow-y-auto px-3 py-2 space-y-2"
    >
      <div className="flex justify-start">
        <div className="bg-zinc-800 text-white max-w-[85%] px-3 py-2 rounded-2xl whitespace-pre-wrap leading-relaxed text-sm">
          {hello}
        </div>
      </div>

      {messages.map((m) => (
        <div
          key={m.id}
          className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`${
              m.role === "user" ? "bg-white text-black" : "bg-zinc-800 text-white"
            } max-w-[85%] px-3 py-2 rounded-2xl whitespace-pre-wrap leading-relaxed text-sm`}
            dangerouslySetInnerHTML={{ __html: m.content }}
          />
        </div>
      ))}

      {!hasUserMessage &&
        onSuggestClick &&
        compactSuggestions.length > 0 && (
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
