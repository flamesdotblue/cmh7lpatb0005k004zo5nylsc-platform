import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;
