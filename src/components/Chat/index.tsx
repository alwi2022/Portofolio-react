//src/components/Chat/index.tsx
import { useLang } from "../../context/LangContext";
import ChatButton from "./ChatButton";
import ChatPanel from "./ChatPanel";
import MessageList from "./MessageList";
import { langData } from "../../data/langData";
import MessageInput from "./MessageInput";
import { useChatAssistant } from "./useChatAssistant";

export default function ChatAssistant() {
  const { lang } = useLang();
  const t = langData[lang].chatAssistant;
  const { open, setOpen, messages, input, setInput, loading, ask, listRef } =
    useChatAssistant(lang, t.hello);

  return (
    <>
      <ChatButton label={t.button} onClick={() => setOpen(true)} />
      {open && (
        <div
          className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-[1px]"
          onClick={() => setOpen(false)}
        />
      )}
      <ChatPanel
        open={open}
        title={t.header}
        subtitle={t.sub}
        onClose={() => setOpen(false)}
        disclaimer={t.disclaimer}
      >
        <MessageList
          messages={messages}
          suggestions={t.suggestions}
          onSuggestClick={(s) => ask(s)}
          listRef={listRef}
          hello={t.hello}
        />
        <MessageInput
          value={input}
          onChange={setInput}
          onSubmit={() => ask(input)}
          loading={loading}
          placeholder={t.inputPlaceholder}
        />
      </ChatPanel>
    </>
  );
}
