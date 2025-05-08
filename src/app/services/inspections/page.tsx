"use client";

import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/ui/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function InspectionsPage() {
  return (
    <SiteLayout>
      <Hero
        title="Roof Inspection Services"
        description="Comprehensive assessments to identify potential issues, leaks, or damage to your roofing system with detailed reports."
        ctaText="Schedule Inspection"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#benefits"
        heroImage="https://images.unsplash.com/photo-1620230992186-dd8c3140c646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
                Professional Service
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Why Choose Our Roof Inspection Service
              </h2>
              <p className="text-xl text-slate-600">
                Our certified inspectors provide thorough, detailed assessments
                of your roof&apos;s condition, helping you identify issues
                before they become costly problems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1598252976330-50d202e2837a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600&h=400"
                    alt="Professional roof inspector"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Comprehensive Roof Analysis
                </h3>
                <p className="text-slate-600 mb-6">
                  Our roof inspections go beyond a simple visual check. We
                  utilize advanced technology including thermal imaging and
                  moisture detection to identify hidden issues that could lead
                  to costly repairs if left unaddressed.
                </p>
                <ul className="space-y-3">
                  {[
                    "Detailed examination of all roofing components",
                    "Identification of active and potential leaks",
                    "Assessment of shingle, tile, or membrane condition",
                    "Evaluation of flashing, gutters, and drainage systems",
                    "Structural integrity verification",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Process Section */}
      <section className="py-20 bg-slate-50" id="benefits">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              The Inspection Process
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Our systematic approach ensures no detail is overlooked
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Step 1 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Initial Assessment
              </h3>
              <p className="text-slate-600">
                Our inspector performs a thorough visual examination of your
                roof&apos;s exterior, identifying obvious damage, aging signs,
                and potential problem areas.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Detailed Inspection
              </h3>
              <p className="text-slate-600">
                We inspect all roofing components including shingles, flashing,
                vents, gutters, and underlying structure using specialized
                equipment when necessary.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Interior Check
              </h3>
              <p className="text-slate-600">
                We examine your attic and interior ceiling for signs of water
                damage, proper ventilation, and insulation issues that could
                affect roof performance.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Documentation
              </h3>
              <p className="text-slate-600">
                We document all findings with detailed photos and notes,
                providing visual evidence of your roof&apos;s current condition.
              </p>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                5
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Comprehensive Report
              </h3>
              <p className="text-slate-600">
                You&apos;ll receive a detailed inspection report outlining all
                findings, including current issues, potential concerns, and
                recommendations for repairs or maintenance.
              </p>
            </motion.div>

            {/* Step 6 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                6
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Personalized Consultation
              </h3>
              <p className="text-slate-600">
                We review the report with you, answering questions and providing
                expert recommendations on next steps, prioritizing urgent
                repairs and long-term maintenance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Inspection Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
              Inspection Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Choose the Right Inspection
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              We offer various inspection types tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Type 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100"
            >
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1649859394657-8762d8a4758a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=250"
                  alt="Routine Maintenance Inspection"
                  width={500}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  Routine Maintenance Inspection
                </h3>
                <p className="text-slate-600 mb-4">
                  Annual inspections to maintain roof health and identify
                  potential issues before they develop into serious problems.
                  Ideal for proactive homeowners.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700">Visual assessment</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700">Basic leak detection</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Maintenance recommendations
                    </span>
                  </div>
                </div>
                <div className="font-bold text-2xl text-slate-900 mb-4">
                  $149
                  <span className="text-slate-500 text-lg font-normal">
                    {" "}
                    / inspection
                  </span>
                </div>
                <Link
                  href="/contact?service=routine-inspection"
                  className="inline-block w-full py-3 px-6 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Schedule Now
                </Link>
              </div>
            </motion.div>

            {/* Type 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-primary-100 ring-2 ring-primary-500"
            >
              <div className="bg-primary-600 text-white text-center py-2 font-semibold">
                Most Popular
              </div>
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1635424715326-a8f1d2117db0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=250"
                  alt="Comprehensive Inspection"
                  width={500}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  Comprehensive Inspection
                </h3>
                <p className="text-slate-600 mb-4">
                  In-depth analysis of your entire roofing system, including
                  advanced diagnostics to identify hidden issues and potential
                  problems.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Thermal imaging analysis
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Moisture detection scan
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Detailed digital report
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Personalized consultation
                    </span>
                  </div>
                </div>
                <div className="font-bold text-2xl text-slate-900 mb-4">
                  $299
                  <span className="text-slate-500 text-lg font-normal">
                    {" "}
                    / inspection
                  </span>
                </div>
                <Link
                  href="/contact?service=comprehensive-inspection"
                  className="inline-block w-full py-3 px-6 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Schedule Now
                </Link>
              </div>
            </motion.div>

            {/* Type 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100"
            >
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1626250788957-9e3aa4fea6bd?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=250"
                  alt="Storm Damage Assessment"
                  width={500}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  Storm Damage Assessment
                </h3>
                <p className="text-slate-600 mb-4">
                  Emergency inspections after severe weather events to assess
                  damage and provide documentation for insurance claims.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700">Rapid response</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700">Damage documentation</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Insurance claim assistance
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Emergency repair recommendations
                    </span>
                  </div>
                </div>
                <div className="font-bold text-2xl text-slate-900 mb-4">
                  $249
                  <span className="text-slate-500 text-lg font-normal">
                    {" "}
                    / inspection
                  </span>
                </div>
                <Link
                  href="/contact?service=storm-damage-assessment"
                  className="inline-block w-full py-3 px-6 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Schedule Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Hear from homeowners who&apos;ve experienced our inspection
              services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-lg">Michael Thompson</h4>
                  <p className="text-slate-500 text-sm">Seattle, WA</p>
                </div>
              </div>
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 italic">
                &ldquo;The inspector was incredibly thorough and took the time
                to explain everything he found. The detailed report helped me
                prioritize repairs and saved me from what could have been an
                expensive emergency down the road.&rdquo;
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl mr-4">
                  J
                </div>
                <div>
                  <h4 className="font-bold text-lg">Jennifer Rodriguez</h4>
                  <p className="text-slate-500 text-sm">Portland, OR</p>
                </div>
              </div>
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 italic">
                &ldquo;After a major storm, I was worried about potential
                damage. They came out quickly, conducted a thorough inspection,
                and provided documentation that made my insurance claim process
                seamless. Truly professional service!&rdquo;
              </p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl mr-4">
                  D
                </div>
                <div>
                  <h4 className="font-bold text-lg">David Washington</h4>
                  <p className="text-slate-500 text-sm">Denver, CO</p>
                </div>
              </div>
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 italic">
                &ldquo;As a first-time homebuyer, I wasn&apos;t sure what to
                expect with a roof inspection. The inspector was patient,
                educational, and gave me a clear understanding of my roof&apos;s
                condition and lifespan. Highly recommend!&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to schedule your roof inspection?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Take the first step toward protecting your home and ensuring your
              roof&apos;s longevity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?service=inspection"
                className="inline-flex items-center justify-center bg-white hover:bg-opacity-90 text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Schedule Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
