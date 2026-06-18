import ContactLeft from "../components/ContactLeft";
import ContactRight from "../components/ContactRight";

export default function Contact() {
  
  return (
    <main className="contact-wrapper relative-wrapper relative overflow-hidden z-0">
      <ContactLeft/>
      <ContactRight/>
    </main>
  );
}