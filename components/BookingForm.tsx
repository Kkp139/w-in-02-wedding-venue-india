"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { IconPhone, IconMail, IconArrowRight } from "@tabler/icons-react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    venue: "",
  });
  const wa = `Hi%20Grand%20Mahal%2C%0AName%3A%20${encodeURIComponent(form.name)}%0AEvent%20Date%3A%20${encodeURIComponent(form.date)}%0AGuests%3A%20${encodeURIComponent(form.guests)}%0AVenue%20Interest%3A%20${encodeURIComponent(form.venue)}`;

  return (
    <section className="py-24 bg-gradient-to-b from-white via-white to-rose-50/30">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-rose-700 font-bold text-xs uppercase tracking-widest">
              Reserve Your Date
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4"
          >
            Check Date Availability
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Popular dates book out months in advance — check availability today.
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-pink-50 border border-white/80 shadow-2xl p-10 hover:shadow-3xl transition-all"
        >
          {/* Decorative orb */}
          <div className="absolute -right-24 -top-24 w-56 h-56 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />

          {/* Form Content */}
          <div className="relative">
            {/* Name & Phone Row */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <label className="block text-sm font-bold text-gray-900 mb-2.5">
                  Your Name *
                </label>
                <input
                  className="w-full border-2 border-gray-200 hover:border-rose-300 focus:border-rose-500 rounded-xl px-5 py-3.5 text-sm bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-bold text-gray-900 mb-2.5">
                  WhatsApp Number *
                </label>
                <input
                  className="w-full border-2 border-gray-200 hover:border-rose-300 focus:border-rose-500 rounded-xl px-5 py-3.5 text-sm bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </motion.div>
            </div>

            {/* Date & Guests Row */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <label className="block text-sm font-bold text-gray-900 mb-2.5">
                  Event Date *
                </label>
                <input
                  type="date"
                  className="w-full border-2 border-gray-200 hover:border-rose-300 focus:border-rose-500 rounded-xl px-5 py-3.5 text-sm bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-bold text-gray-900 mb-2.5">
                  Expected Guests *
                </label>
                <select
                  className="w-full border-2 border-gray-200 hover:border-rose-300 focus:border-rose-500 rounded-xl px-5 py-3.5 text-sm bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all"
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                >
                  <option value="">Select guest count</option>
                  <option>Up to 150</option>
                  <option>150 – 350</option>
                  <option>350 – 700</option>
                  <option>700 – 1,500</option>
                  <option>1,500 – 2,000</option>
                </select>
              </motion.div>
            </div>

            {/* Venue Preference */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mb-8"
            >
              <label className="block text-sm font-bold text-gray-900 mb-2.5">
                Venue Preference
              </label>
              <select
                className="w-full border-2 border-gray-200 hover:border-rose-300 focus:border-rose-500 rounded-xl px-5 py-3.5 text-sm bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all"
                value={form.venue}
                onChange={(e) => setForm({ ...form, venue: e.target.value })}
              >
                <option value="">Select venue</option>
                <option>The Royal Durbar (Indoor — 1,500 guests)</option>
                <option>The Garden Lawn (Outdoor — 2,000 guests)</option>
                <option>The Ivory Suite (Intimate — 350 guests)</option>
                <option>Not Sure — Need Recommendation</option>
              </select>
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={`https://wa.me/919876543210?text=${wa}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn relative overflow-hidden flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 text-white py-4 rounded-xl font-bold text-base shadow-xl shadow-green-600/40 hover:shadow-green-600/60 transition-all"
              >
                {/* Shimmer overlay */}
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
                <span className="relative flex items-center gap-3">
                  <IconPhone size={20} stroke={2.5} />
                  Check on WhatsApp
                </span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn relative overflow-hidden flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white py-4 rounded-xl font-bold text-base shadow-xl shadow-rose-600/40 hover:shadow-rose-600/60 transition-all"
              >
                {/* Shimmer overlay */}
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
                <span className="relative flex items-center gap-3">
                  <IconMail size={20} stroke={2.5} />
                  Send Enquiry
                  <IconArrowRight size={18} stroke={2.5} />
                </span>
              </motion.button>
            </div>

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center text-xs text-gray-600 mt-5 font-medium"
            >
              ✓ We confirm availability within 2 hours · Site visit can be
              arranged
            </motion.p>
          </div>

          {/* Border glow */}
          <motion.div
            whileHover={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="absolute inset-0 rounded-3xl border border-rose-200 pointer-events-none group-hover:shadow-[inset_0_0_20px_rgba(236,72,153,0.1)] transition-all"
          />
        </motion.div>
      </div>
    </section>
  );
}
