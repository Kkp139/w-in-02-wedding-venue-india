import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Grand Mahal | Wedding Venue & Banquet Hall | Ahmedabad, Gujarat",
  description: "The Grand Mahal — Ahmedabad's most celebrated wedding venue. Luxurious banquet halls for 100–2000 guests, open lawns, indoor AC halls, catering, décor and complete wedding packages. Book your dream wedding today.",
  keywords: "wedding venue Ahmedabad, banquet hall Ahmedabad, marriage hall Gujarat, wedding hall booking, outdoor wedding venue, wedding package Ahmedabad, reception hall Gujarat",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
