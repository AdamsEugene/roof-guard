"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  heroImage?: string;
}

export default function Hero({
  title,
  description,
  ctaText = "Get Started",
  ctaLink = "/register",
  secondaryCtaText = "Learn More",
  secondaryCtaLink = "/about",
  heroImage,
}: HeroProps) {
  return (
    <section className="hero pt-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white relative">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={ctaLink}
                className="inline-flex items-center justify-center bg-white hover:bg-white/90 text-primary-600 font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                {ctaText}
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
              {secondaryCtaText && (
                <Link
                  href={secondaryCtaLink || "/about"}
                  className="inline-flex items-center justify-center bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {heroImage ? (
              <div className="relative w-full max-w-lg h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={heroImage}
                  alt="Roofing service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : (
              <div className="relative w-full max-w-lg h-64 md:h-96 rounded-xl overflow-hidden shadow-xl bg-primary-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-full h-full text-white/10"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64z" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-24 h-24 text-white/50"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          preserveAspectRatio="none"
          width="100%"
          height="50"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
