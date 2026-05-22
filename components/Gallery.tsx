"use client";
import { motion } from "framer-motion";
import {
  IconBuildingCastle,
  IconFlower,
  IconHeart,
  IconChefHat,
  IconUsers,
  IconStar,
  IconCheck,
  IconPhone,
  IconArrowRight,
} from "@tabler/icons-react";

const photos = [
  { label: "Royal Durbar — Grand Setup", icon: IconBuildingCastle, gradient: "from-rose-500 to-pink-500" },
  { label: "Garden Lawn — Fairy Lights", icon: IconFlower, gradient: "from-emerald-500 to-teal-500" },
  { label: "Floral Mandap", icon: IconFlower, gradient: "from-pink-500 to-rose-400" },
  { label: "Bridal Suite", icon: IconHeart, gradient: "from-amber-500 to-orange-400" },
  { label: "Catering Spread", icon: IconChefHat, gradient: "from-orange-500 to-amber-400" },
  { label: "Sangeet Night", icon: IconStar, gradient: "from-purple-500 to-pink-500" },
  { label: "Reception Décor", icon: IconCheck, gradient: "from-yellow-400 to-pink-500" },
  { label: "Garden Wedding", icon: IconFlower, gradient: "from-green-500 to-emerald-400" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-white to-rose-50/30" id="gallery">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-rose-700 font-bold text-xs uppercase tracking-widest">Moments</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-5"
          >
            From Our Wedding Albums
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            500+ weddings, each one unique — beautifully captured at The Grand Mahal.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {photos.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, ease: "easeOut" as const }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="mb-4"
                  >
                    <Icon
                      size={48}
                      className="text-white/90 drop-shadow-lg"
                      stroke={1.5}
                    />
                  </motion.div>

                  {/* Label */}
                  <p className="text-white font-serif font-bold text-sm leading-snug drop-shadow-lg">
                    {p.label}
                  </p>
                </div>

                {/* Border Glow */}
                <motion.div
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="absolute inset-0 rounded-3xl border-2 border-white/30 pointer-events-none group-hover:border-white/50 transition-all"
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-center"
        >
          <motion.a
            href="https://wa.me/919876543210?text=Hi%2C%20can%20I%20see%20more%20photos%20of%20The%20Grand%20Mahal%3F"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-10 py-4 rounded-full font-bold text-base shadow-lg shadow-rose-600/40 hover:shadow-rose-600/60 transition-all"
          >
            {/* Shimmer overlay */}
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />

            {/* Content */}
            <span className="relative flex items-center gap-3">
              <IconPhone size={20} stroke={2.5} />
              Request Full Gallery
              <IconArrowRight size={18} stroke={2.5} />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
