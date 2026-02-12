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

  const wedgeSize = 2 + progress * 46;

  return (
    <section
      ref={sectionRef}
      className="wedge-bg"
      style={{ minHeight: "120vh", padding: "100px 24px", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "white", marginBottom: 12 }}>
          <span className="gradient-text" style={{ background: "linear-gradient(135deg, #fbbf24, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>R</span>
          ecruitment verandert.
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 500, marginBottom: 32 }}>
          Wie blijft vasthouden aan de oude manier, loopt achter. Met de Elvatix AI Copilot ben je altijd een stap voor.
        </p>
        <a href="/platform" className="pill-btn" style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)", padding: "10px 28px", borderRadius: 9999 }}>
          Elvatix AI Copilot
        </a>

        {/* Timeline */}
        <div style={{ position: "absolute", top: 200, left: 40, display: "flex", flexDirection: "column", gap: 32 }}>
          {timelineItems.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div className={item.filled ? "timeline-node-filled" : "timeline-node"} />
              <span style={{ color: "white", fontSize: 14, fontWeight: 500, opacity: item.filled ? 1 : 0.6 }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* The wedge */}
      <div
        className="wedge-shape"
        style={{
          top: 0,
          bottom: 0,
          clipPath: `polygon(0 ${50 - wedgeSize}%, 100% ${48 - wedgeSize}%, 100% ${52 + wedgeSize}%, 0 ${50 + wedgeSize}%)`,
        }}
      />

      {/* Corner labels */}
      <div style={{ position: "absolute", top: 40, right: 40, zIndex: 3, textAlign: "right" }}>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>De kloof</p>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>wordt groter.</p>
        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 24 }}>↓</span>
      </div>
      <div style={{ position: "absolute", bottom: 40, left: 24, zIndex: 3 }}>
        <a href="#comparison" className="pill-btn" style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)", padding: "10px 28px", borderRadius: 9999 }}>De Status Quo</a>
      </div>
    </section>
  );
}
