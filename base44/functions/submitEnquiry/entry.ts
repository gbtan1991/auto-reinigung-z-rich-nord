// Forwards contact-form enquiries to the MeisterFlow webhook.
// Public endpoint (no auth) — the contact form is visitor-facing.
// The webhook accepts: name, email, description.
const WEBHOOK_URL = 'https://app.meisterflow.ch/api/webhooks/enquiries/6423108b4a367b131e18a4eae673c64826f95fd99a8de3f3';

export default async function(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const { name, email, subject, message, website } = body;

    // Honeypot: real users never fill the hidden "website" field
    if (website) {
      return Response.json({ ok: true });
    }

    if (!name || !email) {
      return Response.json({ error: 'Pflichtfelder fehlen' }, { status: 400 });
    }

    // Combine subject + message into the single "description" field the webhook accepts
    const description = [subject, message].filter(Boolean).join('\n\n');

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, description }),
    });

    if (!response.ok) {
      return Response.json({ error: 'Webhook-Fehler' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}