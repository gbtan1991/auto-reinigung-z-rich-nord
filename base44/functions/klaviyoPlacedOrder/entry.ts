import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

// Server-side: sends a "Placed Order" event to Klaviyo's Events API.
// The private API key stays on the server and is never exposed to the browser.
// Klaviyo API revision: 2024-10-15.
Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json().catch(() => ({}));
    const { orderId, total, email, firstName, lastName } = body || {};
    if (!orderId || total == null || !email) {
      return Response.json({ error: 'orderId, total and email are required' }, { status: 400 });
    }

    const privateKey = Deno.env.get("KLAVIYO_PRIVATE_KEY");
    if (!privateKey) {
      return Response.json({ error: 'Klaviyo private key not configured' }, { status: 503 });
    }

    const profileAttributes = { email };
    if (firstName) profileAttributes.first_name = firstName;
    if (lastName) profileAttributes.last_name = lastName;

    const payload = {
      data: {
        type: "event",
        attributes: {
          properties: {
            "$event_id": String(orderId),
            "$value": Number(total),
            "order_id": String(orderId),
          },
          metric: {
            data: {
              type: "metric",
              attributes: { name: "Placed Order" }
            }
          },
          profile: {
            data: {
              type: "profile",
              attributes: profileAttributes
            }
          }
        }
      }
    };

    const res = await fetch("https://a.klaviyo.com/api/events/", {
      method: "POST",
      headers: {
        "Authorization": `Klaviyo-API-Key ${privateKey}`,
        "Content-Type": "application/json",
        "revision": "2024-10-15",
        "accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const details = await res.text().catch(() => "");
      return Response.json({ error: `Klaviyo API error ${res.status}`, details }, { status: 502 });
    }
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});