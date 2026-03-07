"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 " +
        (scrolled
          ? "bg-black/80 border-white/10 backdrop-blur"
          : "bg-transparent border-transparent")
      }
    >
      <nav className="section-max-width flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-iron-500 to-orange-500 text-xs font-bold tracking-[0.2em]">
            IF
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-[0.35em]">
              IRONFORGE
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/60">
              Gym
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button href="#join" className="hidden sm:inline-flex">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
}


