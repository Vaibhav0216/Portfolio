"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-container mx-auto"
      >
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in embedded systems engineering"
        />
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <TimelineItem key={exp.company} experience={exp} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
