"use client";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Priya & Rohan Mehta", event: "Wedding Reception — 800 guests", rating: 5, text: "Grand Mahal made our dream wedding a reality. The decor was breathtaking, food was exceptional and our event manager Pooja was available at every step. Our guests still talk about it!" },
  { name: "Sunita Patel (Mother of Bride)", event: "Wedding + Sangeet — 1,200 guests", rating: 5, text: "We booked the Gold package and it exceeded every expectation. The mandap was beautiful, catering was loved by all 1,200 guests, and everything ran on time. Highly recommended!" },
  { name: "Amit & Kavya Shah", event: "Intimate Wedding — 250 guests", rating: 5, text: "We wanted something intimate and elegant. The Ivory Suite was perfect. Personal event manager, lovely floral decor, delicious Jain food — exactly what we dreamed of." },
  { name: "Rakesh Desai (Father of Groom)", event: "3-Day Wedding Event", rating: 5, text: "Used all three venues for mehendi, sangeet and wedding. Platinum package was worth every rupee. Coordination was flawless. The Grand Mahal is in a class of its own." },
  { name: "Neha & Vikram Joshi", event: "Garden Wedding — 600 guests", rating: 5, text: "Our garden wedding under the stars was absolutely magical. The fairy lights, the weather cooperated perfectly, and the catering was outstanding. Perfect memories!" },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a0a00] mb-3">Happy Couples</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-amber-400 text-xl">★★★★★</span>
            <span className="text-slate-600 font-medium">4.9/5 · 500+ weddings</span>
          </div>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
              className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
              <div className="flex mb-3">{Array.from({length: t.rating}).map((_, j) => <span key={j} className="text-amber-400">★</span>)}</div>
              <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">&quot;{t.text}&quot;</p>
              <div className="border-t border-rose-100 pt-4">
                <div className="font-bold text-[#1a0a00]">{t.name}</div>
                <div className="text-rose-500 text-xs font-medium">{t.event}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
