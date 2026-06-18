import BorderGlow from './BorderGlow';
import ShapeGrid from './ShapeGrid';
import CircularDOMGallery from './CircularDOMGallery';

export default function Everything() {
  return (
    <section className="everything relative overflow-hidden z-0">
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
      <h2 className="text-center text-[2rem] font-bold text-white !mb-12">Everything You Need</h2>

      <div style={{ height: '400px', position: 'relative', width: '100%' }}>
        <CircularDOMGallery bend={3} scrollSpeed={1.5} scrollEase={0.1} itemWidth={300} itemHeight={250}>
          <BorderGlow className="item-card h-full" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
            <span className="item item-purple !w-20 !h-20 !text-5xl !mb-6">🎨</span>
            <h3 className="item-heading !text-2xl !mb-3">Custom themes</h3>
            <p className="item-desc !text-lg !leading-relaxed">Fully customizable design tokens.</p>
          </BorderGlow>

          <BorderGlow className="item-card h-full" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
            <span className="item item-green !w-20 !h-20 !text-5xl !mb-6">⚡</span>
            <h3 className="item-heading !text-2xl !mb-3">Blazing fast</h3>
            <p className="item-desc !text-lg !leading-relaxed">Zero layout thrash, 50ms load.</p>
          </BorderGlow>

          <BorderGlow className="item-card h-full" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
            <span className="item item-orange !w-20 !h-20 !text-5xl !mb-6">📱</span>
            <h3 className="item-heading !text-2xl !mb-3">Responsive</h3>
            <p className="item-desc !text-lg !leading-relaxed">Mobile-first on every screen.</p>
          </BorderGlow>

          <BorderGlow className="item-card h-full" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
            <span className="item item-red !w-20 !h-20 !text-5xl !mb-6">❤️</span>
            <h3 className="item-heading !text-2xl !mb-3">Accessible</h3>
            <p className="item-desc !text-lg !leading-relaxed">WCAG 2.1 compliant out of box.</p>
          </BorderGlow>

          <BorderGlow className="item-card h-full" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
            <span className="item item-blue !w-20 !h-20 !text-5xl !mb-6">☁️</span>
            <h3 className="item-heading !text-2xl !mb-3">Cloud ready</h3>
            <p className="item-desc !text-lg !leading-relaxed">Deploy anywhere in one click.</p>
          </BorderGlow>

          <BorderGlow className="item-card h-full" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
            <span className="item item-oranger !w-20 !h-20 !text-5xl !mb-6">📊</span>
            <h3 className="item-heading !text-2xl !mb-3">Analytics</h3>
            <p className="item-desc !text-lg !leading-relaxed">Built-in usage and performance.</p>
          </BorderGlow>
        </CircularDOMGallery>
      </div>
    </section>
  );
}