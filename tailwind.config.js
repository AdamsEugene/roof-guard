/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",

      // Main brand colors
      primary: {
        DEFAULT: "#2563EB", // Bright blue - brand primary
        50: "#EFF6FF",
        100: "#DBEAFE",
        200: "#BFDBFE",
        300: "#93C5FD",
        400: "#60A5FA",
        500: "#3B82F6",
        600: "#2563EB", // Our primary color
        700: "#1D4ED8",
        800: "#1E40AF",
        900: "#1E3A8A",
        950: "#172554",
      },
      // Accent color - derived from roofing materials
      terracotta: {
        DEFAULT: "#E97451", // Earthy roof tile color
        50: "#FDF8F6",
        100: "#F9E8E3",
        200: "#F4D1C7",
        300: "#EFB7A9",
        400: "#EE968A",
        500: "#E97451", // Main terracotta
        600: "#D25A39",
        700: "#B44730",
        800: "#933826",
        900: "#762D1F",
      },
      // Neutral slate colors for UI elements
      slate: {
        DEFAULT: "#64748B",
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
        950: "#020617",
      },
      // Weather-inspired colors
      sky: {
        DEFAULT: "#0EA5E9",
        50: "#F0F9FF",
        100: "#E0F2FE",
        200: "#BAE6FD",
        300: "#7DD3FC",
        400: "#38BDF8",
        500: "#0EA5E9",
        600: "#0284C7",
        700: "#0369A1",
        800: "#075985",
        900: "#0C4A6E",
        950: "#082F49",
      },
      // Warning/alert color for notifications
      amber: {
        DEFAULT: "#F59E0B",
        50: "#FFFBEB",
        100: "#FEF3C7",
        200: "#FDE68A",
        300: "#FCD34D",
        400: "#FBBF24",
        500: "#F59E0B",
        600: "#D97706",
        700: "#B45309",
        800: "#92400E",
        900: "#78350F",
        950: "#451A03",
      },
      // Success color
      emerald: {
        DEFAULT: "#10B981",
        50: "#ECFDF5",
        100: "#D1FAE5",
        200: "#A7F3D0",
        300: "#6EE7B7",
        400: "#34D399",
        500: "#10B981",
        600: "#059669",
        700: "#047857",
        800: "#065F46",
        900: "#064E3B",
        950: "#022C22",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-playfair)"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        elegant:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        card: "0px 4px 12px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
