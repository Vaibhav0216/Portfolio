"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, certifications } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-14 sm:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-container mx-auto"
      >
        <SectionHeading title="Education & Certifications" />
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="flex gap-4 p-6 rounded-lg border border-border dark:border-border-dark bg-card dark:bg-card-dark"
            >
              <GraduationCap
                size={24}
                className="text-accent dark:text-accent-dark flex-shrink-0 mt-1"
              />
              <div>
                <h3 className="font-semibold">{edu.institution}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {edu.degree} — {edu.field}
                </p>
                <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mt-1">
                  {edu.period} · {edu.location} · {edu.grade}
                </p>
              </div>
            </div>
          ))}

          <h3 className="text-lg font-semibold mt-8 mb-4">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 p-4 rounded-lg border border-border dark:border-border-dark bg-card dark:bg-card-dark"
              >
                <Award
                  size={20}
                  className="text-accent dark:text-accent-dark flex-shrink-0"
                />
                <div>
                  <p className="font-medium text-sm">{cert.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                    {cert.issuer} — {cert.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
