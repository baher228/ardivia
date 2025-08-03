"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const teamMembers = [
    {
      name: "Chelik",
      role: "Director of Landscape Architecture",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
      bio: "With over 15 years of experience, Sarah leads our design vision and client relationships.",
    },
    {
      name: "Hren",
      role: "Urban Design Specialist",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Michael specializes in creating sustainable urban environments that enhance community life.",
    },
    {
      name: "Kto-to",
      role: "Sustainability Director",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Emma ensures all our projects meet the highest environmental standards and certifications.",
    },
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
            Who we are
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Makers of climate-resilient, sociable places.
          </motion.p>
        </motion.div>

        <motion.div className="mb-16" variants={itemVariants}>
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-medium text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We are landscape architects and urban designers who create
              climate-resilient, sociable places that bring communities
              together. Our work spans from intimate garden spaces to
              large-scale urban developments, always with sustainability and
              social connection at the heart of our approach.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mb-6 mt-10">
              Our Approach
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We believe that great places are born from understanding the
              unique character of each site and the needs of the people who will
              use them. Our designs respond to local climate, ecology, and
              culture while creating spaces that foster community interaction
              and environmental resilience.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mb-6 mt-10">
              Our Impact
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              From award-winning schools to transformative housing developments,
              our projects demonstrate how thoughtful landscape design can
              enhance quality of life, support biodiversity, and create lasting
              value for communities across the UK.
            </p>
          </div>
        </motion.div>

        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-medium text-gray-900 mb-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center py-12 border-t border-gray-200"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-medium text-gray-900 mb-4">
            Ready to work with us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for exciting new projects and talented
            people to join our team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="/contact"
              className="px-8 py-3 bg-gray-900 text-white rounded-md text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.a>
            <motion.a
              href="/careers"
              className="px-8 py-3 bg-white text-gray-900 border border-gray-900 rounded-md text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join our team
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
