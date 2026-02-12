"use client";
import { useEffect, useRef } from "react";

const solutions = [
  { icon: "🔍", title: "Recruitmentbureaus", description: "Direct hire en werving & selectie bureaus die hun outreach willen versnellen." },
  { icon: "🏢", title: "Detacheringsbureaus", description: "Professionele detacheerders die continu on-demand talent moeten sourcen." },
  { icon: "👔", title: "Corporate Recruiters", description: "In-house recruitment en talent acquisition teams bij grote organisaties." },
  { icon: "🤝", title: "Executive Search", description: "Retained search firms die premium, gepersonaliseerde benadering vereisen." },
  { icon: "🏠", title: "Freelance Recruiters", description: "Zelfstandige recruiters die meer willen doen met minder tijd." },
  { icon: "📈", title: "High-Volume Hiring", description: "Teams die grote aantallen kandidaten tegelijk moeten benaderen." },
];

export default function Solutions() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in-up text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Op maat gemaakte technologie<br />
            voor elke recruiter
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Of je nu in-house werkt, bij een bureau, of als zelfstandige — Elvatix past zich aan jouw workflow aan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {solutions.map((s, i) => (
            <div
              key={i}
              className={`fade-in-up fade-in-up-delay-${Math.min(i + 1, 5)} solution-card group cursor-pointer border-b border-r border-gray-100`}
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {s.title} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
