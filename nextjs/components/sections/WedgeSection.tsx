"use client";
import { useEffect, useRef, useState } from "react";

const timelineItems = [
  { label: "Direct AI-gegenereerde berichten", filled: true },
  { label: "70% van outreach is verouderd", filled: false },
  { label: "Elke kandidaat ophalen, handmatig", filled: false },
  { label: "Vertrouwen daalt bij trage opvolging", filled: false },
];

export default function WedgeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const h = sectionRef.current.offsetHeight;
      const p = Math.min(1, Math.max(0, -rect.top / (h - window.innerHeight)));
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Much smaller wedge: starts at 1% and grows to max 15%
  const wedgeSize = 1 + progress * 14;

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #a855f7 0%, #d946ef 30%, #7c3aed 70%, #1e1b4b 100%)",
        minHeight: "80vh",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          {/* Left: headline + text */}
          <div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, color: "white", marginBottom: 16, lineHeight: 1.1 }}>
              Recruitment verandert.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 460, marginBottom: 32, lineHeight: 1.7 }}>
              Wie blijft vasthouden aan de oude manier, loopt achter. Met de Elvatix AI Copilot ben je altijd een stap voor.
            </p>
            <a href="/platform" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.15)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "10px 28px",
              borderRadius: 9999,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              cursor: "pointer",
            }}>
              Elvatix AI Copilot
            </a>
          </div>

          {/* Right: timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28, paddingTop: 16 }}>
            {timelineItems.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{
                  width: item.filled ? 14 : 12,
                  height: item.filled ? 14 : 12,
                  border: "2px solid white",
                  borderRadius: 3,
                  background: item.filled ? "white" : "transparent",
                  flexShrink: 0,
                }} />
                <span style={{ color: "white", fontSize: 14, fontWeight: 500, opacity: item.filled ? 1 : 0.6 }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wedge shape — subtle, centered visually */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          background: "#0a0a0a",
          clipPath: `polygon(0 ${50 - wedgeSize}%, 100% ${48 - wedgeSize}%, 100% ${52 + wedgeSize}%, 0 ${50 + wedgeSize}%)`,
          transition: "clip-path 0.05s linear",
          zIndex: 1,
        }}
      />
    </section>
  );
}
