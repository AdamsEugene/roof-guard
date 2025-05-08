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

export default function EmergencyPage() {
  return (
    <SiteLayout>
      <Hero
        title="Emergency Roof Services"
        description="24/7 rapid response for roof emergencies including storm damage, leaks, fallen trees, and other urgent situations requiring immediate attention."
        ctaText="Call Emergency Line"
        ctaLink="tel:800-555-7663"
        secondaryCtaText="Request Service"
        secondaryCtaLink="/contact?service=emergency"
        heroImage="https://images.unsplash.com/photo-1618673747378-7e0d3561371a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Emergency Call Section */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border-l-4 border-red-600">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                      Roof Emergency?
                    </h3>
                    <p className="text-slate-600">
                      Call our 24/7 emergency hotline
                    </p>
                  </div>
                </div>
                <a
                  href="tel:800-555-7663"
                  className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (800) 555-ROOF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                Rapid Response
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                When Every Minute Matters
              </h2>
              <p className="text-xl text-slate-600">
                Our emergency response team is ready 24/7/365 to secure your
                home and prevent further damage when disaster strikes.
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
                    src="https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600&h=400"
                    alt="Emergency roof repair"
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
                  Immediate Protection When You Need It Most
                </h3>
                <p className="text-slate-600 mb-6">
                  Roof emergencies can&apos;t wait. Our specialized team
                  responds quickly to minimize damage to your home&apos;s
                  structure and interior, protecting your most valuable
                  investment.
                </p>
                <ul className="space-y-3">
                  {[
                    "Average response time under 2 hours",
                    "Emergency tarping and water mitigation",
                    "Structural stabilization and securing",
                    "Temporary repairs to prevent further damage",
                    "Documentation for insurance claims",
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

      {/* Emergency Services Section */}
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
              Emergency Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Comprehensive Emergency Solutions
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              We handle all types of roofing emergencies with the urgency they
              demand
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
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Storm Damage Response
              </h3>
              <p className="text-slate-600">
                Rapid assessment and emergency repairs after high winds, hail,
                or severe weather events damage your roof, including temporary
                protection and permanent repair solutions.
              </p>
            </motion.div>

            {/* Service 2 */}
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Active Leak Mitigation
              </h3>
              <p className="text-slate-600">
                Immediate intervention for active roof leaks to stop water
                infiltration, prevent structural damage, and protect your
                home&apos;s interior and belongings.
              </p>
            </motion.div>

            {/* Service 3 */}
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
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Emergency Tarping
              </h3>
              <p className="text-slate-600">
                Professional installation of heavy-duty tarps and temporary
                coverings to provide immediate protection for damaged roof areas
                until permanent repairs can be made.
              </p>
            </motion.div>

            {/* Service 4 */}
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
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Tree & Debris Removal
              </h3>
              <p className="text-slate-600">
                Safe removal of fallen trees, branches, and debris from your
                roof, followed by damage assessment and necessary emergency
                repairs.
              </p>
            </motion.div>

            {/* Service 5 */}
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Insurance Assistance
              </h3>
              <p className="text-slate-600">
                Thorough documentation of emergency damage, detailed estimates,
                and expert guidance to help streamline your insurance claim
                process.
              </p>
            </motion.div>

            {/* Service 6 */}
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Water Damage Mitigation
              </h3>
              <p className="text-slate-600">
                Immediate interior water extraction, drying, and prevention of
                secondary damage to minimize the impact of roof leaks on your
                home&apos;s interior.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Process Section */}
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
              Our Response Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              What to Expect When You Call
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Our streamlined emergency response process is designed for speed
              and effectiveness
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-red-100"></div>

              {/* Step 1 */}
              <motion.div
                className="relative mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 order-2 md:order-1 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Immediate Response
                    </h3>
                    <p className="text-slate-600">
                      Your call is answered by an emergency specialist who
                      gathers critical information about your situation to
                      dispatch the appropriate response team.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 relative">
                      1
                    </div>
                  </div>
                  <div className="flex-1 order-3 hidden md:block"></div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="relative mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 order-2 md:order-1 hidden md:block"></div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 relative">
                      2
                    </div>
                  </div>
                  <div className="flex-1 order-3 md:pl-12">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Rapid Dispatch
                    </h3>
                    <p className="text-slate-600">
                      Our closest emergency crew is dispatched to your location,
                      typically arriving within 2 hours with all equipment
                      needed for immediate intervention.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="relative mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 order-2 md:order-1 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Assessment & Stabilization
                    </h3>
                    <p className="text-slate-600">
                      Upon arrival, our team quickly assesses the situation,
                      takes steps to prevent further damage, and secures your
                      property with tarps or temporary repairs.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 relative">
                      3
                    </div>
                  </div>
                  <div className="flex-1 order-3 hidden md:block"></div>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                className="relative mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 order-2 md:order-1 hidden md:block"></div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 relative">
                      4
                    </div>
                  </div>
                  <div className="flex-1 order-3 md:pl-12">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Documentation & Planning
                    </h3>
                    <p className="text-slate-600">
                      We thoroughly document all damage for insurance purposes
                      and create a comprehensive plan for permanent repairs once
                      the emergency is stabilized.
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
                      Follow-Up & Permanent Solutions
                    </h3>
                    <p className="text-slate-600">
                      After the emergency is addressed, we coordinate with you
                      and your insurance for permanent, high-quality repairs to
                      restore your roof to optimal condition.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 relative">
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We&apos;re ready when you need us most
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Don&apos;t wait – roof emergencies require immediate attention to
              prevent extensive damage to your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:800-555-7663"
                className="inline-flex items-center justify-center bg-white hover:bg-opacity-90 text-red-600 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Emergency Line
              </a>
              <Link
                href="/contact?service=emergency"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Request Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
