import HeaderBar from "@/components/common/header-bar/page";
import NavBar from "@/components/common/nav-bar/page";
import Hero from "@/components/home-comp/hero/page";
import Misson from "@/components/home-comp/mission-section/page";
import ServicesSection from "@/components/home-comp/services-section/page";
import IntroSection from "@/components/home-comp/intro-section/page";
import Footer from "@/components/common/footer/page";


export default function Home() {
  return (
    <div>
      <HeaderBar/>
      <NavBar bg_color="bg-white"/>
      <Hero/>
      <Misson/>
      <ServicesSection/>
      <IntroSection/>
      <Footer/>


    </div>
    
  );
}
