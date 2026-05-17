import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Venues from "@/components/Venues";
import Packages from "@/components/Packages";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Catering from "@/components/Catering";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Venues />
        <Packages />
        <WhyUs />
        <Gallery />
        <Catering />
        <Testimonials />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
