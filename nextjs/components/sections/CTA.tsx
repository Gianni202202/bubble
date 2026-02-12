"use client";
import { useEffect, useRef } from "react";

export default function CTA() {
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
    <section ref={ref} className="cta-gradient py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="fade-in-up text-4xl md:text-6xl font-black text-white italic mb-6">
          Word een recruitment machine
        </h2>
        <p className="fade-in-up fade-in-up-delay-1 text-white/70 text-lg mb-10 max-w-2xl mx-auto">
          Klaar om te zien hoe Elvatix je recruitment workflow transformeert?
          Begin vandaag nog.
        </p>
        <div className="fade-in-up fade-in-up-delay-2">
          <a href="/demo" className="pill-btn pill-btn-white px-10 py-4 text-base font-bold">
            Boek een demo
          </a>
        </div>
      </div>
    </section>
  );
}
