"use client";

import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";
import { personal } from "@/data/personal";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-container mx-auto text-center"
      >
        <p className="font-mono text-accent dark:text-accent-dark mb-4 text-sm">
          Hello, I&apos;m
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">{personal.name}</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 font-mono">
          {personal.title}
        </p>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          {personal.summary}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent dark:bg-accent-dark text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            <Download size={18} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border dark:border-border-dark rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16"
        >
          <a href="#about" aria-label="Scroll to about">
            <ArrowDown size={24} className="mx-auto text-gray-400" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
