import BorderGlow from './BorderGlow';
import ShapeGrid from './ShapeGrid';

export default function Pricing() {

    return (

        <section className="pricing" id="pricing" style={{ position: 'relative', overflow: 'hidden', zIndex: 0 }}>
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

            <h2 className="everything-heading">Simple Pricing</h2>

            <div className="price-row">

                <BorderGlow className="price-box starter-box" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>

                    <div className="prices">
                        <div className="plan starter">Starter</div>
                        <div className="price-starter">$0</div>
                        <div className="month">per month</div>
                    </div>

                    <div className="list">

                        <p><i className="fa-solid fa-check" style={{ color: 'rgb(99, 230, 190)' }}></i> 5 projects</p>
                        <p><i className="fa-solid fa-check" style={{ color: 'rgb(99, 230, 190)' }}></i> Basic components</p>
                        <p><i className="fa-solid fa-check" style={{ color: 'rgb(99, 230, 190)' }}></i> Community support</p>

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

                        <p><i className="fa-solid fa-check" style={{ color: '#534ab7' }}></i> Unlimited Projects</p>
                        <p><i className="fa-solid fa-check" style={{ color: '#534ab7' }}></i> All animations</p>
                        <p><i className="fa-solid fa-check" style={{ color: '#534ab7' }}></i> Priority support</p>

                    </div>

                    <button className="buy probtn">
                        Start 14-Day Free Trial
                    </button>


                </BorderGlow>

                <BorderGlow className="price-box enterprise-box" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>

                    <div className="prices">
                        <div className="plan enterprise">Enterprise</div>
                        <div className="price-enterprise">$99</div>
                        <div className="month">per month</div>
                    </div>

                    <div className="list">

                        <p><i className="fa-solid fa-check" style={{ color: '#d85a30' }}></i> Custom branding</p>
                        <p><i className="fa-solid fa-check" style={{ color: '#d85a30' }}></i> SLA guarantee</p>
                        <p><i className="fa-solid fa-check" style={{ color: '#d85a30' }}></i> Dedicated manager</p>

                    </div>

                    <button className="buy enterprise enterprisebtn">
                        Contact Sales
                    </button>

                </BorderGlow>
            </div>

        </section>

    );


}