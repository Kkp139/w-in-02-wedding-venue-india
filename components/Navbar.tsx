"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Venues","Packages","Gallery","Catering","Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#1a0a00]/95 shadow-lg backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-18 py-3">
        <a href="/" className="flex flex-col leading-tight">
          <span className="text-white font-bold text-xl">The Grand Mahal</span>
          <span className="text-rose-300 text-[10px] tracking-widest uppercase">Wedding &amp; Events</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-slate-200 hover:text-rose-300 text-sm font-medium transition-colors">{l}</a>
          ))}
          <a href="https://wa.me/919876543210?text=Hi%20Grand%20Mahal%2C%20I%20want%20to%20check%20availability%20for%20my%20wedding." target="_blank" rel="noopener noreferrer"
            className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-colors">
            Check Availability
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#1a0a00] border-t border-rose-900 overflow-hidden">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-slate-200 text-sm font-medium">{l}</a>
              ))}
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                className="bg-rose-600 text-white px-5 py-2 rounded-full text-sm font-bold text-center">
                Check Availability
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
