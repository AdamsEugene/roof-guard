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

export default function SolarPage() {
  return (
    <SiteLayout>
      <Hero
        title="Solar Roof Installation"
        description="Harness the power of the sun with our expert solar roof installations, combining energy efficiency with superior roof protection."
        ctaText="Get Solar Quote"
        ctaLink="/contact?service=solar"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#benefits"
        heroImage="https://images.unsplash.com/photo-1611365892117-00d770df8a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                Clean Energy Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Transform Your Roof Into an Energy Source
              </h2>
              <p className="text-xl text-slate-600">
                Our integrated solar roof solutions provide clean energy while
                ensuring the structural integrity and weather protection of your
                home.
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
                    src="https://images.unsplash.com/photo-1592833258793-52489245d3f4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600&h=400"
                    alt="Solar roof installation"
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
                  Expert Solar Integration
                </h3>
                <p className="text-slate-600 mb-6">
                  Our team specializes in both roofing and solar technology,
                  ensuring proper installation that maintains roof integrity
                  while maximizing energy production.
                </p>
                <ul className="space-y-3">
                  {[
                    "Free solar assessment and energy analysis",
                    "Professional roof evaluation before installation",
                    "Customized system design for your home's needs",
                    "Seamless integration with your existing roof",
                    "Comprehensive warranty on both roof and solar components",
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

      {/* Benefits Section */}
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
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Why Choose Solar Roofing
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Discover the advantages of integrating solar technology with your
              roofing system
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Benefit 1 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Significant Energy Savings
              </h3>
              <p className="text-slate-600">
                Reduce or eliminate your electricity bills by generating your
                own clean energy, with potential savings of 50-90% on monthly
                utility costs.
              </p>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
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
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Increased Home Value
              </h3>
              <p className="text-slate-600">
                Solar installations can increase your property value by up to
                4%, making it both an environmental and financial investment in
                your home.
              </p>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
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
                Enhanced Roof Protection
              </h3>
              <p className="text-slate-600">
                Solar panels act as a protective layer for your roof, shielding
                it from weather elements and potentially extending its lifespan.
              </p>
            </motion.div>

            {/* Benefit 4 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Tax Incentives & Rebates
              </h3>
              <p className="text-slate-600">
                Take advantage of federal tax credits, state incentives, and
                local utility rebates that can significantly offset your initial
                investment.
              </p>
            </motion.div>

            {/* Benefit 5 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 9.5l3 3m0 0l-3 3m3-3H7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Energy Independence
              </h3>
              <p className="text-slate-600">
                Reduce your reliance on the power grid and protect yourself from
                rising utility costs and power outages with battery storage
                options.
              </p>
            </motion.div>

            {/* Benefit 6 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 p-6"
            >
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
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
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Environmental Impact
              </h3>
              <p className="text-slate-600">
                Reduce your carbon footprint significantly—a typical residential
                solar system offsets approximately 100,000 pounds of carbon
                dioxide over its lifetime.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solar Process Section */}
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
              The Solar Roof Installation Process
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Our streamlined approach ensures quality installation with minimal
              disruption
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
                Site Assessment & Design
              </h3>
              <p className="text-slate-600">
                We evaluate your roof&apos;s condition, sun exposure, and energy
                needs to design a customized solar solution that maximizes
                efficiency and aesthetics.
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
                Proposal & Planning
              </h3>
              <p className="text-slate-600">
                We provide a detailed proposal including system size, equipment
                specifications, energy production estimates, financial analysis,
                and available incentives.
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
                Permitting & Preparation
              </h3>
              <p className="text-slate-600">
                Our team handles all necessary permits, engineering documents,
                and utility company paperwork, ensuring compliance with local
                codes and regulations.
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
                Roof Preparation
              </h3>
              <p className="text-slate-600">
                We inspect and prepare your roof to ensure it&apos;s in optimal
                condition before installation, addressing any issues that could
                affect the system&apos;s performance.
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
                Installation & Wiring
              </h3>
              <p className="text-slate-600">
                Our certified installers mount the solar panels, install
                inverters, and complete all electrical connections following
                industry best practices and safety standards.
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
                Inspection & Activation
              </h3>
              <p className="text-slate-600">
                After final inspections and utility approval, we activate your
                system, provide comprehensive training on monitoring, and ensure
                everything is working perfectly.
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
              Ready to harness the power of solar energy?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Schedule your free solar assessment today and discover how much
              you could save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?service=solar"
                className="inline-flex items-center justify-center bg-white hover:bg-opacity-90 text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Get Your Solar Quote
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
