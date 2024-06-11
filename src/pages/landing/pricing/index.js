import { FooterComponent } from "src/component/FooterComponent";
import { MainSection } from "./section/MainSection";
import { NavbarComponent } from "src/component/NavbarComponent";
import { PricingSection } from "./section/PricingSection";

export function PricingPage() {
  return (
    <div className="bg-dark-200 min-h-screen text-white">
      <NavbarComponent />
      <MainSection />
      <PricingSection />
      <FooterComponent />
    </div>
  );
}
