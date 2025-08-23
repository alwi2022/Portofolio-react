import { MessageCircle } from "lucide-react";

export default function ChatButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="fixed z-[60] bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white text-black shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <MessageCircle className="w-4 h-4" />
      <span className="hidden md:inline text-sm">{label}</span>
    </button>
  );
}
