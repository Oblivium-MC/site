import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gameplay from './components/Gameplay';
import Community from './components/Community';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Componente principal da aplicação
 * Organiza e renderiza todas as seções do site do Oblivium
 */
function App() {
  return (
    <div className="min-h-screen bg-[#201e1d] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Gameplay />
        <Community />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
