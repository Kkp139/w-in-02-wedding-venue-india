"use client";
import { motion } from "framer-motion";
import {
  IconAward,
  IconChefHat,
  IconFlower,
  IconParking,
  IconPhone,
  IconCloudRain,
} from "@tabler/icons-react";

const reasons = [
  { icon: IconAward, title: "15+ Years of Excellence", desc: "Over 500 weddings hosted since 2009. We know exactly what makes a wedding perfect and flawlessly managed." },
  { icon: IconChefHat, title: "In-House Catering", desc: "Our award-winning kitchen team handles everything from welcome drinks to midnight snacks. Veg, non-veg, Jain options available." },
  { icon: IconFlower, title: "Expert Décor Team", desc: "Our in-house décor team creates breathtaking mandap and hall setups — traditional, contemporary or fusion — to match your vision." },
  { icon: IconParking, title: "Ample Parking", desc: "Private parking for 500+ vehicles within the venue premises. Dedicated valet service for VIP guests available." },
  { icon: IconPhone, title: "Dedicated Event Manager", desc: "Every booking gets a personal event manager reachable on WhatsApp 24/7 from booking to the last dance." },
  { icon: IconCloudRain, title: "All-Weather Guarantee", desc: "Our garden venue has full monsoon backup — a tented indoor option deploys within 30 minutes if weather changes." },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50/30">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-rose-700 font-bold text-xs uppercase tracking-widest">Why Choose Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-gray-900"
          >
            The Grand Mahal Promise
          </motion.h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: "easeOut" as const }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(244, 63, 94, 0.15)" }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-pink-50 border border-white/80 p-6 shadow-lg hover:shadow-xl transition-all"
              >
                {/* Decorative orb */}
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />

                {/* Content */}
                <div className="relative">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 text-rose-600 flex items-center justify-center mb-4 group-hover:text-rose-700 transition-colors"
                  >
                    <Icon size={28} stroke={2} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-gray-900 mb-3 text-lg group-hover:text-rose-700 transition-colors">
                    {r.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {r.desc}
                  </p>

                  {/* Animated underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    className="h-1 w-8 bg-rose-600 rounded-full mt-4 origin-left"
                  />
                </div>

                {/* Border glow */}
                <motion.div
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="absolute inset-0 rounded-2xl border border-rose-200 pointer-events-none group-hover:shadow-[inset_0_0_15px_rgba(236,72,153,0.1)] transition-all"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
