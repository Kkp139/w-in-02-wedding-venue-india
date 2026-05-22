"use client";
import { motion } from "framer-motion";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hi%20Grand%20Mahal%2C%20I%27d%20like%20to%20check%20availability%20for%20my%20wedding."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0, x: 40 }}
      animate={{ scale: 1, opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 18, delay: 1 }}
      whileHover={{ scale: 1.15, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-8 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-600 via-emerald-500 to-green-600 shadow-2xl shadow-green-600/50 hover:shadow-green-600/70 transition-all cursor-pointer"
      aria-label="WhatsApp"
    >
      {/* Pulsing ring */}
      <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute w-16 h-16 rounded-full bg-green-400/30 group-hover:bg-green-400/40"
      />

      {/* Inner glow */}
      <motion.span
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute w-14 h-14 rounded-full border-2 border-green-300/50"
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 10 }}
        className="relative z-10"
      >
        <IconBrandWhatsapp
          size={32}
          className="text-white drop-shadow-lg"
          stroke={2}
        />
      </motion.div>

      {/* Shimmer overlay on hover */}
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        whileHover={{ opacity: 1, x: "100%" }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
      />

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute right-20 bg-gray-900 text-white text-sm font-bold px-4 py-2 rounded-lg whitespace-nowrap pointer-events-none"
      >
        Chat with us
        <motion.div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </motion.div>
    </motion.a>
  );
}
