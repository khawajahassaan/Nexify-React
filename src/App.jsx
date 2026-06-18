import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#050505] flex flex-col">


        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;