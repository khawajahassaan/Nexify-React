import ShapeGrid from './ShapeGrid';

export default function Expertise() {
  return (
    <section className="expertise relative overflow-hidden z-0" id="expertise">
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
      <h2 className="text-center text-[2rem] font-bold text-white !mb-12">Our expertise</h2>

      <div className="language">
        <div className="lang-info">
          <h3 className="lang">HTML &amp; CSS</h3>
          <span className="percent">95%</span>
        </div>
        <div className="bar">
          <div className="bar-fill-purple"></div>
        </div>
      </div>

      <div className="language">
        <div className="lang-info">
          <h3 className="lang">Javascript</h3>
          <span className="percent">90%</span>
        </div>
        <div className="bar">
          <div className="bar-fill-green"></div>
        </div>
      </div>

      <div className="language">
        <div className="lang-info">
          <h3 className="lang">React &amp; Redux</h3>
          <span className="percent">85%</span>
        </div>
        <div className="bar">
          <div className="bar-fill-orange"></div>
        </div>
      </div>

      <div className="language">
        <div className="lang-info">
          <h3 className="lang">UI/UX Design</h3>
          <span className="percent">80%</span>
        </div>
        <div className="bar">
          <div className="bar-fill-pink"></div>
        </div>
      </div>

      <div className="language">
        <div className="lang-info">
          <h3 className="lang">Node.js</h3>
          <span className="percent">72%</span>
        </div>
        <div className="bar">
          <div className="bar-fill-blue"></div>
        </div>
      </div>
    </section>
  );
}