import React, { useState } from "react";
import { Menu, X, Github, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ui/ThemeToggle";

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container mx-auto flex items-center py-3">
        <Link
          to="/"
          className="font-extrabold text-xl tracking-tight whitespace-nowrap flex-shrink-0 mr-6"
        >
          <span className="text-primary">Youssef</span>
          <span className="ml-2">BOUALI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm ml-auto">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="h-5 w-px bg-border" />
          <a
            href="https://github.com/youssefbouali"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/youssef1bouali"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:mr.boualiyoussef@gmail.com"
            aria-label="Email"
            className="text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
          </a>

          <a
            href="/Youssef_Bouali_CV.pdf"
            target="_blank"
            rel="noreferrer"
            download
            className="inline-flex items-center gap-2 rounded-md border px-3 py-1 text-sm hover:bg-accent"
            aria-label="Download CV"
          >
            <Download className="h-4 w-4" /> CV
          </a>

          <ThemeToggle />
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container mx-auto py-3 grid gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/youssefbouali"
                target="_blank"
                rel="noreferrer"
                className="text-foreground inline-flex items-center gap-2"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/youssef1bouali"
                target="_blank"
                rel="noreferrer"
                className="text-foreground inline-flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" /> Linkedin
              </a>
              <a
                href="mailto:mr.boualiyoussef@gmail.com"
                className="text-foreground inline-flex items-center gap-2"
              >
                <Mail className="h-5 w-5" /> Email
              </a>
              <a
                href="/Youssef_Bouali_CV.pdf"
                target="_blank"
                rel="noreferrer"
                download
                className="text-foreground inline-flex items-center gap-2"
              >
                <Download className="h-5 w-5" /> CV
              </a>
              <div className="ml-auto">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
