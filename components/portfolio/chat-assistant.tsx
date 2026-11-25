'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Archive, ArrowLeft, ArrowUp, ArrowUpRight, Check, ChevronDown, ChevronRight, Copy, History, MoreHorizontal, Pencil, Plus, Search, Square, Trash2 } from 'lucide-react';
import type { LangKey } from '@/lib/content';
import { parseThreads, saveThread, THREAD_STORAGE_KEY, type ChatMessage as Message, type ChatThread } from '@/lib/chat-threads';
import './portfolio-bot.css';
import './chat-panel.css';


function Mascot({ mood = 'idle', interactive = true }: { mood?: 'idle' | 'listening' | 'thinking' | 'mumbling' | 'static'; interactive?: boolean }) {
  return <span className="portfolio-bot-mascot" data-mood={mood} aria-hidden="true" onPointerMove={interactive ? event => {
    if (event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    event.currentTarget.dataset.tracking = 'true';
    event.currentTarget.style.setProperty('--look-x', `${x * 8}%`);
    event.currentTarget.style.setProperty('--look-y', `${y * 6}%`);
    event.currentTarget.style.setProperty('--lean-x', `${x * 4}%`);
    event.currentTarget.style.setProperty('--lean-y', `${y * 3}%`);
    event.currentTarget.style.setProperty('--tilt', `${x * 14}deg`);
  } : undefined} onPointerLeave={interactive ? event => {
    delete event.currentTarget.dataset.tracking;
    for (const name of ['--look-x', '--look-y', '--lean-x', '--lean-y', '--tilt']) event.currentTarget.style.removeProperty(name);
  } : undefined}><span className="ground" /><span className="float"><span className="arrival"><span className="pose"><span className="bot"><span className="antenna" /><span className="visor"><span className="face"><span className="eye-line"><span className="eye" /><span className="eye" /></span><span className="mouth" /></span></span></span></span></span></span></span>;
}

function inlineText(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*\n]+\*|`[^`]+`|\[[^\]]+\]\(https?:\/\/[^\s)]+\)|https?:\/\/[^\s<]+)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={index}>{part.slice(1, -1)}</code>;
    const markdownLink = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    if (markdownLink) return <a key={index} href={markdownLink[2]} target="_blank" rel="noreferrer">{markdownLink[1]}</a>;
    if (/^https?:\/\//.test(part)) {
      const url = part.replace(/[.,;!?]+$/, '');
      return <span key={index}><a href={url} target="_blank" rel="noreferrer">{url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</a>{part.slice(url.length)}</span>;
    }
    return part;
  });
}

function LauncherMascot() {
  const [action, setAction] = useState<'idle' | 'peek' | 'wiggle' | 'hop'>('idle');
  const [attentive, setAttentive] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setTimeout>;
    let turn = 0;
    let disposed = false;
    const schedule = () => {
      if (disposed || motion.matches || document.hidden || attentive) return;
      timer = setTimeout(() => {
        const actions = ['peek', 'wiggle', 'hop'] as const;
        setAction(actions[turn++ % actions.length]);
        timer = setTimeout(() => { setAction('idle'); schedule(); }, 2100);
      }, 8000 + Math.random() * 7000);
    };
    const reset = () => { clearTimeout(timer); setAction('idle'); schedule(); };
    schedule();
    document.addEventListener('visibilitychange', reset);
    motion.addEventListener('change', reset);
    return () => { disposed = true; clearTimeout(timer); document.removeEventListener('visibilitychange', reset); motion.removeEventListener('change', reset); };
  }, [attentive]);
  return <span className="chat-launcher-life" data-action={attentive ? 'idle' : action} onPointerEnter={event => { if (event.pointerType === 'mouse') setAttentive(true); }} onPointerLeave={() => { setAction('idle'); setAttentive(false); }}><span className="chat-launcher-motion"><Mascot /></span></span>;
}

function ReactiveMascot({ listening, lang }: { listening: boolean; lang: LangKey }) {
  const [reaction, setReaction] = useState<'idle' | 'angry'>('idle');
  const clicks = useRef<number[]>([]);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  function poke() {
    const now = Date.now();
    clicks.current = [...clicks.current.filter(time => now - time < 2000), now];
    if (clicks.current.length < 4) return;
    setReaction('angry');
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => { setReaction('idle'); clicks.current = []; }, 5000);
  }

  return <div className="chat-playful-bot" data-reaction={reaction}>
    <button type="button" className="chat-poke-bot" onClick={poke} aria-label={lang === 'id' ? 'Ajak robot bermain' : 'Play with the robot'}>
      <span className="chat-bot-reaction"><Mascot mood={listening ? 'listening' : 'idle'} /></span>
      {reaction === 'angry' && <span className="chat-anger-effects" aria-hidden="true"><span className="chat-steam chat-steam-left" /><span className="chat-steam chat-steam-right" /><span className="chat-anger-mark"><i /><i /></span></span>}
    </button>
    <span className="sr-only" role="status">{reaction === 'angry' ? (lang === 'id' ? 'Robot memerah dan tampak marah.' : 'The robot turns red and looks angry.') : ''}</span>
  </div>;
}

function Answer({ text }: { text: string }) {
  const blocks: ReactNode[] = [];
  let lines: string[] = [];
  let bullets: string[] = [];
  const flushParagraph = () => { if (lines.length) { blocks.push(<p key={blocks.length}>{inlineText(lines.join('\n'))}</p>); lines = []; } };
  const flushList = () => { if (bullets.length) { blocks.push(<ul key={blocks.length}>{bullets.map((line, index) => <li key={index}>{inlineText(line)}</li>)}</ul>); bullets = []; } };
  for (const line of text.split('\n')) {
    const bullet = line.match(/^\s*[-*]\s+(.+)/);
    if (bullet) { flushParagraph(); bullets.push(bullet[1]); }
    else if (!line.trim()) { flushParagraph(); flushList(); }
    else { flushList(); lines.push(line); }
  }
  flushParagraph(); flushList();
  return blocks;
}

export function ChatAssistant({ lang }: { lang: LangKey }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const launcher = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const pending = useRef(false);
  const controller = useRef<AbortController | null>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<'unavailable' | 'cancelled' | 'copy' | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [launcherHint, setLauncherHint] = useState(false);
  const [thinkingStep, setThinkingStep] = useState(0);
  const [threads, setThreads] = useState<ChatThread[]>([]);
  const [activeThread, setActiveThread] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [showArchived, setShowArchived] = useState(false);
  const [search, setSearch] = useState('');
  const [storageReady, setStorageReady] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const [renameId, setRenameId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const id = lang === 'id';
  const title = 'AI';
  useEffect(() => {
    if (!window.matchMedia('(hover: none)').matches) return;
    try { if (sessionStorage.getItem('imam-ai-hint-seen')) return; } catch { /* Storage can be unavailable in private browsers. */ }
    const reveal = setTimeout(() => {
      setLauncherHint(true);
      try { sessionStorage.setItem('imam-ai-hint-seen', '1'); } catch { /* The hint still works without storage. */ }
    }, 2500);
    const hide = setTimeout(() => setLauncherHint(false), 7500);
    return () => { clearTimeout(reveal); clearTimeout(hide); };
  }, []);
  const currentThread = threads.find(thread => thread.id === activeThread);
  const visibleThreads = threads.filter(thread => thread.archived === showArchived && `${thread.title} ${thread.messages.map(message => message.content).join(' ')}`.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  const thinkingLabels = id ? ['Lagi mikir…', 'Hmm, sebentar…', 'Menyusun jawaban…'] : ['Thinking…', 'Mumbling…', 'Putting it together…'];
  const suggestions = id ? [
    { label: 'Pengalaman terbaru', question: 'Apa peran dan pekerjaan terbaru Imam di Brifion?' },
    { label: 'Proyek pilihan', question: 'Ceritakan proyek Knect dan Taskflow yang dibangun Imam.' },
    { label: 'Keahlian teknis', question: 'Apa keahlian utama Imam untuk pengembangan web dan mobile?' },
    { label: 'Hubungi Imam', question: 'Bagaimana cara menghubungi Imam untuk membahas proyek?' },
  ] : [
    { label: 'Recent experience', question: 'What is Imam working on at Brifion?' },
    { label: 'Selected projects', question: 'Tell me about Knect and Taskflow, built by Imam.' },
    { label: 'Technical skills', question: 'What are Imam’s main web and mobile development skills?' },
    { label: 'Contact Imam', question: 'How can I contact Imam to discuss a project?' },
  ];

  useEffect(() => {
    const element = list.current;
    if (element) element.scrollTop = element.scrollHeight;
  }, [messages, loading, error]);
  useEffect(() => () => { controller.current?.abort(); if (copyTimer.current) clearTimeout(copyTimer.current); }, []);
  useEffect(() => {
    try { setThreads(parseThreads(localStorage.getItem(THREAD_STORAGE_KEY))); }
    catch { setStorageError(true); }
    setStorageReady(true);
  }, []);
  useEffect(() => {
    if (!storageReady) return;
    try { localStorage.setItem(THREAD_STORAGE_KEY, JSON.stringify(threads)); }
    catch { setStorageError(true); }
  }, [threads, storageReady]);

  function newChat() {
    setActiveThread(null); setMessages([]); setValue(''); setError(null); setCopied(null); setShowHistory(false); setRenameId(null); setDeleteId(null);
    requestAnimationFrame(() => input.current?.focus());
  }

  function remember(threadId: string, nextMessages: Message[], firstQuestion: string) {
    setThreads(previous => {
      const existing = previous.find(thread => thread.id === threadId);
      if (!nextMessages.length && !existing) return previous;
      return saveThread(previous, { id: threadId, title: existing?.title ?? firstQuestion.slice(0, 60), archived: existing?.archived ?? false, updatedAt: Date.now(), messages: nextMessages.slice(-100) });
    });
  }
  useEffect(() => {
    if (!loading) return;
    const timer = setInterval(() => setThinkingStep(step => (step + 1) % 3), 3000);
    return () => clearInterval(timer);
  }, [loading]);
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !dialog.current?.contains(event.target) && !launcher.current?.contains(event.target)) dialog.current?.close();
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); dialog.current?.close(); }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, [open]);

  async function ask(text: string) {
    if (pending.current || !text.trim() || text.trim().length > 2000) return;
    pending.current = true;
    const threadId = activeThread ?? crypto.randomUUID();
    setActiveThread(threadId);
    const next: Message[] = [...messages, { id: crypto.randomUUID(), role: 'user', content: text.trim() }];
    setMessages(next); setValue(''); setError(null); setThinkingStep(0); setLoading(true);
    const request = new AbortController();
    controller.current = request;
    try {
      const response = await fetch('/api/chat', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.slice(-19).map(({ role, content }) => ({ role, content })), lang }),
        signal: request.signal,
      });
      if (!response.ok) throw new Error('Chat unavailable');
      const data = await response.json();
      if (typeof data.reply !== 'string' || !data.reply.trim()) throw new Error('Empty response');
      const completed: Message[] = [...next, { id: crypto.randomUUID(), role: 'assistant', content: data.reply, sources: data.sources }];
      setMessages(completed);
      remember(threadId, completed, text.trim());
    } catch {
      setMessages(next.slice(0, -1)); setValue(text);
      setError(request.signal.aborted ? 'cancelled' : 'unavailable');
    } finally {
      pending.current = false; setLoading(false); controller.current = null;
      requestAnimationFrame(() => { if (dialog.current?.open) input.current?.focus(); });
    }
  }

  async function copy(message: Message) {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(message.id);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(null), 2000);
    } catch { setError('copy'); }
  }

  const composer = <form className="chat-composer" onSubmit={event => { event.preventDefault(); void ask(value); }}>
    <label htmlFor="alwi-question" className="sr-only">{id ? 'Pertanyaan tentang Imam' : 'Question about Imam'}</label>
    <textarea ref={input} id="alwi-question" rows={2} value={value} disabled={loading} maxLength={2000} onChange={event => { setValue(event.target.value); if (error) setError(null); }} onKeyDown={event => {
      if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing && window.matchMedia('(pointer: fine)').matches) { event.preventDefault(); void ask(value); }
    }} placeholder={id ? 'Tanya tentang Imam…' : 'Ask about Imam…'} />
    <div className="chat-composer-tools"><span className="chat-character-count" aria-hidden="true">{value.length > 1800 ? `${value.length}/2000` : ''}</span>
      {loading ? <button className="chat-send" type="button" aria-label={id ? 'Hentikan jawaban' : 'Stop reply'} onClick={() => controller.current?.abort()}><Square /></button> : <button className="chat-send" type="submit" disabled={!value.trim()} aria-label={id ? 'Kirim pertanyaan' : 'Send question'}><ArrowUp /></button>}
    </div>
  </form>;

  return <>
    <button ref={launcher} type="button" className="portfolio-bot-launcher" data-open={open} data-hint={launcherHint} aria-expanded={open} aria-label={open ? (id ? 'Tutup AI' : 'Close AI') : (id ? 'Ask Imam, tanya AI tentang Imam' : 'Ask Imam, AI portfolio assistant')} aria-haspopup="dialog" aria-controls="alwi-chat" onClick={() => {
      setLauncherHint(false);
      if (dialog.current?.open) dialog.current.close();
      else { dialog.current?.show(); setOpen(true); input.current?.focus(); }
    }}>
      {open ? <ChevronDown className="chat-launcher-chevron" aria-hidden="true" /> : <LauncherMascot />}{!open && <span className="chat-launcher-label" aria-hidden="true"><span className="chat-hint-short">AI</span><span className="chat-hint-full">Ask Imam</span></span>}
    </button>
    <dialog ref={dialog} id="alwi-chat" aria-labelledby="alwi-chat-title" aria-describedby="alwi-chat-description" className="portfolio-chat" onClose={() => { setOpen(false); launcher.current?.focus(); }}>
      <div className="chat-shell">
        <header className="chat-header">
          <div className="chat-identity">{showHistory ? <button type="button" className="chat-icon-button" aria-label={id ? 'Kembali ke chat' : 'Back to chat'} onClick={() => setShowHistory(false)}><ArrowLeft /></button> : <span className="chat-header-mascot"><Mascot mood="static" interactive={false} /></span>}<h2 id="alwi-chat-title">{showHistory ? (id ? 'Percakapan' : 'Threads') : currentThread?.title ?? (messages.length ? title : (id ? 'Percakapan baru' : 'New Chat'))}</h2><p id="alwi-chat-description" className="sr-only">{id ? 'AI untuk portfolio Imam' : 'AI for Imam’s portfolio'}</p></div>
          <div className="chat-header-actions">
            <button type="button" className="chat-icon-button" title={id ? 'Riwayat percakapan' : 'Thread history'} aria-label={id ? 'Riwayat percakapan' : 'Thread history'} aria-pressed={showHistory} disabled={loading} onClick={() => setShowHistory(shown => !shown)}><History /></button>
            <button type="button" className="chat-icon-button" title={id ? 'Percakapan baru' : 'New conversation'} aria-label={id ? 'Mulai percakapan baru' : 'Start a new conversation'} disabled={loading} onClick={newChat}><Plus /></button>
          </div>
        </header>
        {storageError && <p className="chat-storage-notice" role="status">{id ? 'Riwayat tidak bisa disimpan di browser ini.' : 'History cannot be saved in this browser.'}</p>}
        {showHistory ? <div className="chat-thread-panel">
          <label className="chat-thread-search"><Search aria-hidden="true" /><input value={search} onChange={event => setSearch(event.target.value)} placeholder={id ? 'Cari percakapan…' : 'Search threads…'} aria-label={id ? 'Cari percakapan' : 'Search threads'} /></label>
          <div className="chat-thread-tabs"><button type="button" aria-pressed={!showArchived} onClick={() => setShowArchived(false)}>{id ? 'Aktif' : 'Active'}</button><button type="button" aria-pressed={showArchived} onClick={() => setShowArchived(true)}>{id ? 'Arsip' : 'Archived'}</button></div>
          <div className="chat-thread-list">
            {!visibleThreads.length && <p className="chat-thread-empty">{search ? (id ? 'Tidak ada hasil.' : 'No matching threads.') : (id ? 'Belum ada percakapan di sini.' : 'No threads here yet.')}</p>}
            {visibleThreads.map(thread => <div key={thread.id} className="chat-thread-row" data-active={thread.id === activeThread}>
              {renameId === thread.id ? <form className="chat-thread-rename" onSubmit={event => { event.preventDefault(); if (renameValue.trim()) { setThreads(items => items.map(item => item.id === thread.id ? { ...item, title: renameValue.trim().slice(0, 80) } : item)); setRenameId(null); } }}><input autoFocus value={renameValue} maxLength={80} aria-label={id ? 'Nama percakapan' : 'Thread name'} onChange={event => setRenameValue(event.target.value)} onKeyDown={event => { if (event.key === 'Escape') { event.stopPropagation(); setRenameId(null); } }} /><button type="submit" className="chat-icon-button" aria-label={id ? 'Simpan nama' : 'Save name'}><Check /></button><button type="button" onClick={() => setRenameId(null)}>{id ? 'Batal' : 'Cancel'}</button></form> : <>
                <button type="button" className="chat-thread-open" onClick={() => { setActiveThread(thread.id); setMessages(thread.messages); setValue(''); setError(null); setShowHistory(false); setDeleteId(null); }}>{thread.title}</button>
                <details className="chat-thread-options"><summary aria-label={id ? `Opsi ${thread.title}` : `Options for ${thread.title}`}><MoreHorizontal /></summary><div className="chat-thread-menu">
                  <button type="button" onClick={() => { setRenameId(thread.id); setRenameValue(thread.title); }}><Pencil />{id ? 'Ganti nama' : 'Rename'}</button>
                  <button type="button" onClick={() => { setThreads(items => items.map(item => item.id === thread.id ? { ...item, archived: !item.archived } : item)); if (activeThread === thread.id) { setActiveThread(null); setMessages([]); setValue(''); } }}><Archive />{thread.archived ? (id ? 'Pulihkan' : 'Restore') : (id ? 'Arsipkan' : 'Archive')}</button>
                  <button type="button" className="chat-thread-delete" onClick={() => setDeleteId(thread.id)}><Trash2 />{id ? 'Hapus' : 'Delete'}</button>
                </div></details>
              </>}
              {deleteId === thread.id && <div className="chat-thread-confirm" role="group" aria-label={id ? 'Konfirmasi hapus' : 'Confirm deletion'}><p>{id ? 'Hapus percakapan ini permanen?' : 'Permanently delete this thread?'}</p><button type="button" onClick={() => setDeleteId(null)}>{id ? 'Batal' : 'Cancel'}</button><button type="button" className="chat-thread-delete" onClick={() => { setThreads(items => items.filter(item => item.id !== thread.id)); setDeleteId(null); if (activeThread === thread.id) { setActiveThread(null); setMessages([]); setValue(''); setError(null); } }}>{id ? 'Hapus' : 'Delete'}</button></div>}
            </div>)}
          </div>
        </div> : <><div ref={list} className="chat-scroll">
          {!messages.length && <div className="chat-welcome">
            <div className="chat-welcome-mascot"><ReactiveMascot listening={!!value.trim()} lang={lang} /></div>
            <h3 className="sr-only">{id ? 'Tanya AI tentang Imam' : 'Ask AI about Imam'}</h3>
            {composer}
            <div className="chat-suggestions">{suggestions.map(suggestion => <button key={suggestion.label} type="button" onClick={() => void ask(suggestion.question)}><ChevronRight aria-hidden="true" />{suggestion.label}</button>)}</div>
          </div>}
          <div className="chat-messages" role="log" aria-label={id ? 'Percakapan dengan asisten AI' : 'Conversation with the AI assistant'} aria-live="polite" aria-relevant="additions text">
            {messages.map(message => <article key={message.id} className={`chat-message chat-message-${message.role}`}>
              <span className={message.role === 'user' ? 'sr-only' : 'chat-author'}>{message.role === 'user' ? (id ? 'Kamu' : 'You') : title}</span>
              <div className="chat-message-content">{message.role === 'assistant' ? <Answer text={message.content} /> : message.content}</div>
              {message.role === 'assistant' && <>
                {!!message.sources?.length && <nav className="chat-sources" aria-label={id ? 'Sumber dari portfolio' : 'Portfolio sources'}>{message.sources.map(source => <a key={source.href} href={source.href}>{source.label}<ArrowUpRight aria-hidden="true" /></a>)}</nav>}
                <button className="chat-copy" type="button" aria-label={copied === message.id ? (id ? 'Jawaban disalin' : 'Reply copied') : (id ? 'Salin jawaban' : 'Copy reply')} onClick={() => void copy(message)}>{copied === message.id ? <Check /> : <Copy />}<span>{copied === message.id ? (id ? 'Disalin' : 'Copied') : (id ? 'Salin' : 'Copy')}</span></button>
              </>}
            </article>)}
          </div>
          {loading && <div className="chat-loading" role="status"><span className="chat-thinking-mascot"><Mascot mood={thinkingStep === 1 ? 'mumbling' : 'thinking'} interactive={false} /></span><span aria-hidden="true">{thinkingLabels[thinkingStep]}</span><span className="sr-only">{id ? 'AI sedang menyiapkan jawaban.' : 'AI is preparing a reply.'}</span></div>}
          {error && <div className="chat-error" role={error === 'cancelled' ? 'status' : 'alert'}>{error === 'cancelled' ? (id ? 'Dihentikan. Pertanyaanmu bisa diedit dan dikirim lagi.' : 'Stopped. You can edit your question and send it again.') : error === 'copy' ? (id ? 'Belum bisa menyalin. Pilih teks jawaban untuk menyalinnya.' : 'Could not copy. Select the reply text to copy it.') : <>{id ? 'Jawaban belum tersedia. Coba kirim lagi, atau ' : 'The reply is unavailable. Try again, or '}<a href="mailto:imambahrialwi21@gmail.com">{id ? 'hubungi Alwi' : 'contact Alwi'}</a>.</>}</div>}
        </div>
        <footer className="chat-footer">
          {!!messages.length && composer}
          <p className="chat-disclaimer">{id ? 'Jawaban AI berdasarkan portfolio. Bisa saja keliru.' : 'AI answers from the portfolio. May make mistakes.'}</p>
        </footer>
        </>}
      </div>
    </dialog>
  </>;
}
