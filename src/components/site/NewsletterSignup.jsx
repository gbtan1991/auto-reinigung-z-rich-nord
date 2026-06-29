import { useState } from "react";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { useKlaviyo } from "@/components/site/KlaviyoProvider";
import { subscribeToNewsletter } from "@/lib/klaviyo";

export default function NewsletterSignup() {
  const { companyId, listId } = useKlaviyo();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  // Renders nothing until Klaviyo is configured, so no broken form appears.
  if (!companyId || !listId) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      await subscribeToNewsletter({ email, companyId, listId });
      setStatus("success");
      setMessage("Vielen Dank! Bitte bestätigen Sie Ihre Anmeldung in der E-Mail.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("Anmeldung fehlgeschlagen. Bitte später erneut versuchen.");
    }
  };

  return (
    <div className="rounded-[2rem] border border-border bg-card p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <Mail className="h-5 w-5 text-primary" />
        <h3 className="font-heading text-lg font-bold">Newsletter</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Angebote, Pflegetipps und Aktionen rund um die Fahrzeugpflege in Zürich Nord.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ihre E-Mail-Adresse"
          className="flex-1 rounded-2xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:-translate-y-0.5 disabled:opacity-60"
        >
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Anmelden"}
        </button>
      </form>
      {status === "success" && (
        <p className="mt-3 flex items-center gap-2 text-sm font-medium text-primary">
          <CheckCircle2 className="h-4 w-4" /> {message}
        </p>
      )}
      {status === "error" && <p className="mt-3 text-sm text-destructive">{message}</p>}
    </div>
  );
}