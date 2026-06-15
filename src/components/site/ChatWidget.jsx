import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, Info, Phone, MapPin, Mail, ExternalLink, ChevronRight, CalendarDays, AlertCircle, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { appParams } from "@/lib/app-params";

const FUNCTIONS_BASE = appParams.appBaseUrl || "";
const CHATBOT_URL = FUNCTIONS_BASE ? `${FUNCTIONS_BASE}/functions/chatbot` : "";

const ACTION_BUTTONS = {
  "WhatsApp öffnen": { type: "link", url: "https://wa.me/41797415658", icon: "whatsapp" },
  "WhatsApp": { type: "link", url: "https://wa.me/41797415658", icon: "whatsapp" },
  "Jetzt online buchen": { type: "link", url: "https://widget.calenso.com/?partner=turicumreinigung&type=appointment&store_id=&service[]=&isFrame=true&lang=de_CH", icon: "calendar" },
  "Termin direkt buchen": { type: "link", url: "https://widget.calenso.com/?partner=turicumreinigung&type=appointment&store_id=&service[]=&isFrame=true&lang=de_CH", icon: "calendar" },
  "Anrufen": { type: "link", url: "tel:+41445119490", icon: "phone" },
  "Rückruf anfordern": { type: "link", url: "tel:+41445119490", icon: "phone" },
  "Route öffnen": { type: "link", url: "https://maps.google.com/?q=Heerenwiesen+18+8051+Zürich", icon: "map" },
  "E-Mail schreiben": { type: "link", url: "mailto:info@autoreinigung-zuerich-nord.ch", icon: "mail" },
};

function parseMessage(text) {
  if (!text) return { content: "", buttons: [] };
  const lines = text.split("\n");
  const buttons = [];
  const contentLines = [];

  for (const line of lines) {
    if (line.trim().startsWith("BUTTONS:")) {
      const labelStr = line.replace(/^BUTTONS:\s*/i, "").trim();
      const labels = labelStr.split("|").map((l) => l.trim()).filter(Boolean);
      for (const label of labels) {
        if (ACTION_BUTTONS[label]) {
          buttons.push({ label, ...ACTION_BUTTONS[label] });
        } else {
          buttons.push({ label, type: "message" });
        }
      }
    } else {
      contentLines.push(line);
    }
  }

  return { content: contentLines.join("\n").trim(), buttons };
}

