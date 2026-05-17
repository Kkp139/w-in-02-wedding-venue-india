"use client";
import { motion } from "framer-motion";

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
    <section className="py-20 bg-rose-50" id="packages">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }} className="text-center mb-14">
          <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">All Inclusive</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a0a00] mt-2 mb-4">Wedding Packages</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Stress-free weddings with everything included. Custom packages also available — we tailor to your vision.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.12, ease: "easeOut" as const }}
              className={`rounded-3xl p-8 relative ${p.popular ? "bg-[#1a0a00] text-white shadow-2xl scale-105" : "bg-white border border-rose-100"}`}>
              {p.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">Most Popular</div>}
              <h3 className={`font-bold text-xl mb-1 ${p.popular ? "text-rose-300" : "text-[#1a0a00]"}`}>{p.name}</h3>
              <p className={`text-sm mb-2 ${p.popular ? "text-slate-400" : "text-slate-500"}`}>{p.guests}</p>
              <div className={`text-3xl font-bold mb-6 ${p.popular ? "text-white" : "text-[#1a0a00]"}`}>{p.price}</div>
              <ul className="space-y-2 mb-8">
                {p.includes.map(item => (
                  <li key={item} className={`flex items-start gap-2 text-sm ${p.popular ? "text-slate-300" : "text-slate-700"}`}>
                    <span className="text-rose-400 shrink-0 mt-0.5">✦</span>{item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919876543210?text=Hi%20Grand%20Mahal%2C%20I%27d%20like%20to%20know%20more%20about%20your%20wedding%20packages." target="_blank" rel="noopener noreferrer"
                className={`w-full block text-center py-3 rounded-xl font-bold text-sm transition-colors ${p.popular ? "bg-rose-500 hover:bg-rose-600 text-white" : "bg-[#1a0a00] hover:bg-rose-800 text-white"}`}>
                Get Quote
              </a>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-slate-500 text-sm mt-6">All packages customisable · GST extra · Advance booking discounts available</p>
      </div>
    </section>
  );
}
