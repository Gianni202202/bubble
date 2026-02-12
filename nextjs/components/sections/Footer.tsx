import Link from "next/link";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "AI Copilot", href: "/platform" },
      { label: "InMails", href: "/module-inmails" },
      { label: "Connectieverzoeken", href: "/module-connectieverzoeken" },
      { label: "Reminders", href: "/module-reminders" },
      { label: "Custom GPT", href: "/module-custom-gpt" },
      { label: "Templates", href: "/module-template-instructies" },
      { label: "Analytics", href: "/analytics" },
    ],
  },
  {
    title: "Voor wie",
    links: [
      { label: "Recruitmentbureaus", href: "/voor-recruitmentbureaus" },
      { label: "Detacheringsbureaus", href: "/voor-detacheringsbureaus" },
      { label: "Corporate Recruiters", href: "/voor-corporate-recruiters" },
      { label: "Executive Search", href: "/executive-search" },
      { label: "Freelancers", href: "/freelance-recruiters" },
    ],
  },
  {
    title: "Case Studies",
    links: [
      { label: "Manpower", href: "/case-study-manpower" },
      { label: "Vibe Group", href: "/case-study-vibegroup" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blogs" },
      { label: "Integraties", href: "/integraties-linkedin" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Bedrijf",
    links: [
      { label: "Over ons", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link href="/" className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Elvatix
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Elvatix. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/elvatix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-900 transition flex items-center gap-1"
            >
              <span>in</span> Follow us!
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
