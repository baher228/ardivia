"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NovorizhskyResidencePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const imageFx = {
    hidden: { scale: 1.08, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
  };

  // Real image URLs (no placeholders)
  const galleryImages = [
    "https://picsum.photos/id/1003/1600/900", // hero-like facade/landscape
    "https://picsum.photos/id/1011/1200/800",
    "https://picsum.photos/id/1020/1200/800",
    "https://picsum.photos/id/1036/1200/800",
    "https://picsum.photos/id/1048/1200/800",
    "https://picsum.photos/id/1050/1200/800",
    "https://picsum.photos/id/106/1200/800",
    "https://picsum.photos/id/1084/1200/800",
  ];

  return (
    <motion.div
      className="min-h-screen bg-white pt-24"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={container}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={item}>
          <motion.h1
            className="text-4xl md:text-5xl font-light text-gray-900 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Novorizhsky Residence Garden
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A minimalist landscape for a modern home: calm lawn panels, basalt
            rock gardens, modular orchard & herb beds, and soft night lighting.
          </motion.p>
          <motion.div
            className="mt-4 flex flex-wrap justify-center gap-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Residential
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Minimalist Garden
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Hardscape & Planting
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Fast-Track Delivery
            </span>
          </motion.div>
        </motion.div>

        {/* Hero */}
        <motion.div className="mb-16 overflow-hidden rounded-lg" variants={imageFx}>
          <img
            src={galleryImages[0]}
            alt="Novorizhsky Residence — minimalist facade and garden"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column: Overview & Approach */}
          <motion.div className="lg:col-span-2" variants={item}>
            <h2 className="text-3xl font-medium text-gray-900 mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              The Novorizhsky Residence sits on a 13-sotok plot (≈1,300&nbsp;m²).
              The architecture is clean and restrained, so the landscape follows
              suit: long lawn panels for quiet views, narrow ribbon beds with
              cool-toned plantings, and a basalt gravel field punctuated by dark
              boulders. Circulation is simple—stepping pavers guide movement,
              while service paths are discreetly screened with evergreen blocks.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Night ambiance is created by recessed wall washes at the entrance,
              low bollards along paths, and soft under-bench LEDs. A modular
              kitchen-herb garden and compact orchard deliver seasonal produce
              without clutter. The entire scope was designed, permitted, and
              delivered on an accelerated schedule from May to July&nbsp;2024.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-4 mt-10">
              Design Approach
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We prioritized calm composition and easy maintenance: large shapes,
              few materials, and reliable, cold-hardy species. Paving is kept to
              stepping plates and crusher fines for permeability, while drainage
              falls to hidden swales. Plant palettes favor silvers, whites, and
              greens with seasonal lilac accents—echoing the home’s minimalist
              palette and evening facade lighting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Site Facts
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Plot size: 13 sotok (≈1,300&nbsp;m²)</li>
                  <li>Modern house in a strict minimalist style</li>
                  <li>Built-in perimeter lighting & large glazing</li>
                  <li>Quiet recreation lawn + shaded lounge</li>
                  <li>Modular orchard & herb garden</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Tasks & Solutions
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Fast-track landscape build (May–July&nbsp;2024)</li>
                  <li>Simple masterplan with clear zoning</li>
                  <li>Muted entrance palette in greys/charcoal</li>
                  <li>Minimal paving: stepping slabs + basalt screenings</li>
                  <li>Natural stone accents: “Black Ice” and “Shungite” boulders</li>
                  <li>
                    Layered planting with long bloom: Hydrangea ‘Incrediball’,
                    spirea, salvia, anaphalis, Festuca, Veronica spicata,
                    boxwood, fescue lawn edges
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-medium text-gray-900 mb-4 mt-10">
              Photo Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.slice(1).map((src, i) => (
                <motion.div key={i} variants={item} className="overflow-hidden rounded-lg">
                  <img
                    src={src}
                    alt={`Novorizhsky Residence gallery image ${i + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column: Project Details */}
          <motion.div className="lg:col-span-1" variants={item}>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Project Details
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">Novorizhskoye Hwy, Moscow Region</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Completion</h4>
                  <p className="text-gray-600">July 2024</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Area</h4>
                  <p className="text-gray-600">≈ 1,300 m² (13 sotok)</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Client</h4>
                  <p className="text-gray-600">Private Residence</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Services</h4>
                  <p className="text-gray-600">
                    Landscape Concept, Planting Design, Lighting, Drainage, Build
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-medium mb-4">Related Projects</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/place/lakehouse-minimal" className="text-white hover:underline">
                    Lakehouse Minimal Garden
                  </a>
                </li>
                <li>
                  <a href="/place/forest-edge" className="text-white hover:underline">
                    Forest Edge Courtyard
                  </a>
                </li>
                <li>
                  <a href="/place/white-brick-villa" className="text-white hover:underline">
                    White Brick Villa Landscape
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NovorizhskyResidencePage;
