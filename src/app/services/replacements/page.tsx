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

export default function ReplacementsPage() {
  return (
    <SiteLayout>
      <Hero
        title="Roof Replacement Services"
        description="Full roof replacement solutions with premium materials, expert installation, and superior warranties to protect your home for decades to come."
        ctaText="Schedule Consultation"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#options"
        heroImage="https://images.unsplash.com/photo-1588012886079-13020ef2f2f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                Complete Roof Replacement
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Transform Your Home with a New Roof
              </h2>
              <p className="text-xl text-slate-600">
                When repairs are no longer sufficient, our professional
                replacement services deliver durability, energy efficiency, and
                enhanced curb appeal.
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
                    src="https://images.unsplash.com/photo-1632763247220-3a0706133316?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600&h=400"
                    alt="Professional roof replacement"
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
                  When It&apos;s Time for a New Roof
                </h3>
                <p className="text-slate-600 mb-6">
                  Our expert team will help you determine if replacement is the
                  right choice. A full replacement is often more cost-effective
                  than ongoing repairs when your roof shows these signs of age
                  and damage.
                </p>
                <ul className="space-y-3">
                  {[
                    "Roof is 20+ years old with extensive wear",
                    "Multiple or persistent leaks throughout the roof",
                    "Significant storm or structural damage",
                    "Sagging roof deck or structural issues",
                    "Desire to upgrade for energy efficiency or aesthetics",
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

      {/* Roofing Options Section */}
      <section className="py-20 bg-slate-50" id="options">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
              Roofing Options
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Premium Material Choices
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Select from a variety of high-quality roofing materials to match
              your home&apos;s style and your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Option 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1532889673008-036038cba8a3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=250"
                  alt="Asphalt Shingles"
                  width={500}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  Asphalt Shingles
                </h3>
                <p className="text-slate-600 mb-4">
                  Our most popular and economical option, modern asphalt
                  shingles offer excellent durability, a wide range of colors
                  and styles, and reliable performance.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Lifespan</span>
                    <span className="font-medium">20-30 years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Cost</span>
                    <span className="font-medium">$$$</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Warranty</span>
                    <span className="font-medium">25-30 years</span>
                  </div>
                </div>
                <Link
                  href="/contact?service=replacement-asphalt"
                  className="inline-block w-full py-3 px-6 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>

            {/* Option 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-primary-100 ring-2 ring-primary-500"
            >
              <div className="bg-primary-600 text-white text-center py-2 font-semibold">
                Premium Choice
              </div>
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1598252976330-50d202e2837a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=250"
                  alt="Metal Roofing"
                  width={500}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  Metal Roofing
                </h3>
                <p className="text-slate-600 mb-4">
                  Exceptional durability meets energy efficiency with our metal
                  roofing options. Available in multiple styles and colors to
                  complement any architectural design.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Lifespan</span>
                    <span className="font-medium">40-70 years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Cost</span>
                    <span className="font-medium">$$$$</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Warranty</span>
                    <span className="font-medium">30-50 years</span>
                  </div>
                </div>
                <Link
                  href="/contact?service=replacement-metal"
                  className="inline-block w-full py-3 px-6 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>

            {/* Option 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1591129841117-3adfd313e34f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=250"
                  alt="Tile Roofing"
                  width={500}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  Tile Roofing
                </h3>
                <p className="text-slate-600 mb-4">
                  Classic elegance meets unmatched longevity with our clay and
                  concrete tile options. Perfect for distinctive architectural
                  styles and extreme weather conditions.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Lifespan</span>
                    <span className="font-medium">50+ years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Cost</span>
                    <span className="font-medium">$$$$$</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Warranty</span>
                    <span className="font-medium">Lifetime</span>
                  </div>
                </div>
                <Link
                  href="/contact?service=replacement-tile"
                  className="inline-block w-full py-3 px-6 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </div>
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
              The Replacement Process
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Our streamlined approach ensures a smooth and efficient roof
              replacement from start to finish
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
                Consultation & Assessment
              </h3>
              <p className="text-slate-600">
                We conduct a thorough evaluation of your current roof, discuss
                your goals and preferences, and provide a comprehensive proposal
                with material options and pricing.
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
                Planning & Preparation
              </h3>
              <p className="text-slate-600">
                We schedule your project, order materials, secure any necessary
                permits, and coordinate all logistics to ensure minimal
                disruption to your daily life.
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
                Old Roof Removal
              </h3>
              <p className="text-slate-600">
                Our team carefully removes the existing roofing materials,
                inspects the underlying structure for any damage, and prepares a
                clean surface for your new roof.
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
                Structural Repairs
              </h3>
              <p className="text-slate-600">
                If we discover any damaged decking or structural issues, we make
                necessary repairs to ensure a solid foundation for your new
                roofing system.
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
                New Roof Installation
              </h3>
              <p className="text-slate-600">
                Our certified installers apply new underlayment, flashing, and
                your chosen roofing material according to manufacturer
                specifications and industry best practices.
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
                Final Inspection & Cleanup
              </h3>
              <p className="text-slate-600">
                We thoroughly inspect the completed roof, clean up all debris,
                remove all equipment, and walk you through your new roof&apos;s
                features and warranty information.
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
              Ready to transform your home with a new roof?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contact us today for a free consultation and detailed quote for
              your roof replacement project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?service=replacement"
                className="inline-flex items-center justify-center bg-white hover:bg-opacity-90 text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Schedule Consultation
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
