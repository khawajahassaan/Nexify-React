import ShapeGrid from './ShapeGrid';

export default function Documentation(){

    return(

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
          <h3 className="subh3">Start building today</h3>
          <p className="subp">Jump in and see why thousands of developers love Nexify.</p>
          <button className="btn btn-purple mt-4">View Documentation</button>
        </section>




    );
}