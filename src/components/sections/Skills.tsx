"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20 px-4 sm:px-6 bg-card dark:bg-card-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-container mx-auto"
      >
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with on a daily basis"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-lg border border-border dark:border-border-dark bg-white dark:bg-background-dark"
            >
              <h3 className="font-mono text-sm font-semibold text-accent dark:text-accent-dark mb-3">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
