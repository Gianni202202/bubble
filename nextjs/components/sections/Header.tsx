"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Modules", href: "#features" },
    { label: "Voor Wie", href: "#solutions" },
    { label: "Case Studies", href: "#testimonials" },
    { label: "Contact", href: "https://elvatix.com" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <a href="https://elvatix.com" style={{ fontWeight: 800, fontSize: 22, color: "#111", letterSpacing: "-0.02em", textDecoration: "none" }}>
          <span style={{ color: "#8db600" }}>Elvatix</span>
        </a>

        <nav className="desktop-nav">
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} style={{ color: "#6b7280", textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}>
                {link.label}
              </a>
            ))}
            <a href="https://elvatix.com" className="pill-btn pill-btn-primary" style={{ padding: "10px 24px", fontSize: 14 }}>
              Plan een demo
            </a>
          </div>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
        >
          <div style={{ width: 24, height: 2, background: "#111", marginBottom: 6 }} />
          <div style={{ width: 24, height: 2, background: "#111", marginBottom: 6 }} />
          <div style={{ width: 24, height: 2, background: "#111" }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden", borderTop: "1px solid #f3f4f6" }}
          >
            <div style={{ display: "flex", flexDirection: "column", padding: "16px 24px", gap: 16 }}>
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} style={{ color: "#374151", textDecoration: "none", fontSize: 16, fontWeight: 500 }}>
                  {link.label}
                </a>
              ))}
              <a href="https://elvatix.com" className="pill-btn pill-btn-primary" style={{ padding: "12px 24px", fontSize: 15, textAlign: "center" }}>
                Plan een demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
