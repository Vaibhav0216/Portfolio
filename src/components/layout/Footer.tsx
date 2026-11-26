import { Github, Mail, MapPin } from "lucide-react";
import { personal } from "@/data/personal";

export function Footer() {
  return (
    <footer className="border-t border-border dark:border-border-dark py-8">
      <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent dark:hover:text-accent-dark transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-gray-500 hover:text-accent dark:hover:text-accent-dark transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <MapPin size={14} />
            {personal.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