function ChatButton({ button, onClick }) {
  const icons = {
    whatsapp: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    phone: <Phone className="h-4 w-4" />,
    map: <MapPin className="h-4 w-4" />,
    mail: <Mail className="h-4 w-4" />,
    calendar: <CalendarDays className="h-4 w-4" />,
  };

  if (button.type === "link") {
    return (
      <a
        href={button.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/10 hover:border-primary/50"
      >
        {icons[button.icon] || <ExternalLink className="h-4 w-4" />}
        {button.label}
        <ExternalLink className="h-3 w-3 opacity-50" />
      </a>
    );
  }

  return (
    <button
      onClick={() => onClick(button.label)}
      className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-accent hover:text-primary shadow-sm"
    >
      <ChevronRight className="h-3.5 w-3.5 text-primary/60" />
      {button.label}
    </button>
  );
}

const WELCOME_BUTTONS = [
  { label: "Offerte anfragen", type: "message" },
  { label: "Termin buchen", type: "message" },
  { label: "Preise", type: "message" },
  { label: "Dienstleistungen", type: "message" },
  { label: "Kontakt & Standort", type: "message" },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("idle"); // idle | creating | ready | waiting | error
  const [error, setError] = useState(null);
  const convIdRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  const apiCall = async (payload) => {
    // Try SDK first, fall back to direct fetch
    try {
      const res = await base44.functions.invoke("chatbot", payload);
      return res.data;
    } catch (sdkErr) {
      console.warn("SDK invoke failed, trying direct fetch:", sdkErr?.message);
      if (!CHATBOT_URL) throw sdkErr;
      const res = await fetch(CHATBOT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    }
  };

  const startConversation = async () => {
    if (convIdRef.current) return;
    setStatus("creating");
    setError(null);
    try {
      const data = await apiCall({});
      convIdRef.current = data.conversationId;
      setMessages(data.messages || []);
      setStatus("ready");
    } catch (e) {
      console.error("Chat init error:", e);
      setError(e?.response?.data?.error || e?.message || "Konversation konnte nicht gestartet werden");
      setStatus("error");
    }
  };

  const handleOpen = () => {
    setOpen(true);
    if (!convIdRef.current) startConversation();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendMessage = async (text) => {
    if (!text) return;
    if (!convIdRef.current) {
      await startConversation();
      if (!convIdRef.current) return;
    }
    setStatus("waiting");
    const msg = text.trim();
    setInput("");
    try {
      const data = await apiCall({ conversationId: convIdRef.current, message: msg });
      setMessages(data.messages || []);
      setStatus("ready");
    } catch (e) {
      console.error("Send error:", e);
      setError(e?.response?.data?.error || e?.message || "Nachricht konnte nicht gesendet werden");
      setStatus("error");
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleRetry = () => {
    convIdRef.current = null;
    startConversation();
  };

  const visibleMessages = messages.filter(
    (m) => m.role === "user" || (m.role === "assistant" && m.content)
  );

  const showWelcome = visibleMessages.length === 0 && status !== "creating" && status !== "error";

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-[999] flex w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 bg-primary px-5 py-4 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-white text-sm">Autoreinigung Zürich-Nord</p>
              <p className="text-xs text-white/70">Virtueller Assistent</p>
            </div>
            <button onClick={handleClose} className="text-white/80 hover:text-white transition">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Datenschutz */}
          <div className="flex items-start gap-2 bg-accent/50 border-b border-border px-4 py-2.5 shrink-0">
            <Info className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              KI-Assistent – keine sensiblen Daten.{" "}
              <Link to="/datenschutz" className="underline hover:text-primary transition-colors" onClick={handleClose}>
                Datenschutz
              </Link>
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
            {/* Creating / Waiting */}
            {(status === "creating" || status === "waiting") && (
              <div className="flex gap-2 items-start">
                <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="rounded-2xl rounded-tl-none bg-secondary px-4 py-2.5 text-sm">
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <div className="flex flex-col items-center gap-3 py-8 px-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <p className="text-sm text-muted-foreground">{error || "Fehler beim Starten"}</p>
                <button
                  onClick={handleRetry}
                  className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  <RefreshCw className="h-4 w-4" /> Erneut versuchen
                </button>
              </div>
            )}

            {/* Welcome */}
            {showWelcome && (
              <div className="flex gap-2 items-start flex-col">
                <div className="flex gap-2 items-start">
                  <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-secondary px-4 py-2.5 text-sm leading-relaxed">
                    Willkommen bei Autoreinigung Zürich-Nord. Womit kann ich helfen?
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pl-9">
                  {WELCOME_BUTTONS.map((btn, i) => (
                    <ChatButton key={i} button={btn} onClick={sendMessage} />
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            {visibleMessages.map((msg, i) => {
              const isLastAssistantMsg =
                msg.role === "assistant" &&
                (i === visibleMessages.length - 1 || visibleMessages[i + 1]?.role === "user");

              const parsed = parseMessage(msg.content);

              return (
                <div key={i} className="flex gap-2 items-start flex-col">
                  <div className={`flex gap-2 items-start w-full ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    {msg.role === "assistant" && (
                      <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    {parsed.content && (
                      <div
                        className={`rounded-2xl px-4 py-2.5 text-sm max-w-[80%] whitespace-pre-wrap leading-relaxed ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground rounded-tr-none"
                            : "bg-secondary rounded-tl-none"
                        }`}
                      >
                        {parsed.content}
                      </div>
                    )}
                  </div>

                  {parsed.buttons.length > 0 && isLastAssistantMsg && status === "ready" && (
                    <div className="flex flex-wrap gap-2 pl-9">
                      {parsed.buttons.map((btn, j) => (
                        <ChatButton key={j} button={btn} onClick={sendMessage} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 flex gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Nachricht schreiben..."
              className="flex-1 rounded-full border border-border bg-secondary px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
              disabled={status === "creating" || status === "waiting"}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || status === "creating" || status === "waiting"}
              className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 transition hover:scale-105 shrink-0"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle */}
      <button
        onClick={open ? handleClose : handleOpen}
        className="fixed bottom-24 right-4 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition hover:scale-105"
        aria-label={open ? "Chat schliessen" : "Chat öffnen"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
}