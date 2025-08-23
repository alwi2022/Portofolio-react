import React from "react";
import { Loader2, Send } from "lucide-react";

export default function MessageInput({
  value,
  onChange,
  onSubmit,
  loading,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  loading: boolean;
  placeholder: string;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!loading) onSubmit();
      }}
      className="p-2.5 border-t border-zinc-700 flex items-center gap-2"
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-zinc-800 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />
      <button
        type="submit"
        disabled={loading}
        className={`inline-flex items-center justify-center min-w-[40px] min-h-[40px] rounded-lg px-2 ${
          loading ? "bg-zinc-700" : "bg-white text-black hover:opacity-90"
        }`}
        aria-label="Send"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
      </button>
    </form>
  );
}
