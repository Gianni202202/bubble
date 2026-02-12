"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "Elvatix heeft onze outreach compleet veranderd. We besparen minstens 2 uur per dag per recruiter.",
    name: "Lisa van den Berg",
    role: "Head of Recruitment, Vibe Group",
  },
  {
    quote: "De AI-gegenereerde berichten voelen persoonlijker dan wat we ooit handmatig schreven.",
    name: "Mark de Vries",
    role: "Senior Recruiter, Manpower",
  },
  {
    quote: "Onze response rate is met 40% gestegen sinds we Elvatix gebruiken. Het is een game-changer.",
    name: "Sarah Jansen",
    role: "Talent Acquisition Lead",
  },
];

const badges = [
  "⭐ Highest Rated",
  "🏆 Best ROI 2025",
  "🚀 Fastest Growing",
  "💙 Most Loved",
];

export default function Testimonials() {
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
        <h2 className="fade-in-up text-4xl md:text-5xl font-black text-center italic mb-16">
          Wat onze klanten zeggen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`fade-in-up fade-in-up-delay-${i + 1} bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow`}
            >
              <p className="text-purple-600 text-lg font-medium leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in-up fade-in-up-delay-4 flex flex-wrap justify-center gap-6">
          {badges.map((badge, i) => (
            <span
              key={i}
              className="px-5 py-2.5 bg-gray-50 rounded-xl border border-gray-100 text-sm font-medium text-gray-700"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
