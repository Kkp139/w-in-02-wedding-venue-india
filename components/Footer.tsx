export default function Footer() {
  return (
    <footer className="bg-[#1a0a00] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">The Grand Mahal</h3>
            <p className="text-rose-300 text-sm mb-1">Wedding &amp; Events Venue</p>
            <p className="text-rose-400 text-xs mb-4">Est. 2009 · Ahmedabad, Gujarat<br/>GSTIN: 24BBBBB0000B1Z5</p>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-[#25d366] text-sm font-medium hover:underline">📲 +91 98765 43210</a>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Our Venues</h4>
            <ul className="space-y-2 text-rose-200 text-sm">
              {["The Royal Durbar","The Garden Lawn","The Ivory Suite","Full Venue Booking","Site Visit"].map(l => <li key={l}>• {l}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-rose-200 text-sm">
              {["Wedding Packages","In-House Catering","Décor & Mandap","Photography Referral","Event Management"].map(l => <li key={l}>• {l}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-rose-200 text-sm">
              <li>📍 The Grand Mahal, S.G. Highway, Ahmedabad — 380015</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ events@grandmahal.com</li>
              <li>⏰ Open Daily: 10am–8pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-rose-900 pt-8">
          <p className="text-rose-300 text-xs leading-relaxed mb-3">
            The Grand Mahal — Ahmedabad&apos;s premier wedding venue and banquet hall. Offering luxurious indoor and outdoor wedding venues for 100 to 2,000 guests with in-house catering, floral décor, mandap setup and complete event management. Serving families across Ahmedabad, Gandhinagar, Surat and Gujarat since 2009.
          </p>
          <p className="text-rose-500 text-xs">© 2024 The Grand Mahal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
