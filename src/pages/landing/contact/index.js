import { FooterComponent } from "src/component/FooterComponent";
import { MainSection } from "./section/MainSection";
import { NavbarComponent } from "src/component/NavbarComponent";
import { ContactSection } from "./section/ContactSection";

export function ContactPage() {
  return (
    <div className="bg-dark-200 min-h-screen text-white">
      <NavbarComponent />
      <MainSection />
      <ContactSection />
      <FooterComponent />
    </div>
  );
}
