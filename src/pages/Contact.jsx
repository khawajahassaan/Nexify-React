import ContactLeft from "../components/ContactLeft";
import ContactRight from "../components/ContactRight";
import { Plasma } from "../components/Plasma";

export default function Contact() {
  
  return (
    <main className="contact-wrapper relative-wrapper" style={{ position: 'relative', overflow: 'hidden', zIndex: 0 }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
        <Plasma color="#1967e7" speed={1.5} scale={1.3} />
      </div>
      <ContactLeft/>
      <ContactRight/>
    </main>
  );
}