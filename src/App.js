import { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Modal from './components/Modal';
import Products from './components/Products';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  const [state, setState] = useState(false)
  return (
    <div className="App">
      <Modal setState={setState} state={state} />
      <HeroSection />
      <Header />
      <About />
      <Services />
      <Products setState={setState} />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
