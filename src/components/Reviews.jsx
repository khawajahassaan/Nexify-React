import BorderGlow from './BorderGlow';
import ShapeGrid from './ShapeGrid';

export default function Reviews() {

    return (

        <section className="review relative overflow-hidden z-0" id="review">
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

            <h2 className="text-center text-[2rem] font-bold text-white !mb-12">What people say</h2>

            <div className="review-row">
                <BorderGlow className="review-box" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>

                    <div className="blue-star">
                        <i className="fa-etch fa-solid fa-star"></i>
                        <i className="fa-etch fa-solid fa-star"></i>
                        <i className="fa-etch fa-solid fa-star"></i>
                        <i className="fa-etch fa-solid fa-star"></i>
                        <i className="fa-etch fa-solid fa-star"></i>
                    </div>

                    <p>"Animations are silky smooth. Clients were blown away on first demo."</p>

                    <div className="author">

                        <h3 className="blue-pfp">AK</h3>
                        <div className="auth-details">
                            <span className="name">Ali Khan</span>
                            <span className="designation">Frontend dev</span>
                        </div>
                    </div>

                </BorderGlow>

                <BorderGlow className="review-box" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>

                    <div className="green-star">
                        <i className="fa-etch fa-solid fa-star"></i>
                        <i className="fa-etch fa-solid fa-star"></i>
                        <i className="fa-etch fa-solid fa-star"></i>
                        <i className="fa-etch fa-solid fa-star"></i>
                        <i className="fa-etch fa-solid fa-star"></i>
                    </div>

                    <p>"Saved us weeks of work. Clean code and great docs throughout."</p>

                    <div className="author">

                        <h3 className="green-pfp">SR</h3>
                        <div className="auth-details">
                            <span className="name">Sara Raza</span>
                            <span className="designation">UI designer</span>
                        </div>
                    </div>

                </BorderGlow>

                <BorderGlow className="review-box" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>

                    <div className="orange-star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>

                    <p>"The color system and hover effects are absolutely stunning."</p>

                    <div className="author">

                        <h3 className="orange-pfp">AK</h3>
                        <div className="auth-details">
                            <span className="name">Omar Baig</span>
                            <span className="designation">Product manager</span>
                        </div>
                    </div>

                </BorderGlow>
            </div>

        </section>

    );

}