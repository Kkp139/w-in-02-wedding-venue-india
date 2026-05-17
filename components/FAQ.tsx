"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a0a00] mb-4">Frequently Asked Questions</h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05, ease: "easeOut" as const }}
              className="bg-rose-50 border border-rose-100 rounded-xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#1a0a00] hover:bg-rose-100/50 transition-colors text-sm">
                <span>{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-rose-500 text-2xl leading-none ml-4 shrink-0">+</motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" as const }} className="overflow-hidden">
                    <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
