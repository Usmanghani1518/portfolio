"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "frosted-glass border-b border-border-subtle" : "bg-transparent"
      }`}
    >
      <div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <span className="font-heading text-2xl font-bold text-text-primary">
            {"Usman"}
            <span className="text-primary-cyan">.</span>
          </span>
          <span className="w-2 h-2 bg-primary-cyan rounded-full ml-1 pulse-dot" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors hover:text-primary-cyan ${
                activeSection === link.href.replace("#", "")
                  ? "active text-primary-cyan"
                  : "text-text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hire Me Button + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-block px-6 py-2 border-2 border-primary-cyan text-primary-cyan hover:bg-primary-cyan hover:text-background-dark transition-all rounded-lg font-bold text-sm tracking-wide"
          >
            Hire Me
          </a>

          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background-dark z-40 flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-text-primary"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-2xl font-heading font-bold text-text-primary hover:text-primary-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-4 px-8 py-3 border-2 border-primary-cyan text-primary-cyan hover:bg-primary-cyan hover:text-background-dark transition-all rounded-lg font-bold text-lg tracking-wide"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
