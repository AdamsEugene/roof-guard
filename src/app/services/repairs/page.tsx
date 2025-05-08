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

export default function RepairsPage() {
  return (
    <SiteLayout>
      <Hero
        title="Roof Repair Services"
        description="Professional roof repair solutions to fix leaks, damage, and wear, preserving your roof's integrity and extending its lifespan."
        ctaText="Schedule Repair"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#services"
        heroImage="https://images.unsplash.com/photo-1632759145351-1d8625731174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                Expert Repairs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Fast & Reliable Roof Repair Solutions
              </h2>
              <p className="text-xl text-slate-600">
                Our professional repair services address problems quickly and
                effectively before they lead to more extensive damage and costly
                replacements.
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
                    src="https://images.unsplash.com/photo-1654734256146-f4c2b9a271da?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600&h=400"
                    alt="Professional roof repair"
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
                  Precise Problem Diagnosis
                </h3>
                <p className="text-slate-600 mb-6">
                  Our repair process begins with a thorough assessment to
                  precisely identify the source of your roofing problems. We
                  don&apos;t just fix the symptoms – we address the root cause
                  to ensure long-lasting results.
                </p>
                <ul className="space-y-3">
                  {[
                    "Leak detection and waterproofing",
                    "Shingle replacement and repair",
                    "Flashing and vent seal repairs",
                    "Storm damage restoration",
                    "Structural reinforcement",
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

      {/* Repair Services Section */}
      <section className="py-20 bg-slate-50" id="services">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
              Our Repair Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Comprehensive Repair Solutions
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              From minor fixes to major repairs, we have the expertise to handle
              all your roofing needs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Service 1 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Leak Repair & Waterproofing
              </h3>
              <p className="text-slate-600">
                We quickly identify and repair active leaks, then apply advanced
                waterproofing solutions to prevent future water infiltration.
                Our comprehensive approach ensures your home stays dry and
                protected.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Shingle Replacement
              </h3>
              <p className="text-slate-600">
                Missing, damaged, or worn shingles compromise your roof&apos;s
                integrity. We carefully match and replace damaged shingles to
                restore protection and maintain your home&apos;s appearance.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Flashing & Seal Repair
              </h3>
              <p className="text-slate-600">
                Damaged flashing and deteriorated seals around vents, chimneys,
                and skylights are common sources of leaks. We repair or replace
                these critical components to maintain your roof&apos;s
                water-resistant barrier.
              </p>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Storm Damage Restoration
              </h3>
              <p className="text-slate-600">
                After severe weather, we provide rapid assessment and repair of
                wind, hail, and debris damage. Our emergency response team can
                quickly secure your roof and prevent secondary damage to your
                home.
              </p>
            </motion.div>

            {/* Service 5 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Gutter Repair & Maintenance
              </h3>
              <p className="text-slate-600">
                Properly functioning gutters are essential for roof health. We
                repair sagging, leaking, or damaged gutters and ensure proper
                water flow away from your home&apos;s foundation.
              </p>
            </motion.div>

            {/* Service 6 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Structural Repairs
              </h3>
              <p className="text-slate-600">
                When water damage has affected the underlying structure, we
                provide comprehensive repairs to rafters, decking, and support
                systems to restore your roof&apos;s structural integrity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
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
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              The Repair Process
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Our systematic approach ensures quality repairs that last
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-primary-100"></div>

              {/* Step 1 */}
              <motion.div
                className="relative mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 order-2 md:order-1 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Initial Assessment
                    </h3>
                    <p className="text-slate-600">
                      We thoroughly inspect your roof to identify all damage and
                      underlying issues, documenting our findings with photos
                      and detailed notes.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 relative">
                      1
                    </div>
                  </div>
                  <div className="flex-1 order-3 hidden md:block"></div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="relative mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 order-2 md:order-1 hidden md:block"></div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 relative">
                      2
                    </div>
                  </div>
                  <div className="flex-1 order-3 md:pl-12">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Detailed Proposal
                    </h3>
                    <p className="text-slate-600">
                      We provide a comprehensive repair proposal outlining all
                      work needed, materials required, cost breakdown, and
                      estimated timeline for completion.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="relative mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 order-2 md:order-1 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Material Preparation
                    </h3>
                    <p className="text-slate-600">
                      We source high-quality, matching materials specifically
                      for your roof type and coordinate logistics to ensure
                      efficient repair execution.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 relative">
                      3
                    </div>
                  </div>
                  <div className="flex-1 order-3 hidden md:block"></div>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                className="relative mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 order-2 md:order-1 hidden md:block"></div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 relative">
                      4
                    </div>
                  </div>
                  <div className="flex-1 order-3 md:pl-12">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Professional Repair
                    </h3>
                    <p className="text-slate-600">
                      Our skilled technicians execute the repair plan with
                      precision, following industry best practices and
                      manufacturer specifications for lasting results.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 5 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 order-2 md:order-1 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Final Inspection & Warranty
                    </h3>
                    <p className="text-slate-600">
                      We conduct a thorough quality check of all repairs, clean
                      the work area, and provide documentation of completed work
                      along with applicable warranty information.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 relative">
                      5
                    </div>
                  </div>
                  <div className="flex-1 order-3 hidden md:block"></div>
                </div>
              </motion.div>
            </div>
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
              Hear from homeowners who&apos;ve experienced our repair services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  R
                </div>
                <div>
                  <h4 className="font-bold text-lg">Robert Chen</h4>
                  <p className="text-slate-500 text-sm">Chicago, IL</p>
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
                &ldquo;I had a persistent leak that two other companies
                couldn&apos;t fix. RoofGuard&apos;s team identified the true
                source of the problem and repaired it permanently. No more
                leaks, even during heavy rains!&rdquo;
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
                  S
                </div>
                <div>
                  <h4 className="font-bold text-lg">Sarah Johnston</h4>
                  <p className="text-slate-500 text-sm">Austin, TX</p>
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
                &ldquo;After a severe storm damaged our roof, RoofGuard
                responded quickly to prevent further damage. They handled the
                entire repair professionally, even helping with our insurance
                claim. Outstanding service!&rdquo;
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
                  T
                </div>
                <div>
                  <h4 className="font-bold text-lg">Thomas Garcia</h4>
                  <p className="text-slate-500 text-sm">Phoenix, AZ</p>
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
                &ldquo;The repair team was knowledgeable, efficient, and
                respectful of our property. They fixed our aging roof issues at
                a fraction of what it would have cost to replace it, extending
                its life by many years.&rdquo;
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
              Ready to fix your roof problems?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Don&apos;t wait until small issues become big emergencies.
              Schedule your professional roof repair today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?service=repair"
                className="inline-flex items-center justify-center bg-white hover:bg-opacity-90 text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Schedule Repair
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
