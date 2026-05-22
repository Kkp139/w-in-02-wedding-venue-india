"use client";
import { motion } from "framer-motion";
import { IconArrowRight, IconHeart, IconStar, IconUsers, IconBuildingCastle } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0a00] via-[#3d0f1a] to-[#1a0518]">
      {/* Premium background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-rose-600 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-amber-600 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid overlay for sophistication */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Badge with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-rose-400" />
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-rose-300 text-xs tracking-[0.3em] uppercase font-bold"
          >
            ✦ Ahmedabad's Most Celebrated Venue ✦
          </motion.span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-rose-400" />
        </motion.div>

        {/* Main headline with serif font */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
          className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight tracking-tight"
        >
          Your Dream
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="block bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent"
          >
            Wedding Awaits
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
          className="text-rose-100/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Celebrate love in grandeur at <span className="font-semibold text-rose-200">The Grand Mahal</span> — Ahmedabad's most exquisite wedding venue. 3 stunning halls, lush open lawns, world-class catering and complete wedding management for 100 to 2,000 guests.
        </motion.p>

        {/* Premium CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
          className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
        >
          {/* WhatsApp CTA - Glass morphism */}
          <motion.a
            href="https://wa.me/919876543210?text=Hi%20Grand%20Mahal%2C%20I%20want%20to%20check%20wedding%20date%20availability."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden px-8 py-4 rounded-full text-white font-bold text-base flex items-center justify-center gap-2 transition-all shadow-xl shadow-green-600/40"
          >
            {/* Glass morphism background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-green-500 opacity-90 backdrop-blur-sm" />

            {/* Shimmer on hover */}
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />

            {/* Border glow */}
            <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors" />

            {/* Content */}
            <span className="relative flex items-center gap-2">
              Check Date Availability
              <IconArrowRight size={18} stroke={2.5} />
            </span>
          </motion.a>

          {/* Scroll CTA - Outlined */}
          <motion.a
            href="#venues"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 transition-all border-2 border-rose-400 text-rose-300 hover:text-white"
          >
            {/* Gradient background on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-rose-600/50 to-pink-600/50 rounded-full"
            />
            <span className="relative flex items-center gap-2">
              Explore Venues
              <IconArrowRight size={18} stroke={2.5} />
            </span>
          </motion.a>
        </motion.div>

        {/* Premium stats with icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" as const }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto"
        >
          {[
            { icon: IconHeart, value: "500+", label: "Weddings Hosted" },
            { icon: IconUsers, value: "2,000", label: "Guest Capacity" },
            { icon: IconBuildingCastle, value: "15+", label: "Years of Excellence" },
            { icon: IconStar, value: "4.9★", label: "Google Rating" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(244, 63, 94, 0.2)" }}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl px-5 py-6 border border-white/20 hover:border-rose-400/50 transition-all"
              >
                <div className="flex justify-center mb-3">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="text-rose-400 group-hover:text-rose-300 transition-colors"
                  >
                    <Icon size={28} stroke={2} />
                  </motion.div>
                </div>
                <div className="text-3xl font-serif font-bold text-rose-300 group-hover:text-rose-200 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs text-rose-200/60 mt-2 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <span className="text-rose-300/40 text-xs uppercase tracking-widest">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
