import { FooterComponent } from "src/component/FooterComponent";
import { MainSection } from "./section/MainSection";
import { NavbarComponent } from "src/component/NavbarComponent";
import { OurTeamSection } from "./section/OurTeamSection";

export function AboutPage() {
  return (
    <div className="bg-dark-200 min-h-screen text-white">
      <NavbarComponent />
      <MainSection />
      <OurTeamSection />
      <FooterComponent />
    </div>
  );
}
