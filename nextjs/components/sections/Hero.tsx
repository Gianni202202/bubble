"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="fade-in-up text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight mb-6">
              <span className="italic text-blue-600">Jouw</span> complete{" "}
              <br className="hidden md:block" />
              recruitment workflow.{" "}
              <br className="hidden lg:block" />
              <span className="italic">Eén</span> easy-to-use,{" "}
              <span className="gradient-text">AI-native</span>{" "}
              platform.
            </h1>

            <p className="fade-in-up fade-in-up-delay-1 text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
              Geen losse tools meer. Personaliseer je LinkedIn outreach,
              automatiseer InMails en connectieverzoeken — allemaal vanuit
              één AI-copilot.
            </p>

            <div className="fade-in-up fade-in-up-delay-2 flex flex-wrap gap-4">
              <a href="/demo" className="pill-btn pill-btn-primary px-8 py-3 text-base">
                Boek een demo
              </a>
              <a href="/start" className="pill-btn pill-btn-outline px-8 py-3 text-base">
                Start gratis
              </a>
            </div>
          </div>

          <div className="fade-in-up fade-in-up-delay-3 relative">
            <div className="bg-gradient-to-br from-purple-500 via-fuchsia-500 to-blue-500 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full" />
              <div className="absolute bottom-8 left-8 w-24 h-24 border border-white/10 rounded-full" />

              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">E</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 relative">
                {[
                  { icon: "💬", label: "InMails" },
                  { icon: "🤝", label: "Connecties" },
                  { icon: "📊", label: "Analytics" },
                  { icon: "🔍", label: "Sourcing" },
                  { icon: "🤖", label: "AI Copilot" },
                  { icon: "📧", label: "Outreach" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-center text-white border border-white/10 hover:bg-white/25 transition-all cursor-default"
                  >
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-xs font-medium opacity-90">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-4 mt-6">
                <span className="text-white/60 text-sm font-medium">OLD WAY</span>
                <div className="w-12 h-6 bg-white/30 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow" />
                </div>
                <span className="text-white text-sm font-semibold">NEW WAY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="fade-in-up fade-in-up-delay-4 mt-20 text-center">
          <p className="text-sm font-semibold text-gray-800 mb-8">
            Vertrouwd door 500+ recruiters in Nederland en België
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-50">
            {["Manpower", "Vibe Group", "Yacht", "Hays", "Brunel", "Michael Page"].map((name) => (
              <span key={name} className="text-lg font-bold text-gray-400 tracking-wide">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
