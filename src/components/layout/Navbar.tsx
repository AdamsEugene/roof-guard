"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Initial check on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const logoTextColor = scrolled ? "#0F172A" : "#FFFFFF";
  const linkHoverColor = scrolled
    ? "hover:text-primary-600"
    : "hover:text-white/80";
  const linkColor = scrolled ? "#475569" : "rgba(255, 255, 255, 0.9)";
  const logoColor = scrolled ? "#2563EB" : "#FFFFFF";

  // Determine if we're on a page with a gradient hero background
  const hasHeroGradient = [
    "/",
    "/services",
    "/projects",
    "/about",
    "/contact",
    "/dashboard",
    "/payments",
    "/profile",
    "/chat",
  ].includes(pathname);

  // Function to check if a nav item is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  // Active link styles based on scroll state
  const getActiveLinkStyles = (path: string) => {
    const active = isActive(path);

    if (active) {
      return scrolled
        ? { color: "#2563EB", fontWeight: "600" }
        : { color: "#FFFFFF", fontWeight: "600" };
    }

    return { color: linkColor };
  };

  // Active link class based on scroll state
  const getActiveLinkClass = (path: string) => {
    const active = isActive(path);

    if (active) {
      return scrolled
        ? "text-primary-600 font-semibold relative after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-primary-600 after:rounded-full"
        : "text-white font-semibold relative after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full";
    }

    return `transition-colors ${linkHoverColor}`;
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm border-b border-slate-200"
          : hasHeroGradient
          ? "bg-gradient-to-r from-primary-600 to-primary-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span
            style={{ color: logoColor }}
            className="transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </span>
          <span
            className="font-display text-xl font-bold transition-colors duration-300"
            style={{ color: logoTextColor }}
          >
            RoofGuard
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/services"
            className={`text-sm font-medium ${getActiveLinkClass("/services")}`}
            style={getActiveLinkStyles("/services")}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className={`text-sm font-medium ${getActiveLinkClass("/projects")}`}
            style={getActiveLinkStyles("/projects")}
          >
            How It Works
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium ${getActiveLinkClass("/about")}`}
            style={getActiveLinkStyles("/about")}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium ${getActiveLinkClass("/contact")}`}
            style={getActiveLinkStyles("/contact")}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className={`text-sm font-medium transition-colors ${linkHoverColor}`}
            style={{ color: linkColor }}
          >
            Log In
          </Link>
          <Link
            href="/register"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              scrolled
                ? "bg-primary-600 text-white hover:bg-primary-700"
                : "bg-white text-primary-700 hover:bg-white/90"
            }`}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`md:hidden p-2 rounded-md ${
            scrolled ? "hover:bg-slate-100" : "hover:bg-white/10"
          }`}
          style={{ color: linkColor }}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className={`px-4 pt-2 pb-4 space-y-2 ${
              scrolled ? "bg-white border-b border-slate-200" : "bg-primary-700"
            }`}
          >
            <Link
              href="/services"
              className={`block py-2 text-base font-medium ${
                isActive("/services") ? "font-semibold" : ""
              }`}
              style={getActiveLinkStyles("/services")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={`block py-2 text-base font-medium ${
                isActive("/projects") ? "font-semibold" : ""
              }`}
              style={getActiveLinkStyles("/projects")}
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className={`block py-2 text-base font-medium ${
                isActive("/about") ? "font-semibold" : ""
              }`}
              style={getActiveLinkStyles("/about")}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`block py-2 text-base font-medium ${
                isActive("/contact") ? "font-semibold" : ""
              }`}
              style={getActiveLinkStyles("/contact")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Link
                href="/login"
                className={`px-4 py-2 rounded-md text-sm font-medium text-center transition-all ${
                  scrolled
                    ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    : "bg-primary-600 text-white hover:bg-primary-700 border border-white/20"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/register"
                className={`px-4 py-2 rounded-md text-sm font-medium text-center transition-all ${
                  scrolled
                    ? "bg-primary-600 text-white hover:bg-primary-700"
                    : "bg-white text-primary-700 hover:bg-white/90"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
