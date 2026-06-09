import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [starting, setStarting] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const startConversation = async () => {
    if (conversation) return;
    setStarting(true);
    try {
      const conv = await base44.agents.createConversation({
        agent_name: "auto_reinigung_chatbot",
        metadata: { name: "Website Chat" },
      });
      setConversation(conv);
      base44.agents.subscribeToConversation(conv.id, (data) => {
        setMessages(data.messages || []);
      });
    } catch (e) {
      console.error(e);
    }
    setStarting(false);
  };

  const handleOpen = async () => {
    setOpen(true);
    if (!conversation) await startConversation();
  };

  const sendMessage = async () => {
    if (!input.trim() || loading || !conversation) return;
    const text = input.trim();
    setInput("");
    setLoading(true);
    try {
      await base44.agents.addMessage(conversation, { role: "user", content: text });
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const visibleMessages = messages.filter(
    (m) => m.role === "user" || (m.role === "assistant" && m.content)
  );

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex w-[350px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 bg-primary px-5 py-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-white text-sm">Auto Reinigung Zürich Nord</p>
              <p className="text-xs text-white/70">Virtueller Assistent</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[320px] max-h-[400px]">
            {starting && (
              <div className="flex gap-2 items-start">
                <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="rounded-2xl rounded-tl-none bg-secondary px-4 py-2.5 text-sm">
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
            {visibleMessages.length === 0 && !starting && (
              <div className="flex gap-2 items-start">
                <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="rounded-2xl rounded-tl-none bg-secondary px-4 py-2.5 text-sm">
                  Hallo! Wie kann ich Ihnen helfen? Benötigen Sie ein Angebot oder möchten Sie einen Termin anfragen?
                </div>
              </div>
            )}
            {visibleMessages.map((msg, i) => (
              <div key={i} className={`flex gap-2 items-start ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                {msg.role === "assistant" && (
                  <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div className={`rounded-2xl px-4 py-2.5 text-sm max-w-[80%] whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-none"
                    : "bg-secondary rounded-tl-none"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-2 items-start">
                <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="rounded-2xl rounded-tl-none bg-secondary px-4 py-2.5 text-sm">
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Nachricht schreiben..."
              className="flex-1 rounded-full border border-border bg-secondary px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
              disabled={starting || loading}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading || starting}
              className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 transition hover:scale-105"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={open ? () => setOpen(false) : handleOpen}
        className="fixed bottom-24 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition hover:scale-105 md:flex"
        aria-label="Chat öffnen"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
}