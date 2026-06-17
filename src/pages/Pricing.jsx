import BorderGlow from '../components/BorderGlow';
import { Plasma } from '../components/Plasma';

export default function PricingPage() {

    return (
        <main className="pricing-main relative-wrapper" style={{ position: 'relative', overflow: 'hidden', zIndex: 0 }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
                <Plasma color="#1967e7" speed={1.5} scale={1.3} />
            </div>
            <section className="pricing-section">

                <h2 className="everything-heading pricing-header">Transparent pricing for everyone</h2>
                <p className="pricing-subtext">Whether you are an indie hacker or a large enterprise, we have a plan for you.</p>

                <div className="price-row pricing-page-row">

                    <BorderGlow className="price-box pricing-page-card starter-box" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
                        <div className="prices">
                            <div className="plan starter">Starter</div>
                            <div className="price-starter">$0</div>
                            <div className="month">per month</div>
                        </div>

                        <div className="list pricing-page-list">
                            <p><i className="fa-solid fa-check" style={{ color: 'rgb(99, 230, 190)' }}></i> 5 Active projects</p>
                            <p><i className="fa-solid fa-check" style={{ color: 'rgb(99, 230, 190)' }}></i> Basic UI components</p>
                            <p><i className="fa-solid fa-check" style={{ color: 'rgb(99, 230, 190)' }}></i> Community forum support</p>
                            <p><i className="fa-solid fa-check" style={{ color: 'rgb(99, 230, 190)' }}></i> 1GB Cloud storage</p>
                            <p><i className="fa-solid fa-check" style={{ color: 'rgb(99, 230, 190)' }}></i> Standard API access</p>
                        </div>

                        <button className="buy starter starterbtn buy-large">
                            Get Started Free
                        </button>
                    </BorderGlow>

                    <BorderGlow className="price-box proborder pricing-page-card pro-card-border" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
                        <div className="popular-badge">Most Popular</div>
                        <div className="prices">
                            <div className="plan pro">Pro</div>
                            <div className="price-pro">$29</div>
                            <div className="month">per month</div>
                        </div>

                        <div className="list pricing-page-list">
                            <p><i className="fa-solid fa-check" style={{ color: '#534ab7' }}></i> Unlimited Projects</p>
                            <p><i className="fa-solid fa-check" style={{ color: '#534ab7' }}></i> Premium UI animations</p>
                            <p><i className="fa-solid fa-check" style={{ color: '#534ab7' }}></i> 24-hour priority support</p>
                            <p><i className="fa-solid fa-check" style={{ color: '#534ab7' }}></i> 50GB Cloud storage</p>
                            <p><i className="fa-solid fa-check" style={{ color: '#534ab7' }}></i> Custom domain integration</p>
                            <p><i className="fa-solid fa-check" style={{ color: '#534ab7' }}></i> Advanced performance analytics</p>
                            <p><i className="fa-solid fa-check" style={{ color: '#534ab7' }}></i> Remove Nexify branding</p>
                        </div>

                        <button className="buy probtn buy-large">
                            Start 14-day Free Trial
                        </button>
                    </BorderGlow>

                    <BorderGlow className="price-box pricing-page-card enterprise-box" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={12}>
                        <div className="prices">
                            <div className="plan enterprise">Enterprise</div>
                            <div className="price-enterprise">$99</div>
                            <div className="month">per month</div>
                        </div>

                        <div className="list pricing-page-list">
                            <p><i className="fa-solid fa-check" style={{ color: '#d85a30' }}></i> Everything in Pro</p>
                            <p><i className="fa-solid fa-check" style={{ color: '#d85a30' }}></i> Custom component design</p>
                            <p><i className="fa-solid fa-check" style={{ color: '#d85a30' }}></i> 99.99% SLA guarantee</p>
                            <p><i className="fa-solid fa-check" style={{ color: '#d85a30' }}></i> Dedicated account manager</p>
                            <p><i className="fa-solid fa-check" style={{ color: '#d85a30' }}></i> Unlimited Cloud storage</p>
                            <p><i className="fa-solid fa-check" style={{ color: '#d85a30' }}></i> SSO & Advanced Security</p>
                        </div>

                        <button className="buy enterprise enterprisebtn buy-large">
                            Contact Sales
                        </button>
                    </BorderGlow>

                </div>
            </section>
        </main>
    );
}