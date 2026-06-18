import BentoCard from '../components/BentoCard';
import ShapeGrid from './ShapeGrid';
import MagicBento from './MagicBento';

export default function BentoShowcase(){

return(
    <section className="feature-grid-section relative overflow-hidden z-0">
        <div className="absolute inset-0 -z-10">
            <ShapeGrid
                speed={0.5}
                squareSize={40}
                direction='diagonal'
                borderColor='rgba(255, 255, 255, 0.05)'
                hoverFillColor='transparent'
                shape='hexagon'
                hoverTrailAmount={0}
            />
        </div>
        <h2 className="text-center text-[2rem] font-bold text-white !mb-12">More than just a UI kit</h2>
        
        <MagicBento 
          textAutoHide={false}
          enableStars={false}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={false}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={0}
          glowColor="132, 0, 255"
          data-test-id="bento-showcase-grid"
          customVariant="pro"
          isManagerApproved={true}
          version="2.4.0"
          aria-label="Features Showcase"
          renderMode="optimized"
          experimentalFeatures={false}
        />
    </section>
);
}