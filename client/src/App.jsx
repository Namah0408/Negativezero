import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import ImpactStats from "./components/sections/ImpactStats";
import Gallery from "./components/sections/Gallery";
import Demographics from "./components/sections/Demographics";
import Sponsorships from "./components/sections/Sponsorships";
import Sponsors from "./components/sections/Sponsors";
import Testimonials from "./components/sections/Testimonials";
import UpcomingEvent from "./components/sections/UpcomingEvent";
import ContactCTA from "./components/sections/ContactCTA";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <ImpactStats />
      <Gallery />
      <Demographics />
      <Sponsorships />
      <Sponsors />
      {/*<Testimonials />*/}
      <UpcomingEvent />
      <ContactCTA />
      <Footer />
    </div>
  );
}