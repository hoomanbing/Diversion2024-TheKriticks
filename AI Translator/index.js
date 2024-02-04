import { Ai } from "@cloudflare/ai";
import template from "./template.html";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.html(template));

app.post("/", async (c) => {
  const ai = new Ai(c.env.AI);

  const body = await c.req.json();
  const text = body.text || "I'll have an order of the moule frites";
  const sourceLang = body.sourceLang || "english";
  const targetLang = body.targetLang || "french";

  const response = await ai.run("@cf/meta/m2m100-1.2b", {
    text,
    source_lang: sourceLang,
    target_lang: targetLang,
  });

  return c.json(response);
});

app.onError((err, c) => {
  return c.text(err);
});

export default app;
