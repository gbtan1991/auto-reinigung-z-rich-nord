import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

// Returns Klaviyo public config (company ID + list ID) to the browser.
// These are public values safe to expose client-side; the private API key
// is never sent to the frontend.
Deno.serve(async (req) => {
  try {
    const companyId = Deno.env.get("KLAVIYO_COMPANY_ID");
    const listId = Deno.env.get("KLAVIYO_LIST_ID");
    if (!companyId) {
      return Response.json({ error: "Klaviyo not configured" }, { status: 503 });
    }
    return Response.json({ companyId, listId: listId || null });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});