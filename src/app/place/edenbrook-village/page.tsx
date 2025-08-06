"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EdenbrookVillagePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const galleryImages = [
    "https://fabrikuk.com/wp-content/uploads/2025/04/Fabrik-Edenbrook-Web-Photo-by-Studio-Maple-268.jpg",
    "https://www.berkeleygroup.co.uk/-/media/berkeley-group/developments/hampshire/edenbrook/edenbrook-hero-1-1200x800.jpg",
    "https://www.berkeleygroup.co.uk/-/media/berkeley-group/developments/hampshire/edenbrook/edenbrook-hero-2-1200x800.jpg",
    "https://www.berkeleygroup.co.uk/-/media/berkeley-group/developments/hampshire/edenbrook/edenbrook-hero-3-1200x800.jpg"
  ];

  return (
    <motion.div
      className="min-h-screen bg-white pt-24"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h1
            className="text-4xl md:text-5xl font-light text-gray-900 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Edenbrook Village
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A new garden village that celebrates the natural landscape of the
            South Downs
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
              Landscape Architecture
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Master Planning
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-16 overflow-hidden rounded-lg"
          variants={imageVariants}
        >
          <img
            src={galleryImages[0]}
            alt="Edenbrook Village Development"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h2 className="text-3xl font-medium text-gray-900 mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Edenbrook Village represents a contemporary interpretation of the
              traditional English garden village, thoughtfully integrated into
              the rolling hills of the South Downs. Our landscape architecture
              approach emphasizes the preservation and enhancement of existing
              natural features while creating a cohesive community environment. The development provides a range of new homes, from apartments to large family houses, all designed to a high standard of sustainability.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              The development features over 82 acres of country park, with extensive parkland and woodland areas that
              provide residents with direct access to nature. Our design creates
              a series of interconnected green spaces that serve as both
              recreational areas and wildlife corridors, including a new village green, sports pitches, and a network of footpaths and cycleways.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-4 mt-10">
              Design Approach
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our approach to Edenbrook Village prioritizes the creation of a
              sustainable community that enhances rather than diminishes the
              natural beauty of the South Downs. We've preserved existing mature
              trees and hedgerows while introducing new native planting that
              will mature over time to create a rich, biodiverse landscape. The masterplan has been designed to create a strong sense of place, with a clear hierarchy of streets and spaces that are safe and welcoming for pedestrians and cyclists.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Sustainability Features
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Preservation of existing mature trees and hedgerows</li>
                  <li>Native and wildlife-attracting planting schemes</li>
                  <li>Sustainable urban drainage systems (SuDS)</li>
                  <li>Community allotments and a new orchard</li>
                  <li>Excellent public transport links</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Community Impact
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>A new village green and community facilities</li>
                  <li>Extensive walking and cycling routes</li>
                  <li>Enhanced connection to the South Downs National Park</li>
                  <li>A significant increase in local biodiversity</li>
                  <li>A safe and healthy environment for families</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-medium text-gray-900 mb-4 mt-10">
              Project Gallery
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((src, index) => (
                <motion.div key={index} variants={itemVariants} className="overflow-hidden rounded-lg">
                  <img src={src} alt={`Edenbrook Village Gallery Image ${index + 1}`} className="w-full h-auto object-cover"/>
                </motion.div>
              ))}
            </div>

          </motion.div>

          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Project Details
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">Fleet, Hampshire</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Completion</h4>
                  <p className="text-gray-600">Ongoing</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Size</h4>
                  <p className="text-gray-600">120 acres</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Client</h4>
                  <p className="text-gray-600">Berkeley Group</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Services</h4>
                  <p className="text-gray-600">
                    Landscape Architecture, Master Planning, Urban Design
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-medium mb-4">Related Projects</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/place/goodmans-field"
                    className="text-white hover:underline"
                  >
                    Goodman's Fields
                  </a>
                </li>
                <li>
                  <a
                    href="/place/whitehill-and-bordon"
                    className="text-white hover:underline"
                  >
                    Whitehill and Bordon
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

export default EdenbrookVillagePage;
