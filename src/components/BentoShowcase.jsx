import BentoCard from '../components/BentoCard';
import ShapeGrid from './ShapeGrid';

export default function BentoShowcase(){

return(
    <section className="feature-grid-section" style={{ position: 'relative', overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
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
        <h2 className="everything-heading">More than just a UI kit</h2>
        
        <div className="bento-grid">
            <BentoCard 
                icon="fa-code" 
                colorClass="theme-blue-text" 
                title="Developer First" 
                description="Strictly typed, deeply documented, and built for modern frameworks like React and Vue." 
            />
            
            <BentoCard 
                icon="fa-palette" 
                colorClass="theme-orange-text" 
                title="Theming Engine" 
                description="Change your entire brand's look with just a few CSS variables. Endless possibilities." 
            />
            
            <BentoCard 
                icon="fa-bolt" 
                colorClass="theme-yellow-text" 
                title="Lightweight" 
                description="Zero bloat. Nexify uses aggressive tree-shaking so you only ship what you use." 
            />

            <BentoCard 
                icon="fa-shield" 
                colorClass="theme-red-text" 
                title="Enterprise Security" 
                description="Regularly audited code base ensuring your frontend remains secure against common vulnerabilities." 
            />
        </div>
    </section>
);
}