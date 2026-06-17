import { Plasma } from './Plasma';

export default function FeaturesHero() {

    return (

        <section className="features-hero" style={{ position: 'relative', overflow: 'hidden', zIndex: 0 }}>
              {/* Plasma Background */}
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                zIndex: -1,
                pointerEvents: 'none'
              }}>
                <Plasma color="#1967e7" speed={1.5} scale={1.3} />
              </div>
              
              <h1 className="hero-title" style={{ position: 'relative', zIndex: 10 }}>Supercharge your workflow</h1>
              <p className="hero-subtitle" style={{ margin: '0 auto', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
                  Packed with everything you need to build stunning, high-performance user interfaces in record time.
              </p>
        </section>

    );

}