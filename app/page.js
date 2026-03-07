import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import StatsBar from "../components/sections/StatsBar";
import About from "../components/sections/About";
import Gallery from "../components/sections/Gallery";
import Programs from "../components/sections/Programs";
import Testimonials from "../components/sections/Testimonials";
import LeadFormSection from "../components/sections/LeadForm";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-iron-900 via-black to-iron-900">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Gallery />
        <Programs />
        <Testimonials />
        <LeadFormSection />
      </main>
      <Footer />
    </div>
  );
}


