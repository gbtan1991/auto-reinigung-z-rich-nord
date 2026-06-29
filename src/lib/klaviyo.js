import { base44 } from "@/api/base44Client";

// Queues a Klaviyo identify call. Safe to call before the onsite script
// has loaded — Klaviyo processes the _learnq queue once it initializes.
export function klaviyoIdentify({ email, firstName, lastName }) {
  if (typeof window === "undefined") return;
  window._learnq = window._learnq || [];
  window._learnq.push([
    "identify",
    {
      $email: email,
      $first_name: firstName || "",
      $last_name: lastName || "",
    },
  ]);
}

// Identifies the currently logged-in user, splitting full_name into
// first / last name. Used after login/signup redirect lands on the app.
export async function klaviyoIdentifyCurrentUser() {
  try {
    const user = await base44.auth.me();
    if (!user || !user.email) return;
    const parts = (user.full_name || "").trim().split(/\s+/);
    const firstName = parts[0] || "";
    const lastName = parts.length > 1 ? parts.slice(1).join(" ") : "";
    klaviyoIdentify({ email: user.email, firstName, lastName });
  } catch (e) {
    /* user not logged in — ignore */
  }
}

// Subscribes an email to a Klaviyo list via the public Client API.
// Klaviyo API revision: 2024-10-15. Returns 202 Accepted on success.
export async function subscribeToNewsletter({ email, companyId, listId }) {
  const res = await fetch(
    `https://a.klaviyo.com/client/subscriptions/?company_id=${encodeURIComponent(companyId)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        revision: "2024-10-15",
      },
      body: JSON.stringify({
        data: {
          type: "subscription",
          attributes: {
            list: { type: "list", id: listId },
            email,
            custom_source: "Newsletter Signup",
          },
        },
      }),
    }
  );
  if (res.status !== 202 && res.status !== 204 && !res.ok) {
    let details = "";
    try {
      details = await res.text();
    } catch (e) {
      /* ignore */
    }
    throw new Error(details || `Klaviyo error ${res.status}`);
  }
  return true;
}