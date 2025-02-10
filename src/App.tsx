import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import DetailedServices from './components/DetailedServices';
import Corporate from './components/Corporate';
import Community from './components/Community';
import MediaPresence from './components/PreciseHealth';
import Testimonials from './components/Testimonials';
import News from './components/News';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <DetailedServices />
      <Corporate />
      <Community />
      <MediaPresence />
      <Testimonials />
      <News />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;