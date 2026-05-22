"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX, IconArrowRight } from "@tabler/icons-react";

const links = [
  { label: "Venues", href: "#venues" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Catering", href: "#catering" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 shadow-2xl backdrop-blur-md border-b border-rose-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 py-3">
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="flex flex-col leading-tight"
        >
          <span className="text-white font-serif font-bold text-2xl tracking-tight">
            The Grand Mahal
          </span>
          <span className="text-rose-400 text-[11px] tracking-widest uppercase font-medium">
            Wedding &amp; Events
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ color: "#fca5c3" }}
              className="text-slate-300 hover:text-rose-300 text-sm font-medium transition-colors"
            >
              {link.label}
            </motion.a>
          ))}

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/919876543210?text=Hi%20Grand%20Mahal%2C%20I%20want%20to%20check%20availability%20for%20my%20wedding."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-rose-600/40 hover:shadow-rose-600/60 transition-all"
          >
            {/* Shimmer overlay */}
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <span className="relative flex items-center gap-2">
              Check Availability
              <IconArrowRight size={16} stroke={2.5} />
            </span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white hover:text-rose-300 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <IconX size={24} stroke={2.5} />
          ) : (
            <IconMenu2 size={24} stroke={2.5} />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-gray-900 to-gray-950 border-t border-rose-500/20 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-slate-300 hover:text-rose-300 text-sm font-medium transition-colors py-2"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="https://wa.me/919876543210?text=Hi%20Grand%20Mahal%2C%20I%20want%20to%20check%20availability%20for%20my%20wedding."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.05 }}
                className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold text-center shadow-lg shadow-rose-600/40 hover:shadow-rose-600/60 transition-all"
              >
                Check Availability
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
