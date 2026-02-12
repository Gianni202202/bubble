"use client";

const columns = [
  { title: "PLATFORM", links: ["AI Copilot", "InMails", "Connectieverzoeken", "Reminders", "Custom GPT", "Templates", "Analytics"] },
  { title: "VOOR WIE", links: ["Recruitmentbureaus", "Detacheringsbureaus", "Corporate Recruiters", "Executive Search", "Freelancers"] },
  { title: "CASE STUDIES", links: ["Manpower", "Vibe Group"] },
  { title: "RESOURCES", links: ["Blog", "Integraties", "Pricing"] },
  { title: "BEDRIJF", links: ["Over ons", "Contact", "Privacy", "Terms"] },
];

export default function Footer() {
  return (
    <footer style={{ padding: "64px 24px 32px", background: "#fff", borderTop: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 32, marginBottom: 48 }}>
          {columns.map((col, i) => (
            <div key={i}>
              <h4 style={{ fontSize: 12, fontWeight: 700, color: "#374151", letterSpacing: "0.1em", marginBottom: 16 }}>{col.title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" style={{ fontSize: 14, color: "#6b7280", textDecoration: "none" }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #e5e7eb", paddingTop: 24 }}>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#111", marginBottom: 4 }}>Elvatix</h3>
            <p style={{ fontSize: 13, color: "#9ca3af" }}>© 2026 Elvatix. Alle rechten voorbehouden.</p>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span style={{ fontSize: 13, color: "#9ca3af" }}>Follow us!</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
