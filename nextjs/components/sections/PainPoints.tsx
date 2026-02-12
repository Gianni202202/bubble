"use client";
import { useEffect, useRef } from "react";

const pains = [
  "Handmatig InMails typen voor élke kandidaat.",
  "Connectieverzoeken kopiëren en plakken uit templates.",
  "Uren besteden aan gepersonaliseerde outreach.",
  "Geen idee welke berichten écht werken.",
  "Staren naar een inbox vol onbeantwoorde berichten.",
];

export default function PainPoints() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="space-y-3">
          {pains.map((pain, i) => (
            <p key={i} className={`fade-in-up fade-in-up-delay-${i + 1} text-lg text-gray-500 leading-relaxed`}>
              {pain}
            </p>
          ))}
        </div>

        <div className="fade-in-up fade-in-up-delay-5 mt-16">
          <h2 className="text-3xl md:text-5xl font-black italic text-gray-900 mb-4">
            Wat als het anders kon?
          </h2>
          <p className="text-gray-400">Een nieuwe manier van recruiters bereiken.</p>
        </div>
      </div>
    </section>
  );
}
