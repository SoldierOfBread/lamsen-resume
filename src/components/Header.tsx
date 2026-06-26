"use client";

import { useState } from "react";
import type { NavLink } from "@/lib/types";

interface HeaderProps {
  name: string;
  navLinks: NavLink[];
}

export function Header({ name, navLinks }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="text-lg font-bold text-primary">
          {name.split(" ").map((n) => n[0]).join(".")}
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 p-2 sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`h-0.5 w-5 bg-primary transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-primary transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-primary transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>

        <nav className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary/60 transition-colors hover:text-secondary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-primary/10 bg-surface px-4 py-4 sm:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-primary/60 transition-colors hover:text-secondary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
