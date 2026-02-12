"use client";
import { useEffect, useRef } from "react";

export default function QuoteBanner() {
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
    <section ref={ref} className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="fade-in-up quote-card flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-2xl md:text-3xl font-bold text-blue-700 leading-snug mb-6">
              &ldquo;Ik besteed honderden uren aan het onderzoeken van recruitment
              tech en Elvatix is lichtjaren vooruit.&rdquo;
            </p>
            <p className="text-gray-600 font-medium">Kevin Coenen</p>
            <p className="text-gray-400 text-sm">Oprichter, Elvatix</p>
          </div>
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex-shrink-0 flex items-center justify-center">
            <span className="text-4xl">👤</span>
          </div>
        </div>
      </div>
    </section>
  );
}
