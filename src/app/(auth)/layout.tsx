"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Roof shingle pattern */}
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 opacity-[0.03] rotate-12"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.03, rotate: 12 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/roof-pattern.svg"
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* House silhouette */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-40 opacity-[0.04]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.04, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Image
            src="/images/houses-silhouette.svg"
            alt=""
            width={1920}
            height={200}
            className="w-full h-full object-contain object-bottom"
          />
        </motion.div>

        {/* Animated roof tile falling slowly */}
        <motion.div
          className="absolute top-20 left-10 w-10 h-10 opacity-[0.08]"
          initial={{ y: -100, x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: 700,
            x: [0, 30, -20, 10, 0],
            rotate: 360,
            opacity: [0, 0.08, 0.08, 0.08, 0],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        >
          <Image
            src="/images/roof-tile.svg"
            alt=""
            width={50}
            height={50}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Another tile with different animation */}
        <motion.div
          className="absolute top-40 right-20 w-8 h-8 opacity-[0.06]"
          initial={{ y: -50, rotate: 45, opacity: 0 }}
          animate={{
            y: 500,
            rotate: -180,
            opacity: [0, 0.06, 0.06, 0.06, 0],
          }}
          transition={{
            duration: 15,
            delay: 5,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Image
            src="/images/roof-tile.svg"
            alt=""
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Multiple smaller tiles scattered */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 opacity-[0.05]"
            style={{
              top: `${Math.random() * 60 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            initial={{ y: -30, opacity: 0 }}
            animate={{
              y: 100,
              rotate: Math.random() > 0.5 ? 360 : -360,
              opacity: [0, 0.05, 0.05, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              delay: i * 3,
              ease: "easeIn",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <Image
              src="/images/roof-tile.svg"
              alt=""
              width={30}
              height={30}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <header className="py-4 px-4 sm:px-6 lg:px-8 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="w-10 h-10 relative"
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-primary-600 rounded-lg rotate-6"></div>
              <div className="absolute inset-0 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold">
                R
              </div>
            </motion.div>
            <span className="text-xl font-bold text-slate-900">RoofGuard</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6">
            <Link
              href="/services"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4 relative z-10">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-slate-500 border-t border-slate-200 bg-white/90 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} RoofGuard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
