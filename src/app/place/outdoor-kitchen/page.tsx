"use client";

import React, { useEffect, useRef, useState } from "react";
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
    visible: { y: 0, opacity: 1, transition: { duration: 0.5} },
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

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((i) => Math.max(1, i - 1)); // keep within [1, last]
  };

  const showNext = () => {
    setCurrentIndex((i) => Math.min(galleryImages.length - 1, i + 1));
  };

  // Body scroll lock + keyboard controls when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      const originalOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";

      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
      };
      window.addEventListener("keydown", onKey);

      // focus close button for accessibility
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus();
      });

      return () => {
        window.removeEventListener("keydown", onKey);
        document.documentElement.style.overflow = originalOverflow;
      };
    }
  }, [lightboxOpen]);

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

        {/* Hero image — unchanged (kept same size) */}
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

            {/* Nicer thumbnails (no redirect). Click to open lightbox. */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.slice(1).map((src, i) => (
                <motion.button
                  key={src}
                  type="button"
                  variants={imageFx}
                  onClick={() => openLightbox(i + 1)} // index in original array
                  className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 rounded-lg"
                  aria-label={`Open image ${i + 2} in large view`}
                >
                  <div className="w-full h-40 md:h-48 rounded-lg overflow-hidden ring-1 ring-gray-200 group-hover:ring-gray-300 transition">
                    <img
                      src={src}
                      alt={`Lakeside Outdoor Kitchen gallery image ${i + 2}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Lightbox overlay */}
            {lightboxOpen && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                role="dialog"
                aria-modal="true"
                aria-label="Image lightbox"
              >
                {/* Backdrop */}
                <div
                  className="absolute inset-0 bg-black/70"
                  onClick={closeLightbox}
                />

                {/* Image container */}
                <motion.div
                  className="relative z-10 max-w-[95vw] max-h-[85vh] p-2"
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={galleryImages[currentIndex]}
                    alt={`Lakeside Outdoor Kitchen large image ${currentIndex + 1}`}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg bg-black/20"
                  />

                  {/* Close (X) */}
                  <button
                    ref={closeBtnRef}
                    type="button"
                    onClick={closeLightbox}
                    aria-label="Close image"
                    className="absolute -top-3 -right-3 md:top-0 md:right-0 translate-y-[-50%] translate-x-[50%] md:translate-x-0 md:translate-y-0
                               rounded-full bg-white text-gray-800 p-2 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Left Arrow */}
                  <button
                    type="button"
                    onClick={showPrev}
                    disabled={currentIndex <= 1}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur p-2 text-gray-800 shadow
                               hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Right Arrow */}
                  <button
                    type="button"
                    onClick={showNext}
                    disabled={currentIndex >= galleryImages.length - 1}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur p-2 text-gray-800 shadow
                               hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
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
