"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#080B14]/80 backdrop-blur-md border-[rgba(255,255,255,0.08)] py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-3 h-3 bg-[var(--accent-indigo)] rounded-sm group-hover:animate-pulse-glow transition-all" />
          <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-xl tracking-tight text-white">
            HES Technologies
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--text-muted)] hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="text-sm font-medium bg-[var(--accent-indigo)] text-white px-5 py-2.5 rounded-lg hover:bg-[#4a3fcc] transition-colors shadow-[0_0_15px_var(--accent-glow)] hover:shadow-[0_0_25px_var(--accent-glow)]"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--text-primary)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#080B14]/95 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)] py-4 px-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-[var(--text-muted)] hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="text-base font-medium bg-[var(--accent-indigo)] text-white px-5 py-3 rounded-lg text-center mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
