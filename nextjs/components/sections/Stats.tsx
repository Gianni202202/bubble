"use client";

const stats = [
  { number: "85%", label: "Minder tijd per InMail" },
  { number: "3x", label: "Hogere response rate" },
  { number: "500+", label: "Actieve recruiters" },
];

export default function Stats() {
  return (
    <section className="stats-bg py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="stats-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div
                  className="text-6xl md:text-7xl font-black mb-3"
                  style={{
                    background: "linear-gradient(135deg, #4361ee 0%, #7c3aed 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.number}
                </div>
                <p className="text-gray-600 text-base font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="/demo" className="pill-btn pill-btn-primary px-8 py-3">
            Meer weten over Elvatix
          </a>
        </div>
      </div>
    </section>
  );
}
