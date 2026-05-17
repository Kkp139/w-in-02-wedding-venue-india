"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "", venue: "" });
  const wa = `Hi%20Grand%20Mahal%2C%0AName%3A%20${encodeURIComponent(form.name)}%0AEvent%20Date%3A%20${encodeURIComponent(form.date)}%0AGuests%3A%20${encodeURIComponent(form.guests)}%0AVenue%20Interest%3A%20${encodeURIComponent(form.venue)}`;

  return (
    <section className="py-20 bg-rose-50" id="contact">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }} className="text-center mb-10">
          <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Reserve Your Date</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a0a00] mt-2 mb-4">Check Date Availability</h2>
          <p className="text-slate-600">Popular dates book out months in advance — check availability today.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
          className="bg-white rounded-3xl p-8 border border-rose-100 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name *</label>
              <input className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 bg-white"
                placeholder="Full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">WhatsApp Number *</label>
              <input className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 bg-white"
                placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Event Date *</label>
              <input type="date" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 bg-white"
                value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Expected Guests *</label>
              <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 bg-white"
                value={form.guests} onChange={e => setForm({...form, guests: e.target.value})}>
                <option value="">Select guest count</option>
                <option>Up to 150</option>
                <option>150 – 350</option>
                <option>350 – 700</option>
                <option>700 – 1,500</option>
                <option>1,500 – 2,000</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Venue Preference</label>
            <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 bg-white"
              value={form.venue} onChange={e => setForm({...form, venue: e.target.value})}>
              <option value="">Select venue</option>
              <option>The Royal Durbar (Indoor — 1,500 guests)</option>
              <option>The Garden Lawn (Outdoor — 2,000 guests)</option>
              <option>The Ivory Suite (Intimate — 350 guests)</option>
              <option>Not Sure — Need Recommendation</option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`https://wa.me/919876543210?text=${wa}`} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20bc5a] text-white py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-green-200">
              📲 Check on WhatsApp
            </a>
            <button className="flex-1 bg-rose-600 hover:bg-rose-700 text-white py-4 rounded-xl font-bold text-base transition-all">
              📧 Send Enquiry
            </button>
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">We confirm availability within 2 hours · Site visit can be arranged</p>
        </motion.div>
      </div>
    </section>
  );
}
