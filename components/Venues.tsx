"use client";
import { motion } from "framer-motion";
import { IconUsers, IconRuler2, IconCheck, IconArrowRight } from "@tabler/icons-react";

const venues = [
  {
    name: "The Royal Durbar",
    type: "Grand Banquet Hall",
    capacity: "500–1,500 guests",
    area: "15,000 sq ft · AC",
    features: ["Chandelier lighting","Full AV setup","Stage & mandap area","Bridal suite","Valet parking"],
    bestFor: "Grand weddings, Receptions",
    price: "₹3.5L",
    accentGradient: "from-rose-600 via-pink-500 to-rose-500",
    orbColor: "from-rose-100 to-pink-100",
  },
  {
    name: "The Garden Lawn",
    type: "Open-Air Venue",
    capacity: "200–2,000 guests",
    area: "25,000 sq ft · Open Air",
    features: ["Natural garden setting","Fairy light décor","Flexible layout","Catering tent","Monsoon backup hall"],
    bestFor: "Outdoor weddings, Sangeet",
    price: "₹2L",
    accentGradient: "from-emerald-600 via-teal-500 to-emerald-500",
    orbColor: "from-emerald-100 to-teal-100",
  },
  {
    name: "The Ivory Suite",
    type: "Intimate Banquet",
    capacity: "100–350 guests",
    area: "5,000 sq ft · AC",
    features: ["Intimate ambience","Pre-function area","Private bridal room","Modern AV","Perfect for small families"],
    bestFor: "Intimate weddings, Engagements",
    price: "₹1.2L",
    accentGradient: "from-amber-600 via-orange-500 to-amber-500",
    orbColor: "from-amber-100 to-orange-100",
  },
];

export default function Venues() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-white to-rose-50/30" id="venues">
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
            <span className="text-rose-700 font-bold text-xs uppercase tracking-widest">Our Spaces</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-5 leading-tight"
          >
            Stunning Venues for Every Celebration
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Three distinct spaces — from intimate gatherings to grand celebrations of 2,000 guests.
          </motion.p>
        </motion.div>

        {/* Venue Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {venues.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" as const }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-pink-50 shadow-xl hover:shadow-2xl border border-white/80"
            >
              {/* Gradient top border */}
              <div className={`h-2 w-full bg-gradient-to-r ${v.accentGradient} group-hover:via-pink-400 transition-all duration-500`} />

              {/* Decorative orb */}
              <div className={`absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br ${v.orbColor} rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2 group-hover:text-rose-700 transition-colors">
                    {v.name}
                  </h3>
                  <p className="text-rose-600 font-bold text-xs uppercase tracking-widest">
                    ✦ {v.type} ✦
                  </p>
                </div>

                {/* Key Details with Icons */}
                <div className="space-y-3 mb-8 pb-8 border-b border-rose-100">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <IconUsers className="w-5 h-5 text-rose-600 flex-shrink-0" stroke={2.5} />
                    <span className="text-gray-700 font-medium">{v.capacity}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <IconRuler2 className="w-5 h-5 text-rose-600 flex-shrink-0" stroke={2.5} />
                    <span className="text-gray-700 font-medium">{v.area}</span>
                  </motion.div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {v.features.map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + idx * 0.05 }}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <IconCheck className="w-4 h-4 text-rose-600 flex-shrink-0" stroke={3} />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* Best For */}
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-6">
                  Best for: <span className="text-gray-900 font-semibold">{v.bestFor}</span>
                </p>

                {/* Price + CTA */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">From</p>
                    <p className="text-2xl font-serif font-bold text-gray-900">{v.price}</p>
                  </div>

                  {/* Premium Enquire Button */}
                  <motion.a
                    href="https://wa.me/919876543210?text=Hi%20Grand%20Mahal%2C%20I%20want%20to%20check%20wedding%20date%20availability."
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-sm shadow-lg shadow-rose-600/40 hover:shadow-rose-600/60 transition-all"
                  >
                    {/* Shimmer overlay */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                    <span className="relative flex items-center gap-2">
                      Enquire <IconArrowRight size={16} stroke={2.5} />
                    </span>
                  </motion.a>
                </div>
              </div>

              {/* Border glow on hover */}
              <motion.div
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className="absolute inset-0 rounded-3xl border border-rose-200 pointer-events-none group-hover:shadow-[inset_0_0_20px_rgba(236,72,153,0.1)] transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
