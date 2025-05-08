"use client";

import { motion } from "framer-motion";

export default function MinimalPage() {
  return (
    <div className="p-12">
      <h1 className="text-3xl font-bold mb-4">Minimal Page</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-4 bg-blue-100 rounded"
      >
        Testing framer-motion with minimal dependencies.
      </motion.div>
    </div>
  );
}
