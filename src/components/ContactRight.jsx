import ShapeGrid from "./ShapeGrid";

export default function ContactRight(){
    
      const showAlert = (event) => {
    event.preventDefault(); 
    alert("Message sent! Our team will get back to you shortly.");
    };
    return(

        <section className="contact-right relative overflow-hidden z-0">
          <div className="absolute inset-0 w-full h-full -z-10">
            <ShapeGrid 
              direction="diagonal" 
              speed={0.5} 
              squareSize={60} 
              shape="square" 
              borderColor="rgba(255,255,255,0.03)" 
              hoverFillColor="rgba(255,255,255,0.06)"
            />
          </div>
          <div className="right-content relative z-10 pt-36">
              <span className="support-label">SUPPORT</span>
              <h1 className="contact-heading">Contact Us</h1>
              <p className="contact-subtitle">Reach out to us, and our team will get back to you promptly.</p>

              <div className="contact-card">
                  <div className="card-header">
                      <i className="fa-solid fa-envelope" style={{ color: '#10b981' }}></i>
                      <a href="mailto:support@nexify.com">support@nexify.com</a>
                  </div>

                  <form className="contact-form" onSubmit={showAlert}>
                      <div className="input-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" id="name" placeholder="John Doe" />
                      </div>

                      <div className="input-group">
                          <label htmlFor="email">Email</label>
                          <input type="email" id="email" placeholder="john@example.com" />
                      </div>

                      <div className="input-group">
                          <label htmlFor="message">How we can help?</label>
                          <textarea id="message" rows="4" placeholder="Write your message here..."></textarea>
                      </div>

                      <button type="submit" className="btn btn-purple form-submit">
                          Send Message <i className="fa-solid fa-arrow-right"></i>
                      </button>
                  </form>
              </div>
          </div>
      </section>


    );



}