import { Plasma } from './Plasma';
import BorderGlow from './BorderGlow';
import GlassSurface from './GlassSurface';

export default function Hero() {
  return (
    <section className="hero-section" style={{ position: 'relative', overflow: 'hidden', zIndex: 0 }}>


      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}>
        <Plasma color="#1967e7" speed={1.5} scale={1.3} mouseInteractive={false} />
      </div>

      <div className="badges-row">
        <span className="badge badge-purple"><i className="fa-solid fa-bolt"></i> Fast</span>
        <span className="badge badge-green"><i className="fa-solid fa-shield"></i> Secure</span>
        <span className="badge badge-orange"><i className="fa-solid fa-wand-magic-sparkles"></i> Animated</span>
        <span className="badge badge-red"><i className="fa-solid fa-heart"></i> Loved</span>
        <span className="badge badge-blue"><i className="fa-solid fa-code"></i> Open API</span>
      </div>

      <h1 className="hero-title">
        Build <span className="highlight">beautiful</span> products
      </h1>
      <p className="hero-subtitle">
        The most colorful, animated, and modern frontend toolkit. Every pixel moves with purpose.
      </p>

      <div className="dots-row">
        <span className="dot dot-green"></span>
        <span className="dot dot-red"></span>
        <span className="dot dot-orange"></span>
        <span className="dot dot-blue"></span>
      </div>

      <div className="actions-row">
        <button className="btn btn-purple">Start for free</button>
        <button className="btn btn-green">See components</button>
        <button className="btn btn-outline">Watch demo</button>
      </div>

      <div className="stats-row">
        <BorderGlow className="stat-card border-purple" backgroundColor="transparent" borderRadius={12}>
          <GlassSurface width="100%" height="100%" borderRadius={12} borderWidth={0} distortionScale={-20} backgroundOpacity={0.03}>
            <div style={{ padding: '1.5rem', width: '100%', height: '100%', boxSizing: 'border-box' }}>
              <i className="fa-solid fa-user-group icon-purple"></i>
              <h3>12k+</h3>
              <p>Users</p>
            </div>
          </GlassSurface>
        </BorderGlow>
        <BorderGlow className="stat-card border-green" backgroundColor="transparent" borderRadius={12}>
          <GlassSurface width="100%" height="100%" borderRadius={12} borderWidth={0} distortionScale={-20} backgroundOpacity={0.03}>
            <div style={{ padding: '1.5rem', width: '100%', height: '100%', boxSizing: 'border-box' }}>
              <i className="fa-solid fa-star icon-yellow"></i>
              <h3>4.9</h3>
              <p>Rating</p>
            </div>
          </GlassSurface>
        </BorderGlow>
        <BorderGlow className="stat-card border-orange" backgroundColor="transparent" borderRadius={12}>
          <GlassSurface width="100%" height="100%" borderRadius={12} borderWidth={0} distortionScale={-20} backgroundOpacity={0.03}>
            <div style={{ padding: '1.5rem', width: '100%', height: '100%', boxSizing: 'border-box' }}>
              <i className="fa-solid fa-laptop icon-gray"></i>
              <h3>50+</h3>
              <p>Components</p>
            </div>
          </GlassSurface>
        </BorderGlow>
        <BorderGlow className="stat-card border-red" backgroundColor="transparent" borderRadius={12}>
          <GlassSurface width="100%" height="100%" borderRadius={12} borderWidth={0} distortionScale={-20} backgroundOpacity={0.03}>
            <div style={{ padding: '1.5rem', width: '100%', height: '100%', boxSizing: 'border-box' }}>
              <i className="fa-regular fa-clock icon-gray"></i>
              <h3>99.9%</h3>
              <p>Uptime</p>
            </div>
          </GlassSurface>
        </BorderGlow>
      </div>

    </section>
  );
}