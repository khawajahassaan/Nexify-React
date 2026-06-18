import BorderGlow from './BorderGlow';
import ShapeGrid from './ShapeGrid';

export default function Metrics() {
  return (
    <section className="metrics-section relative overflow-hidden z-0">
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
      <BorderGlow className="metric-card theme-purple" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
        <div className="card-shape"></div>
        <h3 className="metric-value">12,400</h3>
        <p className="metric-label">Total users</p>
        <span className="metric-badge">+18%</span>
      </BorderGlow>

      <BorderGlow className="metric-card theme-green" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
        <div className="card-shape"></div>
        <h3 className="metric-value">98%</h3>
        <p className="metric-label">Satisfaction</p>
        <span className="metric-badge">+2%</span>
      </BorderGlow>

      <BorderGlow className="metric-card theme-orange" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
        <div className="card-shape"></div>
        <h3 className="metric-value">$2.4M</h3>
        <p className="metric-label">Revenue</p>
        <span className="metric-badge">+34%</span>
      </BorderGlow>

      <BorderGlow className="metric-card theme-pink" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
        <div className="card-shape"></div>
        <h3 className="metric-value">50ms</h3>
        <p className="metric-label">Load time</p>
        <span className="metric-badge">-12ms</span>
      </BorderGlow>

    </section>
  );
}