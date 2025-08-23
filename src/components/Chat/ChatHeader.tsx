//src/components/Chat/ChatHeader.tsx
import { X } from "lucide-react";

export default function ChatHeader({
  title,
  subtitle,
  onClose,
}: {
  title: string;
  subtitle: string;
  onClose: () => void;
}) {
  return (
    <div className="px-3 py-2.5 border-b border-zinc-700 flex items-start gap-2">
      <div className="flex-1">
        <h3 className="text-white font-semibold text-sm">{title}</h3>
        <p className="text-zinc-400 text-[11px] leading-snug">{subtitle}</p>
      </div>
      <button onClick={onClose} aria-label="Close" className="p-1.5 rounded-md hover:bg-zinc-800">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
