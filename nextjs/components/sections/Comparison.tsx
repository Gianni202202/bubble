"use client";

const rows = [
  {
    category: "Persoonlijke InMails sturen",
    old: { text: "Handmatig profiel bekijken, bericht typen, personaliseren per kandidaat", time: "5 minuten per kandidaat" },
    new_: { text: "Elvatix genereert een gepersonaliseerd bericht op basis van het LinkedIn-profiel met één klik", time: "10 seconden per kandidaat" },
  },
  {
    category: "Connectieverzoeken",
    old: { text: "Template kopiëren, plakken, handmatig aanpassen per persoon", time: "3 minuten per kandidaat" },
    new_: { text: "AI past automatisch de toon en inhoud aan op basis van het profiel", time: "5 seconden per kandidaat" },
  },
  {
    category: "Follow-up berichten",
    old: { text: "Bijhouden wie je hebt benaderd, handmatig opvolgen, berichten opnieuw schrijven", time: "10 minuten per batch" },
    new_: { text: "Automatische reminders en AI-gegenereerde follow-ups", time: "0 seconden per batch" },
  },
  {
    category: "Outreach personaliseren",
    old: { text: "CV's lezen, recent posts checken, handmatig relevante details verwerken", time: "8 minuten per kandidaat" },
    new_: { text: "AI analyseert profiel, posts en ervaring — verwerkt dit automatisch in het bericht", time: "10 seconden per kandidaat" },
  },
  {
    category: "Performance bijhouden",
    old: { text: "Handmatig Excel bijhouden, geen inzicht in welke berichten werken", time: "1 uur per week" },
    new_: { text: "Real-time dashboard met response rates per template en bericht", time: "0 seconden" },
  },
];

export default function Comparison() {
  return (
    <section id="comparison" className="section-padding" style={{ background: "#fff" }}>
      <div className="section-inner">
        {/* Header row */}
        <div className="comparison-grid" style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#374151" }}>De oude manier</h3>
          <div className="comparison-center-label" />
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#6a9a00", textAlign: "right" }}>De nieuwe manier</h3>
        </div>

        {/* Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {rows.map((row, i) => (
            <div key={i} className="comparison-grid">
              {/* Old card */}
              <div style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 16,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
              }}>
                <div className="comparison-mobile-label">De oude manier</div>
                <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 8, color: "#111" }}>{row.old.text}</p>
                <p style={{ fontSize: 13, color: "#9ca3af", fontStyle: "italic" }}>{row.old.time}</p>
              </div>

              {/* Category label (center, desktop only) */}
              <div className="comparison-center-label">
                <span style={{ fontSize: 14, fontWeight: 600, color: "#6b7280", textAlign: "center" }}>{row.category}</span>
              </div>

              {/* New card — Loxo style with Elvatix green gradient */}
              <div style={{
                background: "linear-gradient(135deg, #8db600 0%, #6a9a00 50%, #4d7a00 100%)",
                borderRadius: 16,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                color: "white",
                boxShadow: "0 4px 16px rgba(141,182,0,0.25)",
              }}>
                <div className="comparison-mobile-label" style={{ color: "rgba(255,255,255,0.7)" }}>De nieuwe manier</div>
                <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>{row.new_.text}</p>
                <p style={{ fontSize: 13, opacity: 0.8, fontStyle: "italic" }}>{row.new_.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
