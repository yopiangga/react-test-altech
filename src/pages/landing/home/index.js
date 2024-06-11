import { ContactSection } from "./section/ContactSection";
import { FooterComponent } from "src/component/FooterComponent";
import { MainSection } from "./section/MainSection";
import { NavbarComponent } from "src/component/NavbarComponent";
import { ReviewSection } from "./section/ReviewSection";
import { PartnerSection } from "./section/PartnerSection";
import { AboutSection } from "./section/AboutSection";

export function HomePage() {
  return (
    <div className="bg-dark-200 min-h-screen text-white">
      <NavbarComponent />
      <MainSection />
      <AboutSection />
      <ReviewSection />
      <PartnerSection />
      <ContactSection />
      <FooterComponent />
    </div>
  );
}
