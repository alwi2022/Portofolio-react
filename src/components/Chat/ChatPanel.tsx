//src/components/Chat/ChatPanel.tsx
import React from "react";
import ChatHeader from "./ChatHeader";

export default function ChatPanel({
  open,
  title,
  subtitle,
  onClose,
  children,
  disclaimer,
}: {
  open: boolean;
  title: string;
  subtitle: string;
  onClose: () => void;
  children: React.ReactNode;
  disclaimer: string;
}) {
  return (
    <div
      className={`fixed z-[80] bottom-4 right-4 w-[88vw] sm:w-96 md:w-[420px] bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden transition-transform ${
        open ? "scale-100" : "scale-0"
      }`}
      role="dialog"
      aria-modal="true"
    >
      <ChatHeader title={title} subtitle={subtitle} onClose={onClose} />
      {children}
      <div className="px-3 py-2 bg-zinc-950 text-[10px] text-zinc-500 border-t border-zinc-800">
        {disclaimer}
      </div>
    </div>
  );
}
