"use client";

const stats = [
  { number: "85%", label: "Minder tijd per InMail" },
  { number: "3x", label: "Hogere response rate" },
  { number: "500+", label: "Actieve recruiters" },
];

export default function Stats() {
  return (
    <section style={{ background: "linear-gradient(135deg, #f97316 0%, #ec4899 30%, #a855f7 60%, #6366f1 100%)", padding: "80px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(20px)", borderRadius: 32, padding: "64px 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, textAlign: "center" }}>
            {stats.map((stat, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: "clamp(48px, 6vw, 80px)",
                    fontWeight: 900,
                    marginBottom: 8,
                    background: "linear-gradient(135deg, #4361ee 0%, #7c3aed 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.number}
                </div>
                <p style={{ color: "#6b7280", fontSize: 16, fontWeight: 500 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="/demo" className="pill-btn pill-btn-primary" style={{ padding: "14px 32px" }}>
            Meer weten over Elvatix
          </a>
        </div>
      </div>
    </section>
  );
}
