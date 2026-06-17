import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      {/* 1. Added display: flex and flexDirection: column to make this a full-page layout */}
      <div style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        backgroundColor: '#050505',
        display: 'flex',
        flexDirection: 'column' 
      }}>
        

        <Navbar />

        {/* 2. Added flex: 1 here so the main content grows to fill the empty space */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Features />} />
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