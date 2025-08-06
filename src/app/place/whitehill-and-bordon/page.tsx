"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WhitehillBordonPage = () => {
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
    "https://fabrikuk.com/wp-content/uploads/2023/05/Places-WhitehillBordon-thumb-10x6.jpg",
    "https://www.wbdg.org.uk/wp-content/uploads/2019/07/Whitehill-Bordon-CGI-1.jpg",
    "https://www.wbdg.org.uk/wp-content/uploads/2019/07/Whitehill-Bordon-CGI-2.jpg",
    "https://www.wbdg.org.uk/wp-content/uploads/2019/07/Whitehill-Bordon-CGI-3.jpg",
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
            Whitehill and Bordon
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transforming a former military town into a sustainable community for
            the future
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
            alt="Whitehill and Bordon Development"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h2 className="text-3xl font-medium text-gray-900 mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Whitehill & Bordon is one of the largest regeneration projects in the UK, transforming a former military garrison town into a thriving and sustainable community. Our landscape-led masterplan provides a robust green infrastructure framework that will guide the development of 3,350 new homes, a new town centre, and 5,500 new jobs.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              The project encompasses over 100 hectares of new green space, including a Suitable Alternative Natural Greenspace (SANG), which provides a new recreational resource for the town and mitigates the impact of development on the surrounding heathlands. The design creates a network of green corridors that connect residents to nature, while providing a range of recreational opportunities and supporting local biodiversity.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-4 mt-10">
              Design Approach
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our master planning approach integrates landscape-led design
              principles with sustainable urban drainage systems (SuDS),
              creating multifunctional spaces that manage water runoff while
              providing attractive community amenities. The design emphasizes
              walkability and connectivity to surrounding natural environments, with a comprehensive network of footpaths and cycleways that will encourage active travel and reduce reliance on the car.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Sustainability Features
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Large-scale sustainable urban drainage systems (SuDS)</li>
                  <li>Extensive native woodland and heathland restoration</li>
                  <li>A network of community food growing spaces</li>
                  <li>Wildlife corridors and ecological enhancements</li>
                  <li>A town-wide network of footpaths and cycleways</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Community Impact
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>A new town centre with a range of community facilities</li>
                  <li>Significantly enhanced biodiversity on a former military site</li>
                  <li>Improved health and wellbeing through access to green space</li>
                  <li>Reduced flood risk and improved water quality</li>
                  <li>A more resilient and sustainable community for the future</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-medium text-gray-900 mb-4 mt-10">
              Project Gallery
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((src, index) => (
                <motion.div key={index} variants={itemVariants} className="overflow-hidden rounded-lg">
                  <img src={src} alt={`Whitehill and Bordon Gallery Image ${index + 1}`} className="w-full h-auto object-cover"/>
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
                  <p className="text-gray-600">Bordon, Hampshire</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Completion</h4>
                  <p className="text-gray-600">Ongoing</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Size</h4>
                  <p className="text-gray-600">200 hectares</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Client</h4>
                  <p className="text-gray-600">Whitehill & Bordon Regeneration Company</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Services</h4>
                  <p className="text-gray-600">
                    Landscape Architecture, Master Planning, Urban Design, EIA
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

export default WhitehillBordonPage;
