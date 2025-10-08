import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChannelShowcase from "@/components/ChannelShowcase";
import LeaguesShowcase from "@/components/LeaguesShowcase";
import MoviesShowcase from "@/components/MoviesShowcase";
import Features from "@/components/Features";
import DeviceCompatibility from "@/components/DeviceCompatibility";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="features">
          <ChannelShowcase />
          <LeaguesShowcase />
          <MoviesShowcase />
          <Features />
          <DeviceCompatibility />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
