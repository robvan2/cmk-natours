import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Products from './components/Products';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Header />
      <About />
      <Services />
      <Products />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
