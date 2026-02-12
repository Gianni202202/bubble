"use client";

export default function QuoteBanner() {
  return (
    <section style={{ padding: "80px 24px", background: "#f9fafb" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, #fef3c7 0%, #fff 50%, #dbeafe 100%)",
          border: "3px solid #4361ee",
          borderRadius: 24,
          padding: 48,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 32,
          alignItems: "center",
        }}>
          <div>
            <p style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, color: "#4361ee", lineHeight: 1.4, marginBottom: 16 }}>
              &ldquo;Ik besteed honderden uren aan het onderzoeken van recruitment tech en Elvatix is lichtjaren vooruit.&rdquo;
            </p>
            <p style={{ fontWeight: 700, fontSize: 15, color: "#111" }}>Kevin Coenen</p>
            <p style={{ fontSize: 13, color: "#9ca3af" }}>Oprichter, Elvatix</p>
          </div>
          <div style={{ width: 100, height: 100, borderRadius: "50%", background: "#e8e0f0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: 48, opacity: 0.5 }}>👤</span>
          </div>
        </div>
      </div>
    </section>
  );
}
