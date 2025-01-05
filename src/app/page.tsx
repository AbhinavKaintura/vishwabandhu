import HeaderBar from "@/components/header-bar/page";
import NavBar from "@/components/nav-bar/page";
import Hero from "@/components/hero/page";
import Misson from "@/components/mission-section/page";
import ServicesSection from "@/components/services-section/page";
import IntroSection from "@/components/intro-section/page";


export default function Home() {
  return (
    <div>
      
      <HeaderBar/>
      <NavBar/>
      <Hero/>
      <Misson/>
      <ServicesSection/>
      <IntroSection/>

    </div>
    
  );
}
