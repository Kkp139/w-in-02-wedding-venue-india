"use client";
import { motion } from "framer-motion";

const menus = [
  { cat: "Welcome & Starters", items: ["Fresh Juice Counter","Mocktail Station","Paneer Tikka","Veg Seekh Kabab","Live Chaat Counter","Pav Bhaji"] },
  { cat: "Main Course", items: ["Dal Makhani / Dal Tadka","Paneer Butter Masala","Mix Veg Curry","Aloo Gobi","Live Roti Counter","Jeera Rice / Biryani"] },
  { cat: "Breads & Rice", items: ["Butter Naan","Missi Roti","Laccha Paratha","Pulao","Veg Biryani","Plain Rice"] },
  { cat: "Desserts & Sweets", items: ["Gulab Jamun","Rasgulla","Moong Dal Halwa","Ice Cream Station","Paan Counter","Live Jalebi"] },
];

export default function Catering() {
  return (
    <section className="py-20 bg-[#1a0a00]" id="catering">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }} className="text-center mb-14">
          <span className="text-rose-400 font-semibold text-sm uppercase tracking-wider">Taste the Difference</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">In-House Catering</h2>
          <p className="text-rose-200 max-w-2xl mx-auto">Our award-winning culinary team serves fresh, authentic flavours. Veg, non-veg, Jain and special dietary options available. All food prepared fresh on-site.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {menus.map((m, i) => (
            <motion.div key={m.cat} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: "easeOut" as const }}
              className="bg-white/5 border border-rose-900/40 rounded-2xl p-6">
              <h3 className="font-bold text-rose-300 mb-4 text-sm uppercase tracking-wider">{m.cat}</h3>
              <ul className="space-y-1.5">
                {m.items.map(item => (
                  <li key={item} className="text-slate-300 text-sm flex items-center gap-2">
                    <span className="text-rose-500 text-xs">◆</span>{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {[
            { icon: "🥗", title: "Jain Menu Available", desc: "Complete Jain menu without root vegetables — prepared in separate dedicated vessels." },
            { icon: "🍗", title: "Non-Veg Options", desc: "Full non-veg menu including chicken, mutton and seafood in premium packages." },
            { icon: "🍭", title: "500+ Dishes", desc: "Our master chefs can curate a custom menu from a repertoire of 500+ dishes." },
          ].map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: "easeOut" as const }}
              className="bg-rose-900/30 border border-rose-800/30 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">{f.icon}</div>
              <h4 className="text-white font-bold mb-1">{f.title}</h4>
              <p className="text-rose-300 text-xs">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a href="https://wa.me/919876543210?text=Hi%20Grand%20Mahal%2C%20can%20I%20get%20the%20catering%20menu%20and%20per-plate%20rates%3F" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20bc5a] text-white px-8 py-4 rounded-full font-bold transition-colors">
            📲 Get Catering Menu &amp; Rates
          </a>
        </div>
      </div>
    </section>
  );
}
