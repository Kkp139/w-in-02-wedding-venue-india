"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const faqs = [
  { q: "How far in advance should I book the venue?", a: "We recommend booking at least 6–12 months in advance for popular dates (November–February, auspicious dates). For off-season or weekday events, 3–4 months is usually sufficient. Contact us to check your preferred date's availability." },
  { q: "What is the booking process and advance amount?", a: "A refundable token advance of ₹50,000 confirms the date. Remaining payment is structured in 3 instalments — 40% at contract signing, 40% one month before the event, and 10% on the event day after setup inspection." },
  { q: "Can we bring our own caterer?", a: "We have an exclusive arrangement with our in-house catering team to ensure food quality and freshness standards. External catering is not permitted. However, you may bring a wedding cake from a bakery of your choice." },
  { q: "Is there a monsoon backup for the garden lawn?", a: "Yes. We have a fully equipped monsoon tent that covers the entire garden lawn and can be deployed within 30 minutes. This is included in all garden venue bookings at no extra charge." },
  { q: "Do you allow outside vendors for décor and photography?", a: "Yes. You may bring your own decorators and photographers. Our venue team will coordinate with your vendors for setup timing and logistics. We also have a preferred vendor list if you need recommendations." },
  { q: "Is valet parking available?", a: "Yes. Free self-parking for 300 vehicles plus valet service for up to 100 VIP vehicles is available in our dedicated parking zones. Overflow parking arrangements can be made for very large events." },
  { q: "What are the DJ and music cutoff timings?", a: "As per local regulations, live music and DJ are permitted until 11:30 PM on weekdays and 12:00 midnight on weekends. Our venue has a sound-insulated DJ cabin for optimal acoustics." },
  { q: "Can I visit the venue before booking?", a: "Absolutely. We encourage site visits — it helps you visualise your wedding. WhatsApp us to schedule a personalised tour with our event manager at a time convenient to you." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50/30" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-14"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-rose-700 font-bold text-xs uppercase tracking-widest">
              Have Questions?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-gray-900"
          >
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, ease: "easeOut" as const }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-pink-50 border border-white/80 shadow-lg hover:shadow-xl transition-all"
            >
              {/* Decorative orb */}
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity" />

              {/* Question Button */}
              <motion.button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-5 text-left font-serif font-bold text-gray-900 hover:text-rose-700 transition-colors relative z-10"
              >
                <span className="text-lg leading-snug max-w-xs sm:max-w-none">
                  {f.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  className="text-rose-600 flex-shrink-0 ml-4"
                >
                  {open === i ? (
                    <IconMinus size={24} stroke={2.5} />
                  ) : (
                    <IconPlus size={24} stroke={2.5} />
                  )}
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" as const }}
                    className="overflow-hidden relative z-10"
                  >
                    <div className="h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="px-8 py-5 text-gray-700 text-base leading-relaxed"
                    >
                      {f.a}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Border glow */}
              <motion.div
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className="absolute inset-0 rounded-2xl border border-rose-200 pointer-events-none group-hover:shadow-[inset_0_0_15px_rgba(236,72,153,0.1)] transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
