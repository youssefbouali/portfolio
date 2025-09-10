import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Youssef Bouali. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:mr.boualiyoussef@gmail.com"
            className="inline-flex items-center gap-2 text-sm hover:text-primary"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
          <a
            href="https://github.com/youssefbouali"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-primary"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
