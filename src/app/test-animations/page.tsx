"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const TestAnimationsPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Animation Test Page
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testing animations across all pages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-lg p-6 shadow-md"
          >
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Services Page
            </h2>
            <p className="text-gray-600 mb-4">
              Test the animations on the services page with staggered elements.
            </p>
            <Link
              href="/services"
              className="inline-block px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium"
            >
              View Services
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-lg p-6 shadow-md"
          >
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Projects Page
            </h2>
            <p className="text-gray-600 mb-4">
              Test the animations on the projects page with staggered project
              cards.
            </p>
            <Link
              href="/projects"
              className="inline-block px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-lg p-6 shadow-md"
          >
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Contact Page
            </h2>
            <p className="text-gray-600 mb-4">
              Test the animations on the contact page with form elements.
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium"
            >
              View Contact
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-lg p-6 shadow-md"
          >
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              About Page
            </h2>
            <p className="text-gray-600 mb-4">
              Test the animations on the about page with team members.
            </p>
            <Link
              href="/about"
              className="inline-block px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium"
            >
              View About
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-lg p-6 shadow-md"
          >
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Privacy Policy
            </h2>
            <p className="text-gray-600 mb-4">
              Test the animations on the privacy policy page.
            </p>
            <Link
              href="/privacy"
              className="inline-block px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium"
            >
              View Privacy
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-lg p-6 shadow-md"
          >
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Terms of Service
            </h2>
            <p className="text-gray-600 mb-4">
              Test the animations on the terms of service page.
            </p>
            <Link
              href="/terms"
              className="inline-block px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium"
            >
              View Terms
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-medium text-gray-900 mb-6">
            Project Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Goodman&apos;s Fields
              </h3>
              <Link
                href="/place/goodmans-field"
                className="inline-block px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium"
              >
                View Project
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Whitehill and Bordon
              </h3>
              <Link
                href="/place/whitehill-and-bordon"
                className="inline-block px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium"
              >
                View Project
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Edenbrook Village
              </h3>
              <Link
                href="/place/edenbrook-village"
                className="inline-block px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium"
              >
                View Project
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestAnimationsPage;
