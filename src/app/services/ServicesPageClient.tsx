"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServicesPageClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      initial="hidden"
      animate={mounted ? "visible" : "hidden"}
      variants={containerVariants}
      className="pt-[120px] min-h-screen bg-white"
    >
      {/* Hero */}
      <motion.section
        variants={itemVariants}
        className="mx-auto max-w-6xl px-6 text-center py-10"
        aria-labelledby="services-title"
      >
        <h1
          id="services-title"
          className="text-4xl md:text-5xl font-light tracking-tight text-black mb-4"
        >
          Our Services
        </h1>
        <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-600">
          Comprehensive landscape design, construction and maintenance tailored
          to your unique vision.
        </p>
      </motion.section>

      {/* Service cards */}
      <motion.section variants={itemVariants}>
        <ServicesSection />
      </motion.section>

      {/* Process */}
      <motion.section
        variants={itemVariants}
        className="bg-gray-50 py-16"
        aria-labelledby="process-title"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2
            id="process-title"
            className="text-2xl md:text-3xl font-medium text-black text-center mb-10"
          >
            Our Design Process
          </h2>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
            {[
              {
                title: "Consultation",
                text:
                  "We start with a detailed consultation to understand goals, constraints and opportunities.",
              },
              {
                title: "Concept Design",
                text:
                  "Initial concepts balance your vision with site context and practical considerations.",
              },
              {
                title: "Detailed Design",
                text:
                  "We refine the preferred concept into detailed plans, specs and planting schedules.",
              },
              {
                title: "Construction",
                text:
                  "Our build teams deliver with care, quality materials and meticulous craftsmanship.",
              },
            ].map((step, index) => (
              <motion.li
                key={step.title}
                variants={stepVariants}
                className="text-center bg-white p-8 shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white text-lg font-semibold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-6">{step.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section variants={itemVariants}>
        <FaqSection />
      </motion.section>
    </motion.div>
  );
}


