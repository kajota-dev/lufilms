import { useRef } from "react";
import { HeroSection } from "../components/HeroSection";
import { Services } from "../components/Services";
import { InfiniteCarousel } from "../components/InfiniteCarousel";
import { Testimonials } from "../components/Testimonials";
import { Pricing } from "~/components/Pricing";
import { ContactForm } from "../components/ContactForm";
import { Navbar } from "../components/Navbar";
import Footer from "~/components/Footer";

export function Index() {
  // Creamos la referencia
  const contactRef = useRef<HTMLDivElement>(null);

  // Función para hacer scroll hacia el formulario
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollToContact={scrollToContact} />
      <HeroSection scrollToContact={scrollToContact} />
      <Services />
      {/* <InfiniteCarousel /> */}
      {/* <Testimonials /> */}
      <Pricing />
      
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
