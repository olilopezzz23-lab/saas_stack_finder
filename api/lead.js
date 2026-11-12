export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const email = (body.email || "").trim();
    const nicho = (body.nicho || "General").trim();
    const source = (body.source || "Prueba Gratis").trim();

    if (!email) {
      return res.status(400).json({ ok: false, error: "Email required" });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN || "8711372333:AAHxtXJ76LzMJohVyzdZCJ2upwTiHSgDsmw";
    const chatId = process.env.TELEGRAM_CHAT_ID || "6296037867";

    const fecha = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });
    const message = [
      "🔔 ¡Nuevo Lead en AutoShorts.ai!",
      `📧 Correo: ${email}`,
      `🎯 Nicho: ${nicho}`,
      `📍 Origen: ${source}`,
      `⏰ Fecha: ${fecha}`
    ].join("\n");

    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });

    const tgData = await tgRes.json();
    return res.status(200).json({ ok: tgData.ok === true });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
