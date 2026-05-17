"use client";
import { motion } from "framer-motion";

const venues = [
  {
    name: "The Royal Durbar",
    type: "Grand Banquet Hall",
    capacity: "500–1,500 guests",
    area: "15,000 sq ft · AC",
    features: ["Chandelier lighting","Full AV setup","Stage & mandap area","Bridal suite","Valet parking"],
    bestFor: "Grand weddings, Receptions",
    price: "From ₹3.5L",
  },
  {
    name: "The Garden Lawn",
    type: "Open-Air Venue",
    capacity: "200–2,000 guests",
    area: "25,000 sq ft · Open Air",
    features: ["Natural garden setting","Fairy light décor","Flexible layout","Catering tent","Monsoon backup hall"],
    bestFor: "Outdoor weddings, Sangeet",
    price: "From ₹2L",
  },
  {
    name: "The Ivory Suite",
    type: "Intimate Banquet",
    capacity: "100–350 guests",
    area: "5,000 sq ft · AC",
    features: ["Intimate ambience","Pre-function area","Private bridal room","Modern AV","Perfect for small families"],
    bestFor: "Intimate weddings, Engagements",
    price: "From ₹1.2L",
  },
];

export default function Venues() {
  return (
    <section className="py-20 bg-white" id="venues">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }} className="text-center mb-14">
          <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Our Spaces</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a0a00] mt-2 mb-4">Stunning Venues for Every Celebration</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Three distinct spaces — from intimate gatherings to grand celebrations of 2,000 guests.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {venues.map((v, i) => (
            <motion.div key={v.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.15, ease: "easeOut" as const }}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow">
              {/* Colour band */}
              <div className={`h-3 ${i === 0 ? "bg-rose-500" : i === 1 ? "bg-emerald-500" : "bg-amber-500"}`} />
              <div className="p-7">
                <h3 className="font-bold text-[#1a0a00] text-xl mb-1">{v.name}</h3>
                <p className="text-rose-500 text-sm font-semibold mb-1">{v.type}</p>
                <p className="text-slate-500 text-sm mb-1">👥 {v.capacity}</p>
                <p className="text-slate-500 text-sm mb-5">📐 {v.area}</p>
                <ul className="space-y-1.5 mb-6">
                  {v.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-slate-700 text-sm">
                      <span className="text-rose-400">✦</span>{f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-500 mb-4">Best for: <span className="text-[#1a0a00] font-semibold">{v.bestFor}</span></p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#1a0a00]">{v.price}</span>
                  <a href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20wedding%20venue%20availability." target="_blank" rel="noopener noreferrer"
                    className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-xl font-bold text-sm transition-colors">
                    Enquire
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
