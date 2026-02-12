"use client";
import { useEffect, useRef } from "react";

const items = [
  {
    category: "Persoonlijke InMails sturen",
    old: { text: "Handmatig profiel bekijken, bericht typen, personaliseren per kandidaat", time: "5 minuten per kandidaat" },
    newWay: { text: "Elvatix genereert een gepersonaliseerd bericht op basis van het LinkedIn-profiel met één klik", time: "10 seconden per kandidaat" },
  },
  {
    category: "Connectieverzoeken",
    old: { text: "Template kopiëren, plakken, handmatig aanpassen per persoon", time: "3 minuten per kandidaat" },
    newWay: { text: "AI past automatisch de toon en inhoud aan op basis van het profiel", time: "5 seconden per kandidaat" },
  },
  {
    category: "Follow-up berichten",
    old: { text: "Bijhouden wie je hebt benaderd, handmatig opvolgen, berichten opnieuw schrijven", time: "10 minuten per batch" },
    newWay: { text: "Automatische reminders en AI-gegenereerde follow-ups", time: "0 seconden per batch" },
  },
  {
    category: "Outreach personaliseren",
    old: { text: "CV's lezen, recent posts checken, handmatig relevante details verwerken", time: "8 minuten per kandidaat" },
    newWay: { text: "AI analyseert profiel, posts en ervaring — verwerkt dit automatisch in het bericht", time: "10 seconden per kandidaat" },
  },
  {
    category: "Performance bijhouden",
    old: { text: "Handmatig Excel bijhouden, geen inzicht in welke berichten werken", time: "1 uur per week" },
    newWay: { text: "Real-time dashboard met response rates per template en bericht", time: "0 seconden" },
  },
];

export default function Comparison() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between mb-8">
          <span className="inline-block px-5 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold">
            De oude manier
          </span>
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-semibold">
            De nieuwe manier
          </span>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="fade-in-up grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch">
              <div className="card-old">
                <p className="font-semibold text-gray-900 text-sm mb-2">{item.old.text}</p>
                <p className="text-gray-500 text-sm italic">{item.old.time}</p>
              </div>
              <div className="flex items-center justify-center px-4">
                <p className="text-sm text-gray-600 font-medium text-center whitespace-nowrap">{item.category}</p>
              </div>
              <div className="card-new">
                <p className="font-semibold text-sm mb-2">{item.newWay.text}</p>
                <p className="text-white/80 text-sm italic">{item.newWay.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
