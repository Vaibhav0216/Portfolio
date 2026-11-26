"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personal } from "@/data/personal";

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-container mx-auto"
      >
        <SectionHeading title="About Me" />
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-center">
            {personal.summary}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {personal.stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-lg border border-border dark:border-border-dark bg-card dark:bg-card-dark"
              >
                <p className="text-3xl font-bold text-accent dark:text-accent-dark font-mono">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
