export default function ContactLeft(){

    return(


        <section className="contact-left">
        <div className="left-content">
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