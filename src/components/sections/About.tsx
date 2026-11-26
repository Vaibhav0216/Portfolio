"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personal } from "@/data/personal";

export function About() {
  return (
    <section id="about" className="py-14 sm:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-container mx-auto"
      >
        <SectionHeading title="About Me" />
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0">
              <Image
                src="/profile.jpg"
                alt={personal.name}
                fill
                className="rounded-full object-cover object-[center_8%] border-4 border-accent/20 dark:border-accent-dark/20"
                priority
              />
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center sm:text-left">
              {personal.summary}
            </p>
          </div>
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
