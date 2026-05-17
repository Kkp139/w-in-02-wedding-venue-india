"use client";
import { motion } from "framer-motion";

const reasons = [
  { icon: "🏆", title: "15+ Years of Excellence", desc: "Over 500 weddings hosted since 2009. We know exactly what makes a wedding perfect and flawlessly managed." },
  { icon: "🍽️", title: "In-House Catering", desc: "Our award-winning kitchen team handles everything from welcome drinks to midnight snacks. Veg, non-veg, Jain options available." },
  { icon: "💐", title: "Expert Décor Team", desc: "Our in-house décor team creates breathtaking mandap and hall setups — traditional, contemporary or fusion — to match your vision." },
  { icon: "🚗", title: "Ample Parking", desc: "Private parking for 500+ vehicles within the venue premises. Dedicated valet service for VIP guests available." },
  { icon: "📱", title: "Dedicated Event Manager", desc: "Every booking gets a personal event manager reachable on WhatsApp 24/7 from booking to the last dance." },
  { icon: "☔", title: "All-Weather Guarantee", desc: "Our garden venue has full monsoon backup — a tented indoor option deploys within 30 minutes if weather changes." },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }} className="text-center mb-14">
          <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a0a00] mt-2 mb-4">The Grand Mahal Promise</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: "easeOut" as const }}
              className="flex gap-4 p-6 bg-rose-50 rounded-2xl border border-rose-100">
              <div className="text-3xl shrink-0">{r.icon}</div>
              <div>
                <h3 className="font-bold text-[#1a0a00] mb-2">{r.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
