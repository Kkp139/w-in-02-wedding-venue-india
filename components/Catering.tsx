"use client";
import { motion } from "framer-motion";
import {
  IconLeaf,
  IconChefHat,
  IconFlower,
  IconCheck,
  IconPhone,
  IconArrowRight,
} from "@tabler/icons-react";

const menus = [
  { cat: "Welcome & Starters", items: ["Fresh Juice Counter","Mocktail Station","Paneer Tikka","Veg Seekh Kabab","Live Chaat Counter","Pav Bhaji"] },
  { cat: "Main Course", items: ["Dal Makhani / Dal Tadka","Paneer Butter Masala","Mix Veg Curry","Aloo Gobi","Live Roti Counter","Jeera Rice / Biryani"] },
  { cat: "Breads & Rice", items: ["Butter Naan","Missi Roti","Laccha Paratha","Pulao","Veg Biryani","Plain Rice"] },
  { cat: "Desserts & Sweets", items: ["Gulab Jamun","Rasgulla","Moong Dal Halwa","Ice Cream Station","Paan Counter","Live Jalebi"] },
];

const features = [
  { icon: IconLeaf, title: "Jain Menu Available", desc: "Complete Jain menu without root vegetables — prepared in separate dedicated vessels." },
  { icon: IconChefHat, title: "Non-Veg Options", desc: "Full non-veg menu including chicken, mutton and seafood in premium packages." },
  { icon: IconFlower, title: "500+ Dishes", desc: "Our master chefs can curate a custom menu from a repertoire of 500+ dishes." },
];

export default function Catering() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-rose-900/30" id="catering">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-900/50 to-pink-900/50 border border-rose-700/50 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-rose-300 font-bold text-xs uppercase tracking-widest">Taste the Difference</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-white mb-5"
          >
            In-House Catering
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-rose-200 max-w-2xl mx-auto text-lg"
          >
            Our award-winning culinary team serves fresh, authentic flavours. Veg, non-veg, Jain and special dietary options available. All food prepared fresh on-site.
          </motion.p>
        </motion.div>

        {/* Menu Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {menus.map((m, i) => (
            <motion.div
              key={m.cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: "easeOut" as const }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-rose-500/50 p-6 transition-all"
            >
              {/* Header */}
              <h3 className="font-serif font-bold text-rose-300 mb-5 text-sm uppercase tracking-wider group-hover:text-rose-200 transition-colors">
                {m.cat}
              </h3>

              {/* Items List */}
              <ul className="space-y-2">
                {m.items.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + idx * 0.05 }}
                    className="text-slate-300 text-sm flex items-start gap-2"
                  >
                    <IconCheck className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" stroke={2.5} />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Border glow */}
              <motion.div
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className="absolute inset-0 rounded-2xl border border-rose-500/20 pointer-events-none group-hover:shadow-[inset_0_0_15px_rgba(244,63,94,0.1)] transition-all"
              />
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: "easeOut" as const }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.2)" }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-900/40 to-pink-900/30 border border-rose-800/50 p-8 text-center"
              >
                {/* Decorative orb */}
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-gradient-to-br from-rose-600/20 to-pink-600/20 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />

                {/* Content */}
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-rose-600/40 to-pink-600/40 text-rose-300 flex items-center justify-center mb-4 mx-auto group-hover:text-rose-200 transition-colors"
                  >
                    <Icon size={32} stroke={1.5} />
                  </motion.div>

                  <h4 className="text-white font-serif font-bold mb-2 group-hover:text-rose-200 transition-colors">
                    {f.title}
                  </h4>
                  <p className="text-rose-300/80 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                {/* Border glow */}
                <motion.div
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="absolute inset-0 rounded-2xl border border-rose-600/30 pointer-events-none group-hover:shadow-[inset_0_0_15px_rgba(244,63,94,0.15)] transition-all"
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.a
            href="https://wa.me/919876543210?text=Hi%20Grand%20Mahal%2C%20can%20I%20get%20the%20catering%20menu%20and%20per-plate%20rates%3F"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 text-white px-10 py-4 rounded-full font-bold text-base shadow-xl shadow-green-600/40 hover:shadow-green-600/60 transition-all"
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
              Get Catering Menu & Rates
              <IconArrowRight size={18} stroke={2.5} />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
