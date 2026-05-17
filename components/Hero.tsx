"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient simulating a lush venue */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a00] via-[#3d0f1a] to-[#1a0518]" />
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-rose-400 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" as const }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-rose-400" />
            <span className="text-rose-300 text-sm tracking-[0.3em] uppercase font-medium">Ahmedabad&apos;s Premier Wedding Destination</span>
            <div className="h-px w-12 bg-rose-400" />
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your Dream
          <span className="block text-rose-400">Wedding Awaits</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
          className="text-rose-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Celebrate love in grandeur at The Grand Mahal — Ahmedabad&apos;s most exquisite wedding venue. 3 stunning halls, lush open lawns, world-class catering and complete wedding management for 100 to 2,000 guests.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" as const }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="https://wa.me/919876543210?text=Hi%20Grand%20Mahal%2C%20I%20want%20to%20check%20wedding%20date%20availability." target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20bc5a] text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg">
            📲 Check Date Availability
          </a>
          <a href="#venues"
            className="flex items-center justify-center gap-2 border-2 border-rose-400 text-rose-300 hover:bg-rose-400 hover:text-white px-8 py-4 rounded-full font-bold text-base transition-all">
            Explore Venues
          </a>
        </motion.div>

        {/* Quick stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" as const }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { v: "500+", l: "Weddings Hosted" },
            { v: "2,000", l: "Guest Capacity" },
            { v: "15+", l: "Years of Excellence" },
            { v: "4.9★", l: "Google Rating" },
          ].map(s => (
            <div key={s.l} className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-4 border border-white/10">
              <div className="text-2xl font-bold text-rose-300">{s.v}</div>
              <div className="text-xs text-rose-200">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
