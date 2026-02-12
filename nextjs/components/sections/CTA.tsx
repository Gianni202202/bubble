"use client";

export default function CTA() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #a855f7 0%, #6366f1 40%, #4361ee 100%)",
      padding: "100px 24px",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, fontStyle: "italic", color: "white", marginBottom: 20 }}>
          Word een recruitment machine
        </h2>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", marginBottom: 40, lineHeight: 1.6 }}>
          Klaar om te zien hoe Elvatix je recruitment workflow transformeert? Begin vandaag nog.
        </p>
        <a href="/demo" className="pill-btn pill-btn-white" style={{ padding: "16px 40px", fontSize: 16 }}>
          Boek een demo
        </a>
      </div>
    </section>
  );
}
