import ContactLeft from "../components/ContactLeft";
import ContactRight from "../components/ContactRight";
import StaggeredMenu from "../components/StaggeredMenu";

export default function Contact() {
  
  const faqItems = [
    { label: 'How long does a project take?', answer: 'Typically between 2 to 4 weeks depending on the complexity of the design and the required animations.' },
    { label: 'Do you provide ongoing support?', answer: 'Yes! We offer dedicated maintenance and 24-hour priority support for all our Pro and Enterprise clients.' },
    { label: 'Can I use my own domain?', answer: 'Absolutely. We seamlessly integrate custom domains and configure all DNS settings for you.' },
    { label: 'What tech stack do you use?', answer: 'We primarily build with React, TailwindCSS, and GSAP for ultra-smooth, high-performance web experiences.' },
    { label: 'Is hosting included?', answer: 'Hosting is included in our Pro and Enterprise plans. Starter plans require separate hosting arrangements.' }
  ];

  return (
    <>
      <main className="contact-wrapper relative-wrapper relative overflow-hidden z-0">
        <ContactLeft/>
        <ContactRight/>
      </main>
      <StaggeredMenu
        position="right"
        items={faqItems}
        displaySocials={false}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={['#B497CF', '#5227FF']}
        accentColor="#5227FF"
        isFixed={true}
      />
    </>
  );
}