"use client";
import { useEffect, useRef, useState } from "react";

const timelineTop = [
  { x: 30, label: "Direct AI-gegenereerde berichten" },
  { x: 50, label: "Hogere response rates" },
  { x: 75, label: "Eerste keus bij hiring needs" },
];

const timelineBottom = [
  { x: 30, label: "70% van outreach is verouderd" },
  { x: 50, label: "Elke kandidaat opnieuw handmatig" },
  { x: 75, label: "Vertrouwen daalt bij trage opvolging" },
];

export default function WedgeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = viewportHeight - rect.top;
      const total = sectionHeight + viewportHeight;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const spread = progress * 40;
  const topY = 50 - spread;
  const bottomY = 50 + spread;
  const clipPath = `polygon(0 50%, 100% ${topY}%, 100% ${bottomY}%, 0 50%)`;

  return (
    <section ref={sectionRef} className="wedge-bg py-32 px-6 relative" style={{ minHeight: "100vh" }}>
      <div className="max-w-4xl mx-auto text-left mb-20 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Recruitment verandert.
        </h2>
        <p className="text-lg text-white/70 max-w-xl leading-relaxed">
          Wie blijft vasthouden aan de oude manier, loopt achter.
          Met de Elvatix AI Copilot ben je altijd een stap voor.
        </p>
        <div className="flex gap-4 mt-8">
          <span className="pill-btn pill-btn-outline" style={{ borderColor: "white", color: "white" }}>
            Elvatix AI Copilot
          </span>
        </div>
      </div>

      <div className="wedge-shape" style={{ clipPath, top: 0, bottom: 0, height: "100%" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="relative h-48">
          {timelineTop.map((node, i) => {
            const opacity = progress > (i + 1) * 0.2 ? 1 : 0;
            return (
              <div
                key={i}
                className="absolute text-center transition-all duration-500"
                style={{ left: `${node.x}%`, top: `${20 - spread * 0.3}%`, transform: "translateX(-50%)", opacity }}
              >
                <p className="text-white text-sm font-medium mb-2 whitespace-nowrap">{node.label}</p>
                <div className="timeline-node-filled mx-auto" />
                <div className="timeline-line h-8 mx-auto" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="relative h-48">
          {timelineBottom.map((node, i) => {
            const opacity = progress > (i + 1) * 0.2 ? 1 : 0;
            return (
              <div
                key={i}
                className="absolute text-center transition-all duration-500"
                style={{ left: `${node.x}%`, bottom: `${20 - spread * 0.3}%`, transform: "translateX(-50%)", opacity }}
              >
                <div className="timeline-line h-8 mx-auto" />
                <div className="timeline-node mx-auto mb-2" />
                <p className="text-white/70 text-sm whitespace-nowrap">{node.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {progress > 0.5 && (
        <div className="absolute right-16 top-1/2 -translate-y-1/2 z-10 text-center text-white transition-opacity duration-700">
          <div className="text-3xl mb-2">↑</div>
          <p className="text-sm font-semibold">De kloof<br />wordt groter.</p>
          <div className="text-3xl mt-2">↓</div>
        </div>
      )}

      <div className="relative z-10 mt-8">
        <span className="pill-btn pill-btn-outline" style={{ borderColor: "white", color: "white" }}>
          De Status Quo
        </span>
      </div>
    </section>
  );
}
