import BorderGlow from './BorderGlow';
import ShapeGrid from './ShapeGrid';

export default function Pricing() {

    return (

        <section className="pricing relative overflow-hidden z-0" id="pricing">
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

            <h2 className="text-center text-[2rem] font-bold text-white !mb-12">Simple Pricing</h2>

            <div className="price-row">

                <BorderGlow className="price-box starter-box" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>

                    <div className="prices">
                        <div className="plan starter">Starter</div>
                        <div className="price-starter">$0</div>
                        <div className="month">per month</div>
                    </div>

                    <div className="list">

                        <p><i className="fa-solid fa-check text-[#63e6be]"></i> 5 projects</p>
                        <p><i className="fa-solid fa-check text-[#63e6be]"></i> Basic components</p>
                        <p><i className="fa-solid fa-check text-[#63e6be]"></i> Community support</p>

                    </div>

                    <button className="buy starter starterbtn">
                        Get Started Free
                    </button>


                </BorderGlow>

                <BorderGlow className="price-box proborder" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>

                    <div className="prices">
                        <div className="plan pro">Pro</div>
                        <div className="price-pro">$29</div>
                        <div className="month">per month</div>
                    </div>

                    <div className="list">

                        <p><i className="fa-solid fa-check text-[#534ab7]"></i> Unlimited Projects</p>
                        <p><i className="fa-solid fa-check text-[#534ab7]"></i> All animations</p>
                        <p><i className="fa-solid fa-check text-[#534ab7]"></i> Priority support</p>

                    </div>

                    <button className="buy probtn">
                        Get Started Pro
                    </button>


                </BorderGlow>

                <BorderGlow className="price-box enterprise-box" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>

                    <div className="prices">
                        <div className="plan enterprise">Enterprise</div>
                        <div className="price-enterprise">$99</div>
                        <div className="month">per month</div>
                    </div>

                    <div className="list">

                        <p><i className="fa-solid fa-check text-[#d85a30]"></i> Custom branding</p>
                        <p><i className="fa-solid fa-check text-[#d85a30]"></i> SLA guarantee</p>
                        <p><i className="fa-solid fa-check text-[#d85a30]"></i> Dedicated manager</p>

                    </div>

                    <button className="buy enterprise enterprisebtn">
                        Contact Sales
                    </button>

                </BorderGlow>
            </div>

        </section>

    );


}