import BorderGlow from './BorderGlow';
import ShapeGrid from './ShapeGrid';

export default function Everything() {
  return (
    <section className="everything" style={{ position: 'relative', overflow: 'hidden', zIndex: 0 }}>
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
      <h2 className="everything-heading">Everything You Need</h2>

      <div className="item-row">
        
        <BorderGlow className="item-card" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
          <span className="item item-purple">🎨</span>
          <h3 className="item-heading">Custom themes</h3>
          <p className="item-desc">Fully customizable design tokens.</p>
        </BorderGlow>

        <BorderGlow className="item-card" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
          <span className="item item-green">⚡</span>
          <h3 className="item-heading">Blazing fast</h3>
          <p className="item-desc">Zero layout thrash, 50ms load.</p>
        </BorderGlow>

        <BorderGlow className="item-card" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
          <span className="item item-orange">📱</span>
          <h3 className="item-heading">Responsive</h3>
          <p className="item-desc">Mobile-first on every screen.</p>
        </BorderGlow>

        <BorderGlow className="item-card" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
          <span className="item item-red">❤️</span>
          <h3 className="item-heading">Accessible</h3>
          <p className="item-desc">WCAG 2.1 compliant out of box.</p>
        </BorderGlow>

        <BorderGlow className="item-card" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
          <span className="item item-blue">☁️</span>
          <h3 className="item-heading">Cloud ready</h3>
          <p className="item-desc">Deploy anywhere in one click.</p>
        </BorderGlow>

        <BorderGlow className="item-card" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
          <span className="item item-oranger">📊</span>
          <h3 className="item-heading">Analytics</h3>
          <p className="item-desc">Built-in usage and performance.</p>
        </BorderGlow>

      </div>
    </section>
  );
}