import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

app.use('*', logger(console.log));

app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

app.get("/make-server-9630e2a7/health", (c) => {
  return c.json({ status: "ok" });
});

// POST /audit-leads — store a new website audit request
app.post("/make-server-9630e2a7/audit-leads", async (c) => {
  try {
    const body = await c.req.json();

    const {
      name,
      company_name,
      website_url,
      email,
      phone,
      improvement_goal,
      timeline,
      budget_range,
    } = body;

    // Server-side required field validation
    if (!name?.trim()) {
      return c.json({ error: "Name is required." }, 400);
    }
    if (!website_url?.trim()) {
      return c.json({ error: "Website URL is required." }, 400);
    }
    if (!email?.trim()) {
      return c.json({ error: "Email is required." }, 400);
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return c.json({ error: "Please enter a valid email address." }, 400);
    }

    const id = `audit_lead:${Date.now()}:${crypto.randomUUID()}`;

    const lead = {
      id,
      name: name.trim(),
      company_name: company_name?.trim() || "",
      website_url: website_url.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "",
      improvement_goal: improvement_goal?.trim() || "",
      timeline: timeline || "",
      budget_range: budget_range || "",
      source: "website_audit_form",
      status: "new",
      submitted_at: new Date().toISOString(),
    };

    await kv.set(id, lead);

    console.log(`Audit lead saved: ${id} | email: ${email} | company: ${company_name || "—"}`);

    return c.json({ success: true, id }, 201);
  } catch (err) {
    console.log("Error saving audit lead:", err);
    return c.json(
      { error: `Failed to save request: ${err instanceof Error ? err.message : String(err)}` },
      500
    );
  }
});

// GET /audit-leads — retrieve all leads, newest first (internal/admin use)
app.get("/make-server-9630e2a7/audit-leads", async (c) => {
  try {
    const leads = await kv.getByPrefix("audit_lead:");
    const sorted = [...leads].sort(
      (a: any, b: any) =>
        new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime()
    );
    return c.json({ leads: sorted, count: sorted.length });
  } catch (err) {
    console.log("Error fetching audit leads:", err);
    return c.json({ error: `Failed to fetch leads: ${err}` }, 500);
  }
});

Deno.serve(app.fetch);
