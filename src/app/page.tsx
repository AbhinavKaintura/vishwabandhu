import HeaderBar from "@/components/common/header-bar/page";
import NavBar from "@/components/common/nav-bar/page";
import Hero from "@/components/home-comp/hero/page";
import Misson from "@/components/home-comp/mission-section/page";
import ServicesSection from "@/components/home-comp/services-section/page";
import IntroSection from "@/components/home-comp/intro-section/page";
import GauMataDonation from "@/components/gaushala-program/donations/page";
import Join_Human_safety from "@/components/bharat-self-care-team/join-bharat-sct/page"
// import Donations_status from "@/components/home-comp/donations-status/page";
import Footer from "@/components/common/footer/page";


export default function Home() {
  return (
    <div className="bg-gray-50">
      <div className="max-h-screen sm:h-3/5">
        <HeaderBar />
        <NavBar bg_color="bg-white" />
        <Hero />
      </div>
      {/* <Misson /> */}
      <ServicesSection />
      <IntroSection />
      <GauMataDonation />
      <Join_Human_safety />
      {/* <Donations_status/> */}
      <Footer />
    </div>

  );
}
