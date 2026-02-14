"use client";

const pains = [
  "Handmatig InMails typen voor élke kandidaat.",
  "Connectieverzoeken kopiëren en plakken uit templates.",
  "Uren besteden aan gepersonaliseerde outreach.",
  "Geen idee welke berichten écht werken.",
  "Staren naar een inbox vol onbeantwoorde berichten.",
];

export default function PainPoints() {
  return (
    <section style={{ padding: "80px 24px", textAlign: "center", background: "#f9fafb" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
          {pains.map((pain, i) => (
            <p key={i} style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.6 }}>
              {pain}
            </p>
          ))}
        </div>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, fontStyle: "italic", color: "#111", marginBottom: 12 }}>
          Wat als het anders kon?
        </h2>
        <p style={{ fontSize: 16, color: "#9ca3af" }}>
          Een nieuwe manier van recruiters bereiken.
        </p>
      </div>
    </section>
  );
}
