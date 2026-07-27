// Netlify Function: Proxies requests to Gemini API
// API key is stored as environment variable GEMINI_API_KEY in Netlify dashboard
// The frontend never sees the key.

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const API_KEY = process.env.GEMINI_API_KEY;
  if (!API_KEY) {
    return {
      statusCode: 500, headers,
      body: JSON.stringify({ error: "GEMINI_API_KEY not configured in Netlify environment variables" }),
    };
  }

  try {
    const body = JSON.parse(event.body);
    const model = body.model || "gemini-2.0-flash";

    const geminiBody = {
      contents: body.contents || [],
      generationConfig: {
        temperature: body.temperature || 0.7,
        maxOutputTokens: body.maxOutputTokens || 1024,
      },
    };

    if (body.systemInstruction) {
      geminiBody.systemInstruction = { parts: [{ text: body.systemInstruction }] };
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiBody),
    });

    const data = await resp.json();

    if (!resp.ok) {
      return {
        statusCode: resp.status, headers,
        body: JSON.stringify({ error: data.error?.message || "Gemini API error", details: data }),
      };
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    return {
      statusCode: 200, headers,
      body: JSON.stringify({ text, raw: data }),
    };
  } catch (err) {
    return {
      statusCode: 500, headers,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
