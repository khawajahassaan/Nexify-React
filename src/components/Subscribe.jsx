import ShapeGrid from './ShapeGrid';

export default function Subscribe() {

    return (
        <section className="subscribe relative overflow-hidden z-0">
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

            <h3 className="subh3">
                Ready to build something amazing?
            </h3>
            <p className="subp">Join 12,000+ developers who ship faster with Nexify.</p>

            <div className="sub">
                <input type="email" placeholder="Enter Your Email" className="email-input" />
                <button className="subbtn">Subscribe</button>

            </div>

        </section>
    );

}