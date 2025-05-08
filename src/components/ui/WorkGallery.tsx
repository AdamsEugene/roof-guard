"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Define the interface for a work sample
interface WorkSample {
  id: number;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
}

// Sample data with Unsplash images that we know exist
const WORK_SAMPLES: WorkSample[] = [
  {
    id: 1,
    title: "Residential Roof Replacement",
    category: "Replacement",
    description:
      "Complete shingle replacement for a 2,500 sq ft home in San Francisco",
    imageSrc:
      "https://images.unsplash.com/photo-1622173073050-5e9423be4a6d?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Commercial Building Repair",
    category: "Repair",
    description: "Leak repair and flashing installation for an office building",
    imageSrc:
      "https://images.unsplash.com/photo-1632759145357-b9e89f5347bb?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Storm Damage Restoration",
    category: "Restoration",
    description: "Emergency repairs after severe wind damage to multiple homes",
    imageSrc:
      "https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1169&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Solar Panel Installation",
    category: "Installation",
    description:
      "Solar roof installation with integrated panels for energy efficiency",
    imageSrc:
      "https://images.unsplash.com/photo-1587162146766-e06b1189b907?q=80&w=1156&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Metal Roof Installation",
    category: "Installation",
    description: "Modern metal roofing for a contemporary home design",
    imageSrc:
      "https://images.unsplash.com/photo-1590522665925-d5be8b591fe4?q=80&w=1169&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Tile Roof Maintenance",
    category: "Maintenance",
    description: "Regular maintenance and cleaning of a tile roof system",
    imageSrc:
      "https://images.unsplash.com/photo-1581404777173-c9706053aebf?q=80&w=1119&auto=format&fit=crop",
  },
];

interface WorkGalleryProps {
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  maxItems?: number;
  compact?: boolean;
}

export default function WorkGallery({
  title = "Our Recent Projects",
  subtitle = "Browse through our portfolio of successful roofing projects across residential and commercial properties.",
  showFilters = true,
  maxItems = 6,
  compact = false,
}: WorkGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [filteredItems, setFilteredItems] = useState<WorkSample[]>([]);
  const [selectedItem, setSelectedItem] = useState<WorkSample | null>(null);

  // Get unique categories for filters
  const categories = [
    "All",
    ...Array.from(new Set(WORK_SAMPLES.map((item) => item.category))),
  ];

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(WORK_SAMPLES.slice(0, maxItems));
    } else {
      setFilteredItems(
        WORK_SAMPLES.filter((item) => item.category === activeFilter).slice(
          0,
          maxItems
        )
      );
    }
  }, [activeFilter, maxItems]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full">
      <div className={`text-center ${compact ? "mb-8" : "mb-16"}`}>
        <h2
          className={`${
            compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
          } font-bold font-display tracking-tight text-slate-900`}
        >
          {title}
        </h2>
        <p
          className={`mt-4 ${
            compact ? "text-lg" : "text-xl"
          } text-slate-600 max-w-3xl mx-auto`}
        >
          {subtitle}
        </p>
      </div>

      {showFilters && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-primary-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-0 right-0 bg-primary-600 text-white px-3 py-1 text-sm font-medium">
                {item.category}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 text-slate-900">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for expanded view */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={selectedItem.imageSrc}
                alt={selectedItem.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                onClick={() => setSelectedItem(null)}
                aria-label="Close image preview"
              >
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
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  {selectedItem.title}
                </h3>
                <span className="bg-primary-600 text-white px-3 py-1 text-sm font-medium rounded">
                  {selectedItem.category}
                </span>
              </div>
              <p className="text-slate-600">{selectedItem.description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
