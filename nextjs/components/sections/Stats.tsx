"use client";
import { useEffect, useRef } from "react";

const stats = [
  { number: "85%", label: "Minder tijd per InMail" },
  { number: "3x", label: "Hogere response rate" },
  { number: "500+", label: "Actieve recruiters" },
];

export default function Stats() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="stats-bg py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="fade-in-up stats-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className={`fade-in-up fade-in-up-delay-${i + 1}`}>
                <div className="text-6xl md:text-7xl font-black gradient-text-stats mb-3">
                  {stat.number}
                </div>
                <p className="text-gray-600 text-base font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-up fade-in-up-delay-4 text-center mt-10">
          <a href="/demo" className="pill-btn pill-btn-primary px-8 py-3">
            Meer weten over Elvatix
          </a>
        </div>
      </div>
    </section>
  );
}
