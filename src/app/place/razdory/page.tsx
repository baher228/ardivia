"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RazdoryEstatePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  // Lakeside-style variants
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const imageFx = {
    hidden: { scale: 1.04, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  // Direction-aware slide animation for lightbox images
  const slideVariants = {
    enter: (dir: 1 | -1) => ({ x: dir * 40, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.25 } },
    exit: (dir: 1 | -1) => ({
      x: dir * -40,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.2 },
    }),
  };

  // Stable, working gallery image URLs (preserved)
  const galleryImages = [
    "/photos/projects/razdory/1.jpg",
    "/photos/projects/razdory/2.jpg",
    "/photos/projects/razdory/3.jpg",
    "/photos/projects/razdory/4.jpg",
  ];

  // Lightbox state (Lakeside pattern)
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // indexes into galleryImages
  const [direction, setDirection] = useState<1 | -1>(1);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setDirection(1);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const showPrev = () => {
    setDirection(-1);
    setCurrentIndex((i) => Math.max(1, i - 1)); // keep within [1, last]; hero is index 0
  };

  const showNext = () => {
    setDirection(1);
    setCurrentIndex((i) => Math.min(galleryImages.length - 1, i + 1));
  };

  // Body scroll lock + keyboard controls when lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return;
    const originalOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);

    requestAnimationFrame(() => closeBtnRef.current?.focus());

    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = originalOverflow;
    };
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
        <motion.div
          className="mb-16 overflow-hidden rounded-lg"
          variants={imageFx}
        >
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
              features a home in the classical style, with ornate ironwork and a
              sweeping veranda facing the garden. The grounds are arranged with
              strict symmetry, formal parterres, and axial views extending
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

            {/* Clickable thumbnails (open lightbox) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.slice(1).map((src, i) => (
                <motion.button
                  key={src}
                  type="button"
                  variants={imageFx}
                  onClick={() => openLightbox(i + 1)} // hero is index 0; thumbs start at 1
                  className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 rounded-lg cursor-pointer"
                  aria-label={`Open image ${i + 2} in large view`}
                >
                  <div className="w-full h-40 md:h-48 rounded-lg overflow-hidden ring-1 ring-gray-200 group-hover:ring-gray-300 transition">
                    <img
                      src={src}
                      alt={`Razdory Estate gallery image ${i + 2}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Lightbox overlay */}
            <AnimatePresence>
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
                  <motion.div
                    className="absolute inset-0 bg-black/75 backdrop-blur-sm cursor-pointer cursor-zoom-out"
                    onClick={closeLightbox}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />

                  {/* Image container */}
                  <motion.div
                    className="relative z-10 max-w-[95vw] max-h-[85vh] p-2"
                    initial={{ scale: 0.96, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      transition: { duration: 0.2 },
                    }}
                    exit={{
                      scale: 0.98,
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    <div className="relative rounded-lg shadow-2xl bg-black/20">
                      <div className="p-1">
                        <div className="flex items-center justify-center">
                          <div className="w-[90vw] md:w-[75vw] lg:w-[65vw] max-h-[80vh]">
                            <div className="relative">
                              <AnimatePresence
                                custom={direction}
                                mode="popLayout"
                              >
                                <motion.img
                                  key={currentIndex}
                                  src={galleryImages[currentIndex]}
                                  alt={`Razdory Estate large image ${
                                    currentIndex + 1
                                  }`}
                                  className="w-full max-h-[80vh] object-contain rounded-lg bg-black/20"
                                  custom={direction}
                                  variants={slideVariants}
                                  initial="enter"
                                  animate="center"
                                  exit="exit"
                                />
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Close (X) */}
                      <motion.button
                        ref={closeBtnRef}
                        type="button"
                        onClick={closeLightbox}
                        aria-label="Close image"
                        className="absolute -top-3 -right-3 md:top-2 md:right-2 rounded-full shadow-lg bg-white/95 text-gray-800 w-10 h-10 flex items-center justify-center
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white cursor-pointer"
                        whileHover={{ scale: 1.05, rotate: 90 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M6 6l12 12M18 6L6 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.button>

                      {/* Left Arrow */}
                      <motion.button
                        type="button"
                        onClick={showPrev}
                        disabled={currentIndex <= 1}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full w-11 h-11 md:w-12 md:h-12 shadow-lg
                                   bg-white/95 backdrop-blur text-gray-800 hover:bg-white
                                   disabled:opacity-40 disabled:cursor-not-allowed
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          className="mx-auto"
                        >
                          <path
                            d="M15 18l-6-6 6-6"
                            stroke="currentColor"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.button>

                      {/* Right Arrow */}
                      <motion.button
                        type="button"
                        onClick={showNext}
                        disabled={currentIndex >= galleryImages.length - 1}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full w-11 h-11 md:w-12 md:h-12 shadow-lg
                                   bg-white/95 backdrop-blur text-gray-800 hover:bg-white
                                   disabled:opacity-40 disabled:cursor-not-allowed
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          className="mx-auto"
                        >
                          <path
                            d="M9 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
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
                  <a
                    href="/place/barvikha-classic"
                    className="text-white hover:underline"
                  >
                    Barvikha Classic Garden
                  </a>
                </li>
                <li>
                  <a
                    href="/place/lipki-manor"
                    className="text-white hover:underline"
                  >
                    Lipki Manor Parterres
                  </a>
                </li>
                <li>
                  <a
                    href="/place/romashkovo-villa"
                    className="text-white hover:underline"
                  >
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
