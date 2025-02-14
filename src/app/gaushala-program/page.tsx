'use client'


import HeaderBar from "@/components/common/header-bar/page"
import NavBar from "@/components/common/nav-bar/page"
import Intro from "@/components/gaushala-program/intro-page/page"
import Details from "@/components/gaushala-program/details/page"
import GauMataDonation from "@/components/gaushala-program/donations/page"
import Footer from "@/components/common/footer/page"
import GauMataSlide from '@/components/gaushala-program/images-slide/page'
import ViewDonors from "@/components/gaushala-program/view-donors/page"

const gaushala_program = () => {
  return (
    <div className="bg-gray-50">
      <HeaderBar />
      <NavBar bg_color="bg-[#fff8ef]" />
      <GauMataSlide />
      <Intro />
      <Details />
      <GauMataDonation />
      <ViewDonors />
      <Footer />
    </div>
  )
}

export default gaushala_program