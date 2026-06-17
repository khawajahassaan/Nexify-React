import ShapeGrid from './ShapeGrid';

export default function FeaturesShowcase() {

    return(

        <section className="feature-showcase" style={{ position: 'relative', overflow: 'hidden', zIndex: 0 }}>
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
                  
                  <div className="showcase-row">
                      <div className="showcase-text">
                          <div className="feature-icon-box theme-purple-bg">
                              <i className="fa-solid fa-wand-magic-sparkles"></i>
                          </div>
                          <h2>Zero-Config Animations</h2>
                          <p>Stop wrestling with complex animation libraries. Nexify includes a built-in, hardware-accelerated engine that makes every interaction feel silky smooth right out of the box.</p>
                          <ul className="feature-bullet-list">
                              <li><i className="fa-solid fa-check" style={{ color: '#5b4fcf' }}></i> 60fps performance guarantee</li>
                              <li><i className="fa-solid fa-check" style={{ color: '#5b4fcf' }}></i> Spring physics integration</li>
                              <li><i className="fa-solid fa-check" style={{ color: '#5b4fcf' }}></i> Micro-interactions included</li>
                          </ul>
                      </div>
                      <div className="showcase-visual visual-purple">
                          <div className="mock-window">
                              <div className="mock-header"><span className="dot-r"></span><span className="dot-y"></span><span className="dot-g"></span></div>
                              <div className="mock-body">
                                  <div className="mock-skeleton pulse-anim"></div>
                                  <div className="mock-skeleton pulse-anim" style={{ width: '70%' }}></div>
                              </div>
                          </div>
                      </div>
                  </div>
        
                  <div className="showcase-row reverse">
                      <div className="showcase-text">
                          <div className="feature-icon-box theme-green-bg">
                              <i className="fa-solid fa-layer-group"></i>
                          </div>
                          <h2>50+ Pre-built Components</h2>
                          <p>Never build a button from scratch again. Access a massive library of beautifully designed, fully responsive components that you can drop directly into your project.</p>
                          <ul className="feature-bullet-list">
                              {/* Converted style strings to objects */}
                              <li><i className="fa-solid fa-check" style={{ color: '#10b981' }}></i> Accessible by default (WCAG 2.1)</li>
                              <li><i className="fa-solid fa-check" style={{ color: '#10b981' }}></i> Highly customizable tokens</li>
                              <li><i className="fa-solid fa-check" style={{ color: '#10b981' }}></i> Dark mode ready</li>
                          </ul>
                      </div>
                      <div className="showcase-visual visual-green">
                           <div className="mock-components">
                               <button className="btn btn-green shadow-hover">Primary Button</button>
                               <span className="badge badge-orange">Status Pill</span>
                               <div className="mock-input">Focus me...</div>
                           </div>
                      </div>
                  </div>
        
              </section>

    );

}