import React from 'react'
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import Faqs from './sections/faqs/Faqs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Floatingnav from './sections/floating-nav/Floatingnav';

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
      <Floatingnav />
    </main>
  )
}

export default App