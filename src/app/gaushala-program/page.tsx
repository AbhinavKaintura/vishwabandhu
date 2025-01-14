'use client'


import HeaderBar from "@/components/common/header-bar/page"
import Intro from "@/components/gaushala-program/intro-page/page"
import Details from "@/components/gaushala-program/details/page"
import GauMataDonation from "@/components/gaushala-program/donations/page"
import Footer from "@/components/common/footer/page"
import GauMataSlide from '@/components/gaushala-program/images-slide/page'

const gaushala_program = () => {
  return (
    <div className="bg-gray-50">
      <HeaderBar />
      <Intro />
      <Details />
      <GauMataDonation />
      <GauMataSlide />
      <Footer />
    </div>
  )
}

export default gaushala_program