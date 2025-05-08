"use client";

import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/ui/Hero";
import WorkGallery from "@/components/ui/WorkGallery";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function Home() {
  return (
    <SiteLayout>
      <div className="relative">
        <Hero
          title="Expert Roofing Services at Your Fingertips"
          description="RoofGuard connects you with vetted roofing professionals for inspections, repairs, replacements, and maintenance. Get instant estimates, track your project, and chat with your roofer—all from one easy-to-use platform."
          heroImage="https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />

        {/* Floating Cards */}
        <div className="container relative -mt-20 z-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-primary-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                    <path
                      fillRule="evenodd"
                      d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Easy Payments</h3>
              </div>
              <p className="text-slate-600">
                Secure, transparent payment options for all your roofing
                services
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-terracotta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-terracotta-100 text-terracotta flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Certified Pros</h3>
              </div>
              <p className="text-slate-600">
                Work with verified, licensed, and experienced roofing
                professionals
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-emerald"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.674 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Guaranteed Work</h3>
              </div>
              <p className="text-slate-600">
                All services backed by our satisfaction guarantee and quality
                assurance
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="text-center p-6 rounded-xl bg-white shadow-md border border-slate-100"
              variants={fadeIn}
            >
              <div className="text-primary-600 text-4xl font-bold mb-2">
                5K+
              </div>
              <div className="text-slate-600 font-medium">Happy Customers</div>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-xl bg-white shadow-md border border-slate-100"
              variants={fadeIn}
            >
              <div className="text-amber-600 text-4xl font-bold mb-2">1K+</div>
              <div className="text-slate-600 font-medium">
                Certified Roofers
              </div>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-xl bg-white shadow-md border border-slate-100"
              variants={fadeIn}
            >
              <div className="text-emerald-600 text-4xl font-bold mb-2">
                7K+
              </div>
              <div className="text-slate-600 font-medium">
                Projects Completed
              </div>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-xl bg-white shadow-md border border-slate-100"
              variants={fadeIn}
            >
              <div className="text-blue-600 text-4xl font-bold mb-2">50+</div>
              <div className="text-slate-600 font-medium">Service Areas</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900">
              Your Roof Deserves the Best Care
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              From small repairs to complete replacements, we&apos;ve got you
              covered with reliable, local service.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Feature Card 1 */}
            <motion.div
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              variants={fadeIn}
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
                  Professional Inspections
                </h3>
                <p className="text-slate-600 mb-4">
                  Our certified professionals identify potential issues before
                  they become costly problems, providing detailed reports.
                </p>
                <Link
                  href="/services"
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

            {/* Feature Card 2 */}
            <motion.div
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              variants={fadeIn}
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-terracotta-100 text-terracotta rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-terracotta transition-colors duration-300">
                  Fast Repairs
                </h3>
                <p className="text-slate-600 mb-4">
                  Quick response for emergency repairs and maintenance to
                  prevent water damage and leaks, with 24/7 availability.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-terracotta font-medium hover:text-terracotta-dark"
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

            {/* Feature Card 3 */}
            <motion.div
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              variants={fadeIn}
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-emerald-100 text-emerald rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-emerald transition-colors duration-300">
                  Instant Estimates
                </h3>
                <p className="text-slate-600 mb-4">
                  Get transparent pricing with our instant estimation tool, no
                  hidden fees or surprises, just fair pricing.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-emerald font-medium hover:text-emerald-700"
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

            {/* Feature Card 4 */}
            <motion.div
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              variants={fadeIn}
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-sky-100 text-sky rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-sky transition-colors duration-300">
                  Project Tracking
                </h3>
                <p className="text-slate-600 mb-4">
                  Monitor your project&apos;s progress with real-time updates
                  and photo documentation through our intuitive dashboard.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sky font-medium hover:text-sky-700"
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

            {/* Feature Card 5 */}
            <motion.div
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              variants={fadeIn}
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 text-amber rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-amber transition-colors duration-300">
                  Direct Communication
                </h3>
                <p className="text-slate-600 mb-4">
                  Chat directly with your roofing professional for questions and
                  updates about your service in real-time.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-amber font-medium hover:text-amber-700"
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

            {/* Feature Card 6 */}
            <motion.div
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              variants={fadeIn}
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-slate-700 transition-colors duration-300">
                  Verified Contractors
                </h3>
                <p className="text-slate-600 mb-4">
                  All service providers are thoroughly vetted and certified for
                  your peace of mind and safety.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-slate-600 font-medium hover:text-slate-800"
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

      {/* How It Works Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900">
              How RoofGuard Works
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Getting your roof serviced has never been easier. Our streamlined
              process ensures quality and convenience.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Connector */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary-200 hidden md:block"></div>

            <div className="space-y-12 md:space-y-0 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <motion.div
                  className="md:text-right mb-8 md:mb-0 md:pr-12"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="absolute right-0 top-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg z-10 shadow-lg">
                    1
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">
                    Request Service
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Tell us about your roofing needs through our easy-to-use app
                    or website. Select your preferred service type and schedule
                    a convenient time.
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
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100">
                    <div className="p-1">
                      <Image
                        src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100">
                    <div className="p-1">
                      <Image
                        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <span className="absolute left-0 top-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg z-10 shadow-lg">
                    2
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">
                    Get Matched
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Our smart algorithm matches you with pre-screened, local
                    professionals who specialize in your specific roofing needs.
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
                          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="absolute right-0 top-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg z-10 shadow-lg">
                    3
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">
                    Job Completed
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Your roofing professional completes the work to your
                    complete satisfaction, with quality assurance and a final
                    inspection.
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
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100">
                    <div className="p-1">
                      <Image
                        src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Job Completed"
                        width={500}
                        height={300}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <span>Explore Our Services</span>
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
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <WorkGallery />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
              What Clients Say
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900">
              Trusted by Homeowners
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Don&apos;t just take our word for it. See what our satisfied
              customers have to say about RoofGuard&apos;s services.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Testimonial 1 */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md border border-slate-100 relative"
              variants={fadeIn}
            >
              <div className="absolute -top-5 left-8 text-primary-600 text-6xl leading-none">
                &ldquo;
              </div>
              <div className="relative">
                <p className="text-slate-700 mb-6 italic z-10 relative">
                  &ldquo;The RoofGuard platform made finding a reliable roofer
                  so easy. Our roof had a leak after a storm, and within 24
                  hours we had it fixed. Impressive service!&rdquo;
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
              className="bg-white rounded-xl p-8 shadow-md border border-slate-100 relative"
              variants={fadeIn}
            >
              <div className="absolute -top-5 left-8 text-primary-600 text-6xl leading-none">
                &ldquo;
              </div>
              <div className="relative">
                <p className="text-slate-700 mb-6 italic z-10 relative">
                  &ldquo;I loved being able to track the progress of my roof
                  replacement project. The photos and updates kept me informed
                  every step of the way. Great communication!&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-terracotta font-bold">AJ</span>
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
              className="bg-white rounded-xl p-8 shadow-md border border-slate-100 relative"
              variants={fadeIn}
            >
              <div className="absolute -top-5 left-8 text-primary-600 text-6xl leading-none">
                &ldquo;
              </div>
              <div className="relative">
                <p className="text-slate-700 mb-6 italic z-10 relative">
                  &ldquo;As a first-time homeowner, I was nervous about roof
                  maintenance. RoofGuard matched me with a patient professional
                  who explained everything and did an excellent job.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-emerald font-bold">MR</span>
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

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
            >
              <span>Read more customer stories</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
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
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
              Trusted by leading brands and organizations
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Partner 1 */}
            <motion.div
              variants={fadeIn}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-300"
            >
              <div className="h-24 bg-blue-50 flex items-center justify-center p-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-800">
                  BuildMaster Inc.
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Premium building materials supplier since 1985
                </p>
              </div>
            </motion.div>

            {/* Partner 2 */}
            <motion.div
              variants={fadeIn}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-300"
            >
              <div className="h-24 bg-amber-50 flex items-center justify-center p-4">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-amber-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-800">
                  RoofTech Systems
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Innovative roofing technology and solutions
                </p>
              </div>
            </motion.div>

            {/* Partner 3 */}
            <motion.div
              variants={fadeIn}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-300"
            >
              <div className="h-24 bg-emerald-50 flex items-center justify-center p-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-emerald-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-800">
                  EcoRoof Solutions
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Sustainable and eco-friendly roofing materials
                </p>
              </div>
            </motion.div>

            {/* Partner 4 */}
            <motion.div
              variants={fadeIn}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-300"
            >
              <div className="h-24 bg-purple-50 flex items-center justify-center p-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-purple-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-800">
                  SafeGuard Insurance
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Specialized insurance for roofing and construction
                </p>
              </div>
            </motion.div>

            {/* Partner 5 */}
            <motion.div
              variants={fadeIn}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-300"
            >
              <div className="h-24 bg-red-50 flex items-center justify-center p-4">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-800">
                  Global Materials Ltd.
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  International supplier of premium roofing materials
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-12 text-slate-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>
              Want to become a partner?{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                Contact us
              </Link>
            </p>
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

        <div className="container relative z-10">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mb-6">
              Ready to protect your most valuable investment?
            </h2>
            <p className="mt-4 text-xl text-white/90 mb-8">
              Join thousands of satisfied homeowners who trust RoofGuard for
              their roofing needs. Get a free inspection when you sign up today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center bg-white hover:bg-white/90 text-primary-600 font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl text-lg w-full sm:w-auto"
                >
                  <span>Get Started Today</span>
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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 border border-white/20 text-white font-medium py-4 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-lg w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
