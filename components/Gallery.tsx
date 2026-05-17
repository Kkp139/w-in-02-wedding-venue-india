"use client";
import { motion } from "framer-motion";

const photos = [
  { label: "Royal Durbar — Grand Setup", color: "bg-rose-200", emoji: "💒" },
  { label: "Garden Lawn — Fairy Lights", color: "bg-emerald-100", emoji: "🌿" },
  { label: "Floral Mandap", color: "bg-pink-100", emoji: "🌸" },
  { label: "Bridal Suite", color: "bg-amber-100", emoji: "👰" },
  { label: "Catering Spread", color: "bg-orange-100", emoji: "🍽️" },
  { label: "Sangeet Night", color: "bg-purple-100", emoji: "🎶" },
  { label: "Reception Décor", color: "bg-rose-100", emoji: "✨" },
  { label: "Garden Wedding", color: "bg-green-100", emoji: "🌺" },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-slate-50" id="gallery">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }} className="text-center mb-14">
          <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Moments</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a0a00] mt-2 mb-4">From Our Wedding Albums</h2>
          <p className="text-slate-600">500+ weddings, each one unique — beautifully captured at The Grand Mahal.</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((p, i) => (
            <motion.div key={p.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07, ease: "easeOut" as const }}
              className={`${p.color} rounded-2xl aspect-square flex flex-col items-center justify-center border border-white/50 hover:scale-105 transition-transform cursor-pointer`}>
              <span className="text-5xl mb-3">{p.emoji}</span>
              <span className="text-xs font-medium text-slate-700 text-center px-2">{p.label}</span>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-center mt-8">
          <a href="https://wa.me/919876543210?text=Hi%2C%20can%20I%20see%20more%20photos%20of%20The%20Grand%20Mahal%3F" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-bold transition-colors">
            📲 Request Full Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
