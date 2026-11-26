"use client";

import { motion } from "framer-motion";
import { Mail, Github, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personal } from "@/data/personal";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-card dark:bg-card-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-container mx-auto text-center"
      >
        <SectionHeading
          title="Get in Touch"
          subtitle="Feel free to reach out for collaborations, opportunities, or just a conversation about embedded systems"
        />
        <div className="max-w-md mx-auto space-y-4">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border dark:border-border-dark hover:bg-white dark:hover:bg-background-dark transition-colors"
          >
            <Mail size={20} className="text-accent dark:text-accent-dark" />
            <span className="text-sm">{personal.email}</span>
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border dark:border-border-dark hover:bg-white dark:hover:bg-background-dark transition-colors"
          >
            <Github size={20} className="text-accent dark:text-accent-dark" />
            <span className="text-sm">github.com/Vaibhav0216</span>
          </a>
          <div className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border dark:border-border-dark">
            <Phone size={20} className="text-accent dark:text-accent-dark" />
            <span className="text-sm">{personal.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border dark:border-border-dark">
            <MapPin size={20} className="text-accent dark:text-accent-dark" />
            <span className="text-sm">{personal.location}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
