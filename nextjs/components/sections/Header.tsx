"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="navbar-floating"
      style={{
        boxShadow: scrolled
          ? "0 8px 40px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.06)"
          : "0 4px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      <nav className="flex items-center justify-between gap-8">
        <Link href="/" className="text-xl font-extrabold text-gray-900 tracking-tight">
          Elvatix
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/platform" className="text-sm text-gray-700 hover:text-gray-900 font-medium transition">
            Platform
          </Link>
          <Link href="/solutions" className="text-sm text-gray-700 hover:text-gray-900 font-medium transition">
            Oplossingen
          </Link>
          <Link href="/case-studies" className="text-sm text-gray-700 hover:text-gray-900 font-medium transition">
            Case Studies
          </Link>
          <Link href="/pricing" className="text-sm text-gray-700 hover:text-gray-900 font-medium transition">
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-gray-700 hover:text-gray-900 font-medium transition hidden sm:block">
            Inloggen
          </Link>
          <Link href="/start" className="pill-btn pill-btn-outline text-xs hidden sm:inline-flex">
            Start gratis
          </Link>
          <Link href="/demo" className="pill-btn pill-btn-primary text-xs">
            Boek een demo
          </Link>
        </div>
      </nav>
    </header>
  );
}
