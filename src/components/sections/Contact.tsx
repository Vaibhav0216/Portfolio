"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personal } from "@/data/personal";

function GithubIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-20 px-4 sm:px-6 bg-card dark:bg-card-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-container mx-auto text-center"
      >
        <SectionHeading
          title="Get in Touch"
          subtitle="Feel free to reach out for collaborations, opportunities, or just a conversation about embedded systems and software development"
        />
        <div className="max-w-md mx-auto space-y-3 sm:space-y-4">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border dark:border-border-dark hover:bg-white dark:hover:bg-background-dark transition-colors min-h-[52px]"
          >
            <Mail size={20} className="text-accent dark:text-accent-dark flex-shrink-0" />
            <span className="text-sm break-all sm:break-normal">{personal.email}</span>
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border dark:border-border-dark hover:bg-white dark:hover:bg-background-dark transition-colors min-h-[52px]"
          >
            <GithubIcon size={20} className="text-accent dark:text-accent-dark flex-shrink-0" />
            <span className="text-sm">github.com/Vaibhav0216</span>
          </a>
          <div className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border dark:border-border-dark min-h-[52px]">
            <Phone size={20} className="text-accent dark:text-accent-dark flex-shrink-0" />
            <span className="text-sm">{personal.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border dark:border-border-dark min-h-[52px]">
            <MapPin size={20} className="text-accent dark:text-accent-dark flex-shrink-0" />
            <span className="text-sm">{personal.location}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
