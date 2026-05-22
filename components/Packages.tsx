"use client";
import { motion } from "framer-motion";
import { IconCheck, IconArrowRight, IconSparkles } from "@tabler/icons-react";

const packages = [
  {
    name: "Silver Package",
    price: "₹3.5 Lakh",
    guests: "Up to 300 guests",
    popular: false,
    includes: ["Venue (Ivory Suite)","Basic floral décor","Catering — veg (3 items)","Lighting setup","DJ & sound system","4-hour slot"],
  },
  {
    name: "Gold Package",
    price: "₹7.5 Lakh",
    guests: "Up to 700 guests",
    popular: true,
    includes: ["Venue (Royal Durbar)","Premium floral décor","Catering — veg + non-veg (5 items)","Stage & mandap","Lighting + AV","Photography referral","8-hour slot","Bridal suite"],
  },
  {
    name: "Platinum Package",
    price: "₹15 Lakh+",
    guests: "Up to 2,000 guests",
    popular: false,
    includes: ["All 3 venues (3-day event)","Luxury décor & floral","Multi-cuisine catering","Mehendi, Sangeet, Wedding halls","Full AV & entertainment","Dedicated event manager","Custom mandap design","Complimentary honeymoon suite"],
  },
];

export default function Packages() {
  return (
    <section className="py-24 bg-gradient-to-b from-rose-50/50 via-white to-white" id="packages">
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
            <span className="text-rose-700 font-bold text-xs uppercase tracking-widest">All Inclusive</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-5"
          >
            Wedding Packages
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Stress-free weddings with everything included. Custom packages also available — we tailor to your vision.
          </motion.p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, ease: "easeOut" as const }}
              whileHover={p.popular ? { y: -12, boxShadow: "0 40px 80px rgba(236, 72, 153, 0.25)" } : { y: -4 }}
              className={`group relative overflow-hidden rounded-3xl transition-all ${
                p.popular
                  ? "bg-gradient-to-br from-gray-900 via-gray-800 to-rose-900 text-white shadow-2xl"
                  : "bg-gradient-to-br from-white via-white to-pink-50 border border-white/80 shadow-lg"
              }`}
            >
              {/* Decorative orbs */}
              {p.popular && (
                <>
                  <div className="absolute -right-24 -top-24 w-56 h-56 bg-gradient-to-br from-rose-600/30 to-pink-600/30 rounded-full blur-3xl" />
                  <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-gradient-to-tr from-pink-600/20 to-rose-600/20 rounded-full blur-3xl" />
                </>
              )}

              {/* Popular Badge */}
              {p.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg">
                    <IconSparkles size={14} stroke={2.5} />
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Content */}
              <div className="relative p-8">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.1 }}
                >
                  <h3 className={`font-serif font-bold text-2xl mb-2 ${p.popular ? "text-white" : "text-gray-900"}`}>
                    {p.name}
                  </h3>
                  <p className={`text-sm mb-4 ${p.popular ? "text-rose-200" : "text-gray-600"}`}>{p.guests}</p>
                </motion.div>

                {/* Price */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.15 }}
                  className="mb-8"
                >
                  <p className={`text-xs ${p.popular ? "text-rose-300" : "text-gray-500"} uppercase tracking-wider mb-1`}>
                    Starting Price
                  </p>
                  <p className={`text-4xl font-serif font-bold ${p.popular ? "text-white" : "text-gray-900"}`}>
                    {p.price}
                  </p>
                </motion.div>

                {/* Divider */}
                <div className={`h-px mb-8 ${p.popular ? "bg-rose-500/30" : "bg-rose-100"}`} />

                {/* Includes */}
                <ul className="space-y-3 mb-8">
                  {p.includes.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + 0.2 + idx * 0.05 }}
                      className={`flex items-start gap-3 text-sm ${p.popular ? "text-rose-100" : "text-gray-700"}`}
                    >
                      <IconCheck className={`w-5 h-5 flex-shrink-0 mt-0.5 ${p.popular ? "text-rose-400" : "text-rose-600"}`} stroke={2.5} />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="https://wa.me/919876543210?text=Hi%20Grand%20Mahal%2C%20I%27d%20like%20to%20know%20more%20about%20your%20wedding%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group/btn relative overflow-hidden w-full block text-center py-4 rounded-xl font-bold text-sm transition-all ${
                    p.popular
                      ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-600/40"
                      : "bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-rose-700 hover:to-rose-600"
                  }`}
                >
                  {/* Shimmer overlay */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    Get Quote <IconArrowRight size={18} stroke={2.5} />
                  </span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-sm"
        >
          All packages customisable · GST extra · Advance booking discounts available
        </motion.p>
      </div>
    </section>
  );
}
