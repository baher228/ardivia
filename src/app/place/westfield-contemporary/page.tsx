"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WestfieldOutdoorLivingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.08, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7 },
    },
  };

  // Stable, working image URLs (no placeholders)
  const galleryImages = [
    "/photos/projects/westfieldContemporary/1.jpg",
    "/photos/projects/westfieldContemporary/2.jpg",
    "/photos/projects/westfieldContemporary/3.jpg",
    "/photos/projects/westfieldContemporary/4.jpg",
  ];

  return (
    <motion.div
      className="min-h-screen bg-white pt-24"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h1
            className="text-4xl md:text-5xl font-light text-gray-900 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Westfield Contemporary Outdoor Living
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A warm, modern courtyard with a cast-in-place fire table, floating
            cedar benches, and a sunset-facing terrace designed for year-round
            gatherings.
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
              Outdoor Living
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Hardscape & Carpentry
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Lighting Design
            </span>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div className="mb-16 overflow-hidden rounded-lg" variants={imageVariants}>
          <img
            src={galleryImages[0]}
            alt="Westfield Outdoor Living – sunset fire feature"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Story */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h2 className="text-3xl font-medium text-gray-900 mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Designed for a family that entertains on weekends, this outdoor
              room transforms a windy corner lot into a sheltered courtyard.
              Low, stucco planters define the space while cedar benches wrap the
              perimeter to seat twelve comfortably. The centerpiece is a
              cast-in-place concrete fire table with black lava rock, tuned for a
              clean, adjustable gas flame. Large-format porcelain pavers on a
              permeable base keep the terrace cool in summer and ice-safe in
              winter.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Integrated LED ribbons wash the bench undersides, step lights
              mark transitions, and dimmable path beacons lead to the lawn. A
              concealed drainage spine captures stormwater and directs it to a
              planted swale, protecting the slab and keeping joints pristine.
              Planting is drought-tolerant and Midwestern hardy—prairie grasses,
              aromatic perennials, and four-season shrubs that glow at golden
              hour.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-4 mt-10">
              Design Approach
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We started with solar orientation—aligning the bench backs to cut
              prevailing winds and capturing sunset views over the fairway. All
              wood is clear-grade western red cedar, sealed on six sides and
              mounted to a powder-coated steel frame so the benches appear to
              float. The fire table is a monolithic pour with a hand-troweled
              finish; a concealed gas line with an exterior shutoff and
              keyed-valve keeps operation safe and simple. Every detail—from
              joint layout to fixture color temperature (2700K)—was coordinated
              for a calm, contemporary feel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Build & Performance
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Cast-in-place concrete fire table, 54&quot; × 54&quot;</li>
                  <li>Floating cedar benches on steel subframe (12 seats)</li>
                  <li>24&quot; × 48&quot; porcelain pavers on permeable base</li>
                  <li>Low-voltage LED system with dimming zones</li>
                  <li>Frost-line footings and hidden drainage spine</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Sustainability & Maintenance
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Permeable paving + planted swale stormwater strategy</li>
                  <li>Regionally appropriate, pollinator-friendly planting</li>
                  <li>LED lighting at 3.8 W/ft with dusk automation</li>
                  <li>Thermally modified cedar sealer schedule (2×/yr)</li>
                  <li>Gas line pressure-tested; quick seasonal shut-down</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-medium text-gray-900 mb-4 mt-10">
              Project Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((src, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="overflow-hidden rounded-lg"
                >
                  <img
                    src={src}
                    alt={`Westfield Outdoor Living gallery image ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Meta */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Project Details
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">Westfield, Indiana</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Completion</h4>
                  <p className="text-gray-600">Summer 2024</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Footprint</h4>
                  <p className="text-gray-600">≈ 1,800 sq ft terrace</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Client</h4>
                  <p className="text-gray-600">Private Residence</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Services</h4>
                  <p className="text-gray-600">
                    Design-Build, Hardscape, Carpentry, Lighting, Planting
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Contract Value</h4>
                  <p className="text-gray-600">$145,000</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-medium mb-4">Related Projects</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/place/meridian-terrace" className="text-white hover:underline">
                    Meridian Terrace Courtyard
                  </a>
                </li>
                <li>
                  <a href="/place/bridgewater-porch" className="text-white hover:underline">
                    Bridgewater Covered Porch & Kitchen
                  </a>
                </li>
                <li>
                  <a href="/place/sunrise-meadow" className="text-white hover:underline">
                    Sunrise Meadow Fire Garden
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

export default WestfieldOutdoorLivingPage;
