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

export default function MaintenancePage() {
  return (
    <SiteLayout>
      <Hero
        title="Roof Maintenance Services"
        description="Proactive maintenance programs to extend your roof's lifespan, prevent costly repairs, and ensure optimal performance year-round."
        ctaText="Schedule Maintenance"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#plans"
        heroImage="https://images.unsplash.com/photo-1638867511717-390166d3d272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                Preventative Care
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Extend Your Roof&apos;s Lifespan
              </h2>
              <p className="text-xl text-slate-600">
                Regular maintenance is the key to avoiding unexpected repairs
                and maximizing your roof&apos;s performance and longevity.
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
                    src="https://images.unsplash.com/photo-1637693864699-db12d0395a1a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600&h=400"
                    alt="Professional roof maintenance"
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
                  Why Maintenance Matters
                </h3>
                <p className="text-slate-600 mb-6">
                  Small issues can quickly become major problems when left
                  unaddressed. Our maintenance programs catch potential issues
                  early, saving you thousands in avoidable repair costs.
                </p>
                <ul className="space-y-3">
                  {[
                    "Extend roof lifespan by 30% or more",
                    "Prevent costly water damage and leaks",
                    "Maintain warranty compliance",
                    "Improve energy efficiency",
                    "Early identification of potential problems",
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

      {/* Maintenance Plans Section */}
      <section className="py-20 bg-slate-50" id="plans">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
              Maintenance Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Choose the Right Plan for Your Home
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              From seasonal inspections to comprehensive care, we offer plans to
              fit every home and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-12 bg-slate-700 text-white flex items-center justify-center font-semibold">
                Essential Plan
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-slate-900">
                    $199
                  </span>
                  <span className="text-slate-600">/year</span>
                  <p className="text-slate-500 mt-1">One annual visit</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Visual roof inspection",
                    "Gutter cleaning",
                    "Minor repairs (up to 1 hour labor)",
                    "Digital report with photos",
                    "Maintenance recommendations",
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
                <Link
                  href="/contact?service=maintenance-essential"
                  className="inline-block w-full py-3 px-6 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Select Plan
                </Link>
              </div>
            </motion.div>

            {/* Plan 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-primary-100 ring-2 ring-primary-500 transform md:scale-105 z-10"
            >
              <div className="h-12 bg-primary-600 text-white flex items-center justify-center font-semibold">
                Premium Plan
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-slate-900">
                    $379
                  </span>
                  <span className="text-slate-600">/year</span>
                  <p className="text-slate-500 mt-1">Two seasonal visits</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Everything in Essential plan",
                    "Bi-annual inspections (spring & fall)",
                    "Extended repairs (up to 2 hours labor)",
                    "Moss/algae treatment",
                    "Flashing inspection & repair",
                    "Priority scheduling for emergencies",
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
                <Link
                  href="/contact?service=maintenance-premium"
                  className="inline-block w-full py-3 px-6 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Select Plan
                </Link>
              </div>
            </motion.div>

            {/* Plan 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-12 bg-slate-700 text-white flex items-center justify-center font-semibold">
                Ultimate Plan
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-slate-900">
                    $649
                  </span>
                  <span className="text-slate-600">/year</span>
                  <p className="text-slate-500 mt-1">Quarterly visits</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Everything in Premium plan",
                    "Quarterly inspections & maintenance",
                    "Comprehensive repairs (up to 4 hours labor)",
                    "Attic ventilation inspection",
                    "24/7 emergency response",
                    "Annual roof coating treatment",
                    "15% discount on additional services",
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
                <Link
                  href="/contact?service=maintenance-ultimate"
                  className="inline-block w-full py-3 px-6 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Select Plan
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
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
              Comprehensive Care
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              What&apos;s Included in Every Visit
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Our maintenance visits are thorough and methodical, leaving no
              detail overlooked
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
              className="bg-slate-50 rounded-xl p-6"
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Visual Inspection
              </h3>
              <p className="text-slate-600">
                Thorough examination of all roofing components, including
                shingles, tiles, flashing, vents, and structural elements.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              variants={fadeIn}
              className="bg-slate-50 rounded-xl p-6"
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
                    d="M19 14v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m2-4h10l2 4H5l2-4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Debris Removal
              </h3>
              <p className="text-slate-600">
                Clearing of leaves, branches, and debris from roof surfaces and
                valleys to prevent water damming and improve drainage.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              variants={fadeIn}
              className="bg-slate-50 rounded-xl p-6"
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
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Gutter Cleaning
              </h3>
              <p className="text-slate-600">
                Complete cleaning of gutters and downspouts to ensure proper
                water flow away from your home and foundation.
              </p>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              variants={fadeIn}
              className="bg-slate-50 rounded-xl p-6"
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
                    d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Leak Detection
              </h3>
              <p className="text-slate-600">
                Careful inspection for signs of water infiltration, moisture
                damage, or potential leak areas before they become problematic.
              </p>
            </motion.div>

            {/* Service 5 */}
            <motion.div
              variants={fadeIn}
              className="bg-slate-50 rounded-xl p-6"
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
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Preventative Treatments
              </h3>
              <p className="text-slate-600">
                Application of moss inhibitors and protective treatments to
                prevent organic growth and preserve roofing materials.
              </p>
            </motion.div>

            {/* Service 6 */}
            <motion.div
              variants={fadeIn}
              className="bg-slate-50 rounded-xl p-6"
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Detailed Reporting
              </h3>
              <p className="text-slate-600">
                Comprehensive documentation with photos and maintenance
                recommendations for ongoing roof care and optimal performance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start protecting your roof investment today
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Regular maintenance saves money and prevents unexpected
              emergencies. Choose a plan that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?service=maintenance"
                className="inline-flex items-center justify-center bg-white hover:bg-opacity-90 text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Schedule Maintenance
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
