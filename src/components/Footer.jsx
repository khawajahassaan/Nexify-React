import { useState } from 'react';
import GlassSurface from './GlassSurface';

const dummyContent = {
  Privacy: "Your privacy is important to us. We do not sell your data. We collect standard analytics to improve user experience. This is a dummy privacy policy.",
  Terms: "By using Nexify, you agree to these dummy terms of service. You must be human to use this service. No robots allowed. Nexify is provided 'as is'.",
  Docs: "Welcome to Nexify Docs! Here you'll find everything you need to build beautiful products. Quickstart: npm install nexify. That's it!",
  Careers: "We are hiring! Open positions: Senior React Engineer, Glass Effect Specialist, Gradient Architect. Send us your resume to join the team."
};

export default function Footer() {
  const [activePopup, setActivePopup] = useState(null);

  return (
    <>
      <footer>
        <div className="footer-logo">
          <i className="fa-solid fa-bolt" style={{ color: '#FBBF24' }}></i>
          <span className="nexify">  Nexify</span>
        </div>

        <nav className="nav-footer">
          {Object.keys(dummyContent).map(item => (
            <a key={item} href="#" onClick={(e) => { e.preventDefault(); setActivePopup(item); }}>
              {item}
            </a>
          ))}
        </nav>

        <div className="footer-icons">
          <div className="footer-item"><a href="https://x.com/" target="_blank" rel="noreferrer">🐦</a></div>
          <div className="footer-item"><a href="https://facebook.com/" target="_blank" rel="noreferrer">🐙</a></div>
          <div className="footer-item"><a href="https://linkedin.com/" target="_blank" rel="noreferrer">💼</a></div>
        </div>
      </footer>

      {activePopup && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
          onClick={() => setActivePopup(null)}
        >
          <div style={{ position: 'relative', width: '90%', maxWidth: '500px' }} onClick={e => e.stopPropagation()}>
            <GlassSurface width="100%" height="auto" borderRadius={20} borderWidth={0} distortionScale={-20} backgroundOpacity={0.15}>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2 style={{ fontSize: '1.5rem', color: 'white', margin: 0 }}>{activePopup}</h2>
                <p style={{ color: '#e5e7eb', lineHeight: '1.6', margin: 0 }}>
                  {dummyContent[activePopup]}
                </p>
                <button 
                  className="btn btn-purple" 
                  style={{ alignSelf: 'flex-end', marginTop: '1rem', padding: '0.5rem 1.5rem' }}
                  onClick={() => setActivePopup(null)}
                >
                  Close
                </button>
              </div>
            </GlassSurface>
          </div>
        </div>
      )}
    </>
  );
}