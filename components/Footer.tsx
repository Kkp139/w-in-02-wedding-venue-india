"use client";
import { motion } from "framer-motion";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconArrowRight,
} from "@tabler/icons-react";

export default function Footer() {
  const venues = [
    "The Royal Durbar",
    "The Garden Lawn",
    "The Ivory Suite",
    "Full Venue Booking",
    "Site Visit",
  ];

  const services = [
    "Wedding Packages",
    "In-House Catering",
    "Décor & Mandap",
    "Photography Referral",
    "Event Management",
  ];

  const contactInfo = [
    {
      icon: IconMapPin,
      label: "The Grand Mahal, S.G. Highway, Ahmedabad — 380015",
    },
    { icon: IconPhone, label: "+91 98765 43210" },
    { icon: IconMail, label: "events@grandmahal.com" },
    { icon: IconClock, label: "Open Daily: 10am–8pm" },
  ];

  return (
    <footer
      className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white pt-20 pb-10 border-t border-rose-500/20"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              The Grand Mahal
            </h3>
            <p className="text-rose-400 text-sm font-medium mb-2">
              Wedding &amp; Events Venue
            </p>
            <p className="text-gray-400 text-xs mb-5 leading-relaxed">
              Est. 2009 · Ahmedabad, Gujarat
              <br />
              GSTIN: 24BBBBB0000B1Z5
            </p>
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 4 }}
              className="inline-flex items-center gap-2 text-green-400 text-sm font-medium hover:text-green-300 transition-colors"
            >
              <IconPhone size={16} stroke={2.5} />
              +91 98765 43210
            </motion.a>
          </motion.div>

          {/* Venues Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-serif font-bold text-white mb-5 text-lg">
              Our Venues
            </h4>
            <ul className="space-y-3">
              {venues.map((venue, i) => (
                <motion.li
                  key={venue}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-gray-300 text-sm hover:text-rose-300 transition-colors flex items-center gap-2"
                >
                  <IconArrowRight size={14} className="text-rose-500" stroke={2.5} />
                  {venue}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h4 className="font-serif font-bold text-white mb-5 text-lg">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="text-gray-300 text-sm hover:text-rose-300 transition-colors flex items-center gap-2"
                >
                  <IconArrowRight size={14} className="text-rose-500" stroke={2.5} />
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-serif font-bold text-white mb-5 text-lg">
              Contact
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.li
                    key={info.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="text-gray-300 text-sm flex items-start gap-3"
                  >
                    <Icon
                      size={18}
                      className="text-rose-500 flex-shrink-0 mt-0.5"
                      stroke={2}
                    />
                    <span>{info.label}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent mb-8 origin-left"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-400 text-xs leading-relaxed mb-4 max-w-3xl mx-auto">
            The Grand Mahal — Ahmedabad&apos;s premier wedding venue and banquet
            hall. Offering luxurious indoor and outdoor wedding venues for 100
            to 2,000 guests with in-house catering, floral décor, mandap setup
            and complete event management. Serving families across Ahmedabad,
            Gandhinagar, Surat and Gujarat since 2009.
          </p>
          <p className="text-rose-600/60 text-xs font-medium">
            © 2024 The Grand Mahal. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
