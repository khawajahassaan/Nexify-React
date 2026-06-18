import LightPillar from "./LightPillar";

export default function ContactLeft(){

    return(


        <section className="contact-left relative overflow-hidden z-0">
        <div className="absolute inset-0 w-full h-full -z-10">
          <LightPillar
            topColor="#3b82f6"
            bottomColor="#a855f7"
            intensity={1.2}
            rotationSpeed={0.3}
            glowAmount={0.01}
            pillarWidth={3.0}
            pillarHeight={0.4}
            noiseIntensity={0.2}
            pillarRotation={45}
            interactive={false}
            mixBlendMode="screen"
            quality="low"
          />
        </div>
        <div className="left-content relative z-10 pt-20">
          <div className="company-logo">
              <i className="fa-solid fa-bolt icon-yellow"></i>
              <span>Nexify</span>
          </div>

          <h2 className="testimonial-text">
              "The most colorful, animated, and modern frontend toolkit. Every pixel moves with purpose."
          </h2>

          <div className="profiles-row">
              <div className="profile faded">
                  <div className="pfp orange-pfp">SK</div>
                  <div className="profile-info">
                      <span className="name">Sameed Ahmed Khan</span>
                      <span className="title">Junior Frontend Developer</span>
                  </div>
              </div>

              <div className="profile active">
                  <div className="pfp blue-pfp">JA</div>
                  <div className="profile-info">
                      <span className="name">Junaid Ahmed</span>
                      <span className="title">Founder & CEO</span>
                  </div>
              </div>

              <div className="profile faded">
                  <div className="pfp green-pfp">KT</div>
                  <div className="profile-info">
                      <span className="name">Khawaja Hassaan Tariq</span>
                      <span className="title">Intern Software Developer</span>
                  </div>
              </div>
          </div>
        </div>
      </section>
    
    );




}