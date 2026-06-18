import { Plasma } from './Plasma';

export default function FeaturesHero() {

    return (

        <section className="features-hero relative overflow-hidden z-0">
              {/* Plasma Background */}
              <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
                <Plasma color="#1967e7" speed={1.5} scale={1.3} />
              </div>
              
              <div className="flex flex-col items-center justify-center w-full px-4">
                <h1 className="hero-title relative z-10 !text-center">Supercharge your workflow</h1>
                <p className="hero-subtitle !text-center !mx-auto mb-12 relative z-10">
                    Packed with everything you need to build stunning, high-performance user interfaces in record time.
                </p>
              </div>
        </section>

    );

}