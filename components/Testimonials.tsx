"use client";
import { motion } from "framer-motion";
import { IconStar, IconQuote } from "@tabler/icons-react";

const testimonials = [
  { name: "Priya & Rohan Mehta", event: "Wedding Reception — 800 guests", rating: 5, text: "Grand Mahal made our dream wedding a reality. The decor was breathtaking, food was exceptional and our event manager Pooja was available at every step. Our guests still talk about it!" },
  { name: "Sunita Patel (Mother of Bride)", event: "Wedding + Sangeet — 1,200 guests", rating: 5, text: "We booked the Gold package and it exceeded every expectation. The mandap was beautiful, catering was loved by all 1,200 guests, and everything ran on time. Highly recommended!" },
  { name: "Amit & Kavya Shah", event: "Intimate Wedding — 250 guests", rating: 5, text: "We wanted something intimate and elegant. The Ivory Suite was perfect. Personal event manager, lovely floral decor, delicious Jain food — exactly what we dreamed of." },
  { name: "Rakesh Desai (Father of Groom)", event: "3-Day Wedding Event", rating: 5, text: "Used all three venues for mehendi, sangeet and wedding. Platinum package was worth every rupee. Coordination was flawless. The Grand Mahal is in a class of its own." },
  { name: "Neha & Vikram Joshi", event: "Garden Wedding — 600 guests", rating: 5, text: "Our garden wedding under the stars was absolutely magical. The fairy lights, the weather cooperated perfectly, and the catering was outstanding. Perfect memories!" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-white to-rose-50/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6"
          >
            Happy Couples
          </motion.h2>

          {/* Rating Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <IconStar className="w-6 h-6 text-amber-400" fill="currentColor" stroke={0} />
                </motion.div>
              ))}
            </div>
            <span className="text-gray-700 font-semibold text-lg">4.9/5</span>
            <span className="text-gray-600">500+ Weddings</span>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-pink-50 border border-white/80 shadow-lg hover:shadow-xl transition-all"
            >
              {/* Decorative orb */}
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative p-6">
                {/* Quote Icon */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="mb-4"
                >
                  <IconQuote className="w-8 h-8 text-rose-400/60" stroke={1.5} />
                </motion.div>

                {/* Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-5 font-light italic">
                  "{t.text}"
                </p>

                {/* Stars */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  className="flex items-center gap-1 mb-4"
                >
                  {[...Array(t.rating)].map((_, j) => (
                    <IconStar key={j} className="w-4 h-4 text-amber-400" fill="currentColor" stroke={0} />
                  ))}
                </motion.div>

                {/* Divider */}
                <div className="border-t border-rose-100 pt-4">
                  <h4 className="font-serif font-bold text-gray-900 mb-1">{t.name}</h4>
                  <p className="text-rose-600 text-xs font-medium">{t.event}</p>
                </div>
              </div>

              {/* Border glow */}
              <motion.div
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className="absolute inset-0 rounded-2xl border border-rose-200 pointer-events-none group-hover:shadow-[inset_0_0_20px_rgba(236,72,153,0.1)] transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
