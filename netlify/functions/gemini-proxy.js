exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };

  const API_KEY = process.env.GEMINI_API_KEY;
  if (!API_KEY) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "GEMINI_API_KEY not set in Netlify Environment Variables" }) };
  }

  try {
    const body = JSON.parse(event.body);
    // Frontend sends which model to try
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
      // Pass the error back so frontend can decide to retry with another model
      return {
        statusCode: resp.status, headers,
        body: JSON.stringify({ error: data.error?.message || "Gemini API error", status: resp.status }),
      };
    }

    return {
      statusCode: 200, headers,
      body: JSON.stringify({ text: data.candidates?.[0]?.content?.parts?.[0]?.text || "", model }),
    };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
