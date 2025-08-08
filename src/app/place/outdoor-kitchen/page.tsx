"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LakesideOutdoorKitchenPage: React.FC = () => {
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

  const galleryImages = [
    "/photos/projects/outdoorKitchen/1.png",
    "/photos/projects/outdoorKitchen/2.png",
    "/photos/projects/outdoorKitchen/3.png",
    "/photos/projects/outdoorKitchen/4.png",
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
            Lakeside Outdoor Kitchen & Fireplace
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A fully equipped outdoor culinary and lounge space blending stone,
            steel, and firelight—crafted for all-season lakeside living.
          </motion.p>
          <motion.div
            className="mt-4 flex flex-wrap justify-center gap-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Outdoor Kitchen
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Hardscape
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Fireplace Design
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Entertaining Space
            </span>
          </motion.div>
        </motion.div>

        {/* Hero image */}
        <motion.div className="mb-16 overflow-hidden rounded-lg" variants={imageFx}>
          <img
            src={galleryImages[0]}
            alt="Lakeside Outdoor Kitchen hero"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left content */}
          <motion.div className="lg:col-span-2" variants={item}>
            <h2 className="text-3xl font-medium text-gray-900 mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Situated on a serene lakeshore, this outdoor kitchen was designed
              to host intimate dinners and large gatherings alike. A natural
              stone veneer wraps the counters, which integrate professional-grade
              stainless appliances including a gas grill, side burner, undercounter
              refrigerator, and prep sink. The adjacent modern fireplace, clad in
              dark brick, anchors a lounge zone that stays warm late into the
              shoulder seasons.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Oversized porcelain pavers form a seamless, low-maintenance floor
              that withstands freeze-thaw cycles. The layout maximizes cooking
              efficiency with dedicated zones for prep, cooking, plating, and
              serving—while keeping the chef engaged with guests thanks to an
              open-plan bar ledge.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-4 mt-10">
              Design Approach
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              The palette was selected for visual harmony with the lakeside
              backdrop: greys, charcoals, and steel tones accented by warm
              firelight. We ensured all materials are weather-resistant and easy
              to clean. The fireplace is vented and fitted with a stainless
              lintel, and its hearth doubles as casual seating. Integrated
              lighting under counters and along paver joints allows the space to
              transition effortlessly from daytime cooking to evening
              entertaining.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Build Features
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Stone veneer over CMU base with sealed joints</li>
                  <li>Stainless steel gas grill, side burner & fridge</li>
                  <li>Porcelain pavers on frost-protected slab</li>
                  <li>Double-sided modern brick fireplace</li>
                  <li>Integrated LED task & ambient lighting</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Sustainability & Comfort
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>High-efficiency gas burners reduce fuel use</li>
                  <li>Locally sourced stone & brick</li>
                  <li>Permeable paver edges for stormwater management</li>
                  <li>LED lighting 3 W/ft for low energy consumption</li>
                  <li>Weather covers extend appliance lifespan</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-medium text-gray-900 mb-4 mt-10">
              Project Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.slice(1).map((src, i) => (
                <motion.div key={i} variants={item} className="overflow-hidden rounded-lg">
                  <img
                    src={src}
                    alt={`Lakeside Outdoor Kitchen gallery image ${i + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div className="lg:col-span-1" variants={item}>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Project Details
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">Lake Country, Wisconsin</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Completion</h4>
                  <p className="text-gray-600">Autumn 2023</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Size</h4>
                  <p className="text-gray-600">≈ 450 sq ft kitchen & lounge</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Client</h4>
                  <p className="text-gray-600">Private Residence</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Services</h4>
                  <p className="text-gray-600">
                    Outdoor Kitchen Design, Fireplace, Hardscape, Lighting
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Budget</h4>
                  <p className="text-gray-600">$78,000</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-medium mb-4">Related Projects</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/place/waterfront-firepit" className="text-white hover:underline">
                    Waterfront Firepit Lounge
                  </a>
                </li>
                <li>
                  <a href="/place/stone-patio-grill" className="text-white hover:underline">
                    Stone Patio Grill Station
                  </a>
                </li>
                <li>
                  <a href="/place/modern-backyard-retreat" className="text-white hover:underline">
                    Modern Backyard Retreat
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

export default LakesideOutdoorKitchenPage;
