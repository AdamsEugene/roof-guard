"use client";

import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/ui/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import WorkGallery from "@/components/ui/WorkGallery";

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

export default function ServicesPage() {
  return (
    <SiteLayout>
      <Hero
        title="Our Roofing Services"
        description="From inspections and repairs to complete roof replacements, our network of certified professionals provides comprehensive roofing solutions for homes and businesses."
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
        heroImage="https://images.unsplash.com/photo-1635424710928-0544e8512eae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Services Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
              Professional Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Comprehensive Roofing Solutions
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Our network of professionals offers a complete range of services
              to address all your roofing needs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Service Card 1 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-primary-600 transition-colors duration-300">
                  Roof Inspections
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive assessments to identify potential issues, leaks,
                  or damage to your roofing system. Our experts provide detailed
                  reports.
                </p>
                <Link
                  href="/services/inspections"
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-amber-600 transition-colors duration-300">
                  Roof Repairs
                </h3>
                <p className="text-slate-600 mb-4">
                  Prompt fixes for leaks, damaged shingles, flashing issues, and
                  other common roofing problems with quality materials.
                </p>
                <Link
                  href="/services/repairs"
                  className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                  Roof Replacement
                </h3>
                <p className="text-slate-600 mb-4">
                  Complete roof system replacement with quality materials and
                  expert installation. Custom solutions for every home.
                </p>
                <Link
                  href="/services/replacements"
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Service Card 4 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  Roof Maintenance
                </h3>
                <p className="text-slate-600 mb-4">
                  Regular maintenance programs to extend the life of your roof
                  and prevent costly problems. Seasonal inspections included.
                </p>
                <Link
                  href="/services/maintenance"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Service Card 5 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
                  Storm Damage Repair
                </h3>
                <p className="text-slate-600 mb-4">
                  Emergency services for roofs damaged by storms, wind, hail, or
                  fallen debris. 24/7 response for urgent situations.
                </p>
                <Link
                  href="/services/emergency"
                  className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Service Card 6 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-purple-600 transition-colors duration-300">
                  Solar Roof Installation
                </h3>
                <p className="text-slate-600 mb-4">
                  Modern solar roofing solutions that combine energy efficiency
                  with reliable protection. Sustainable and cost-effective.
                </p>
                <Link
                  href="/services/solar"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Our Service Process
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              A streamlined approach to delivering quality roofing services
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Connector */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary-200 hidden md:block"></div>

            <div className="space-y-16 md:space-y-0 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <motion.div
                  className="md:text-right mb-8 md:mb-0 md:pr-12"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="absolute right-0 top-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg z-10 shadow-lg">
                    1
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">
                    Request Service
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Submit your service request through our platform with
                    details about your roofing needs and preferred schedule.
                  </p>
                  <div className="md:hidden flex items-center mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                      1
                    </div>
                    <div className="h-1 flex-grow bg-primary-200"></div>
                  </div>
                </motion.div>
                <motion.div
                  className="md:pl-12"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100">
                    <div className="p-1">
                      <Image
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=300"
                        alt="Request Service"
                        width={500}
                        height={300}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <motion.div
                  className="hidden md:block md:pr-12"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100">
                    <div className="p-1">
                      <Image
                        src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a77?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=300"
                        alt="Get Matched"
                        width={500}
                        height={300}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="md:text-left mb-8 md:mb-0 md:pl-12"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <span className="absolute left-0 top-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg z-10 shadow-lg">
                    2
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">
                    Get Matched
                  </h3>
                  <p className="text-slate-600 mb-4">
                    We connect you with the right certified professional for
                    your specific roofing needs and location.
                  </p>
                  <div className="md:hidden flex items-center mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                      2
                    </div>
                    <div className="h-1 flex-grow bg-primary-200"></div>
                  </div>
                  <motion.div
                    className="md:hidden"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100">
                      <div className="p-1">
                        <Image
                          src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a77?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=300"
                          alt="Get Matched"
                          width={500}
                          height={300}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <motion.div
                  className="md:text-right mb-8 md:mb-0 md:pr-12"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="absolute right-0 top-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg z-10 shadow-lg">
                    3
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">
                    Receive Quote
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Review and approve the detailed service estimate with
                    transparent pricing and no hidden fees.
                  </p>
                  <div className="md:hidden flex items-center mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                      3
                    </div>
                    <div className="h-1 flex-grow bg-primary-200"></div>
                  </div>
                </motion.div>
                <motion.div
                  className="md:pl-12"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100">
                    <div className="p-1">
                      <Image
                        src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=300"
                        alt="Receive Quote"
                        width={500}
                        height={300}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <motion.div
                  className="hidden md:block md:pr-12"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100">
                    <div className="p-1">
                      <Image
                        src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=300"
                        alt="Service Completion"
                        width={500}
                        height={300}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="md:text-left mb-8 md:mb-0 md:pl-12"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="absolute left-0 top-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg z-10 shadow-lg">
                    4
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">
                    Service Completion
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Your roofing professional completes the work with quality
                    craftsmanship and thorough cleanup when finished.
                  </p>
                  <div className="md:hidden flex items-center mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                      4
                    </div>
                    <div className="h-1 flex-grow bg-primary-200"></div>
                  </div>
                  <motion.div
                    className="md:hidden"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100">
                      <div className="p-1">
                        <Image
                          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=300"
                          alt="Service Completion"
                          width={500}
                          height={300}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <div className="container">
        <WorkGallery
          title="Our Recent Projects"
          subtitle="See examples of our quality work across different roofing services"
        />
      </div>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Read testimonials from satisfied homeowners who have experienced
              our quality service
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Testimonial 1 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl p-8 shadow-md border border-slate-100 relative"
            >
              <div className="absolute -top-5 left-8 text-primary-600 text-6xl leading-none">
                &ldquo;
              </div>
              <div className="relative">
                <p className="text-slate-700 mb-6 italic z-10 relative">
                  &ldquo;RoofGuard connected me with an amazing contractor who
                  fixed our leaking roof quickly and professionally. The whole
                  process was seamless.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-700 font-bold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">James Smith</h4>
                    <p className="text-slate-500 text-sm">
                      Homeowner in Seattle
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl p-8 shadow-md border border-slate-100 relative"
            >
              <div className="absolute -top-5 left-8 text-primary-600 text-6xl leading-none">
                &ldquo;
              </div>
              <div className="relative">
                <p className="text-slate-700 mb-6 italic z-10 relative">
                  &ldquo;I needed a full roof replacement and was dreading the
                  process. RoofGuard made it simple and the quality of work
                  exceeded my expectations.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-700 font-bold">AJ</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Amanda Johnson</h4>
                    <p className="text-slate-500 text-sm">
                      Homeowner in Portland
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl p-8 shadow-md border border-slate-100 relative"
            >
              <div className="absolute -top-5 left-8 text-primary-600 text-6xl leading-none">
                &ldquo;
              </div>
              <div className="relative">
                <p className="text-slate-700 mb-6 italic z-10 relative">
                  &ldquo;The solar roof installation was completed on time and
                  on budget. The team was professional and the system has been
                  working perfectly.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-emerald-700 font-bold">MR</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Michael Rodriguez
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Homeowner in Denver
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white"></div>
          <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-white"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to get started with your roofing project?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Schedule a free consultation with one of our roofing experts
              today.
            </p>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center bg-white hover:bg-white/90 text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg"
              >
                Request a Quote
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
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
