import ShapeGrid from './ShapeGrid';

export default function Documentation(){

    return(

        <section className="subscribe" style={{ position: 'relative', overflow: 'hidden', zIndex: 0 }}>
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
          <h3 className="subh3">Start building today</h3>
          <p className="subp">Jump in and see why thousands of developers love Nexify.</p>
          <button className="btn btn-purple" style={{ marginTop: '1rem' }}>View Documentation</button>
        </section>




    );
}