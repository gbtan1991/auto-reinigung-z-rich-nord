import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { conversationId, message } = await req.json();

    let conv;

    if (conversationId) {
      conv = await base44.asServiceRole.agents.getConversation(conversationId);
    } else {
      conv = await base44.asServiceRole.agents.createConversation({
        agent_name: "auto_reinigung_chatbot",
        metadata: { name: "Website Chat" },
      });
    }

    if (message) {
      await base44.asServiceRole.agents.addMessage(conv, { role: "user", content: message });

      // Poll for agent response (up to 25 seconds)
      let updated;
      for (let i = 0; i < 50; i++) {
        updated = await base44.asServiceRole.agents.getConversation(conv.id);
        const msgs = updated.messages || [];
        if (msgs.length > 0) {
          const last = msgs[msgs.length - 1];
          if (last.role === "assistant" && last.content) break;
        }
        await new Promise(r => setTimeout(r, 500));
      }
      const final = await base44.asServiceRole.agents.getConversation(conv.id);
      return Response.json({ conversationId: final.id, messages: final.messages || [] });
    }

    return Response.json({ conversationId: conv.id, messages: conv.messages || [] });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});