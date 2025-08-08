"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RazdoryEstatePage: React.FC = () => {
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

  // Stable, working gallery image URLs
  const galleryImages = [
    "/photos/projects/razdory/1.jpg",
    "/photos/projects/razdory/2.jpg",
    "/photos/projects/razdory/3.jpg",
    "/photos/projects/razdory/4.jpg",
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
            Razdory 2–3 Estate Gardens
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A classical estate landscape with granite-paved parterres, clipped
            formal plantings, and a veranda-to-garden connection designed for
            year-round elegance.
          </motion.p>
          <motion.div
            className="mt-4 flex flex-wrap justify-center gap-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Residential Estate
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Classical Garden Design
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Granite Paving
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Formal Planting
            </span>
          </motion.div>
        </motion.div>

        {/* Hero */}
        <motion.div className="mb-16 overflow-hidden rounded-lg" variants={imageFx}>
          <img
            src={galleryImages[0]}
            alt="Razdory Estate — classical facade and parterre"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column: Overview */}
          <motion.div className="lg:col-span-2" variants={item}>
            <h2 className="text-3xl font-medium text-gray-900 mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              The Razdory 2–3 Estate occupies 35 sotok (≈3,500&nbsp;m²) and
              features a home in the classical style, with ornate ironwork and
              a sweeping veranda facing the garden. The grounds are arranged
              with strict symmetry, formal parterres, and axial views extending
              toward a dedicated BBQ pavilion and open patio zones.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Paving is entirely in fine-finished granite, giving a timeless,
              frost-proof surface for both main approaches and garden paths.
              Regularly clipped trees and shrubs define the geometry, while
              flowering borders soften edges with seasonal color. The scheme was
              executed over 2022–2023 with precision masonry and horticultural
              craftsmanship.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-4 mt-10">
              Design Approach
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              This project follows the principles of French formal gardens:
              balance, symmetry, and control. We used evergreen structural
              plants for year-round framework, accented with perennials and
              bulbs for seasonal change. Tree crowns were trained into cubes,
              domes, and parasol forms for a sculptural effect that complements
              the classical facade.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Site Facts
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Plot size: 35 sotok (≈3,500&nbsp;m²)</li>
                  <li>Classical-style residence with wrought iron details</li>
                  <li>Veranda with garden view axis</li>
                  <li>Pavilion with BBQ zone</li>
                  <li>Execution: 2022–2023</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Key Elements
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Regular style masterplan</li>
                  <li>Symmetrical parterres with flower beds</li>
                  <li>Granite paving throughout</li>
                  <li>
                    Formal planting: cube-shaped small-leaf linden, hawthorn on
                    stem, Thuja ‘Globosa’, umbrella-form maple
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
                    alt={`Razdory Estate gallery image ${i + 1}`}
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
                  <p className="text-gray-600">Razdory, Moscow Region</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Completion</h4>
                  <p className="text-gray-600">2023</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Area</h4>
                  <p className="text-gray-600">≈ 3,500 m²</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Client</h4>
                  <p className="text-gray-600">Private Residence</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Services</h4>
                  <p className="text-gray-600">
                    Garden Design, Planting Design, Masonry, Lighting, Build
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-medium mb-4">Related Projects</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/place/barvikha-classic" className="text-white hover:underline">
                    Barvikha Classic Garden
                  </a>
                </li>
                <li>
                  <a href="/place/lipki-manor" className="text-white hover:underline">
                    Lipki Manor Parterres
                  </a>
                </li>
                <li>
                  <a href="/place/romashkovo-villa" className="text-white hover:underline">
                    Romashkovo Villa Landscape
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

export default RazdoryEstatePage;
