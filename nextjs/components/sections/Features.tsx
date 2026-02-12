"use client";
import { useState } from "react";

const tabs = [
  {
    id: "inmails",
    label: "InMails",
    badge: "InMails",
    title: "Schrijf gepersonaliseerde InMails op schaal",
    description: "Onze AI leest het LinkedIn-profiel van je kandidaat en genereert een volledig gepersonaliseerd bericht — in de juiste toon, met relevante hooks. Eén klik en je bericht is klaar.",
    cta: "Meer over InMails",
    mockup: "💬",
  },
  {
    id: "connecties",
    label: "Connectieverzoeken",
    badge: "Connecties",
    title: "Stuur slimme connectieverzoeken die geaccepteerd worden",
    description: "Vergeet generieke templates. Elvatix maakt elk connectieverzoek uniek op basis van gedeelde interesses, ervaring en recente activiteit op LinkedIn.",
    cta: "Meer over connecties",
    mockup: "🤝",
  },
  {
    id: "reminders",
    label: "Reminders",
    badge: "Reminders",
    title: "Nooit meer een follow-up vergeten",
    description: "Stel automatische herinneringen in voor kandidaten die niet hebben gereageerd. Elvatix genereert een passend follow-up bericht op het optimale moment.",
    cta: "Meer over reminders",
    mockup: "⏰",
  },
  {
    id: "analytics",
    label: "Analytics",
    badge: "Analytics",
    title: "Inzicht in wat wél werkt",
    description: "Bekijk real-time welke berichten de hoogste response rate hebben. Optimaliseer je templates op basis van data, niet op gevoel.",
    cta: "Meer over analytics",
    mockup: "📊",
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Neem je recruitment workflow van losse<br />
            tools naar één krachtig platform
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Bekijk de features die Elvatix uniek maken — elk onderdeel is een
            volwaardig product bij andere aanbieders. 😎
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-10 border-b border-gray-200">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              className={`pb-3 text-base transition-all cursor-pointer ${
                i === active ? "tab-active" : "tab-inactive"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="feature-card">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold mb-6">
                {current.badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{current.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8">{current.description}</p>
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                {current.cta} →
              </a>
            </div>
            <div className="bg-gray-100 p-10 lg:p-14 flex items-center justify-center min-h-[300px]">
              <div className="text-8xl animate-float">{current.mockup}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
