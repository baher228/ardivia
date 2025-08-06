"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GoodmansFieldsPage = () => {
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
    "https://fabrikuk.com/wp-content/uploads/2023/05/Goodmans-7-10x7.jpg",
    "https://www.berkeleygroup.co.uk/-/media/berkeley-group/developments/london/goodmans-fields/goodmans-fields-hero-2-1200x800.jpg",
    "https://www.pcf-p.com/wp-content/uploads/2019/11/13015_N1_medium-1.jpg",
    "https://www.berkeleygroup.co.uk/-/media/berkeley-group/developments/london/goodmans-fields/goodmans-fields-piazza-1200x800.jpg"
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
            Goodman's Fields
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A vibrant mixed-use development creating new public spaces in the
            heart of London
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
              Urban Design
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Public Realm
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-16 overflow-hidden rounded-lg"
          variants={imageVariants}
        >
          <img
            src={galleryImages[0]}
            alt="Goodman's Fields Development"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h2 className="text-3xl font-medium text-gray-900 mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Goodman's Fields is a transformative seven-acre mixed-use development that
              breathes new life into a historic area of Aldgate, East London.
              Our landscape architecture approach prioritizes creating vibrant
              public spaces that foster community interaction while respecting
              the area's rich heritage. The project, designed by Lifschutz Davidson Sandilands and Murdoch Wickham, has established a new urban quarter with a mix of residential, commercial, and leisure uses.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              The development seamlessly integrates private residential spaces
              with carefully curated public landscapes, featuring mature tree
              planting, seating areas, and flexible spaces that adapt to the
              needs of residents and visitors throughout the day. The public realm includes a new piazza, a linear park, and a series of smaller gardens and courtyards, all interconnected by pedestrian-friendly streets and lanes.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-4 mt-10">
              Design Approach
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our design philosophy centers on creating climate-resilient spaces
              that contribute to urban heat island effect mitigation while
              providing year-round interest through thoughtful plant selection.
              Native species and drought-resistant plants reduce maintenance
              requirements and support local biodiversity. The design also incorporates sustainable urban drainage systems (SuDS) to manage rainwater runoff and improve water quality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Sustainability Features
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Rainwater harvesting and SuDS</li>
                  <li>Permeable paving materials</li>
                  <li>Extensive native plant species selection</li>
                  <li>Green roofs and living walls</li>
                  <li>Locally sourced and recycled materials</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Community Impact
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>New public gathering spaces and parks</li>
                  <li>Enhanced biodiversity and green corridors</li>
                  <li>Improved air and water quality</li>
                  <li>Increased local property values</li>
                  <li>Creation of a vibrant, walkable neighborhood</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-medium text-gray-900 mb-4 mt-10">
              Project Gallery
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((src, index) => (
                <motion.div key={index} variants={itemVariants} className="overflow-hidden rounded-lg">
                  <img src={src} alt={`Goodman's Fields Gallery Image ${index + 1}`} className="w-full h-auto object-cover"/>
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
                  <p className="text-gray-600">Aldgate, London</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Completion</h4>
                  <p className="text-gray-600">2023</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Size</h4>
                  <p className="text-gray-600">7 acres</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Client</h4>
                  <p className="text-gray-600">Berkeley Group</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Services</h4>
                  <p className="text-gray-600">
                    Landscape Architecture, Urban Design, Master Planning
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-medium mb-4">Related Projects</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/place/whitehill-and-bordon"
                    className="text-white hover:underline"
                  >
                    Whitehill and Bordon
                  </a>
                </li>
                <li>
                  <a
                    href="/place/edenbrook-village"
                    className="text-white hover:underline"
                  >
                    Edenbrook Village
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

export default GoodmansFieldsPage;
