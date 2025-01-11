import NavBar from "@/components/nav-bar/page"
import HeaderBar from "@/components/header-bar/page"
import Image from 'next/image'
import bg_image from '../../../public/human_safety_program_bg.jpeg'
import HumanSafetyInfo from "@/components/human-safety-program/info/page"
import ProgramInfo from "@/components/human-safety-program/more_details/page"
import Footer from "@/components/footer/page"

const human_safey_program = () => {
    return (
        <div>
           <HeaderBar />
           <NavBar bg_color="bg-[#fff8ef]"/>
            <h1 className="tracking-widest text-5xl bg-[#8f7f67]  h-36 font-serif pt-11 pl-32 text-white">HUMAN SEFETY PROGRAM</h1>
            <p className="text-right pt-4 pr-5 text-xl tracking-widest h-14 bg-[#524737] text-white font-bold font-caveat">Join our Human Safety Program now and prebook a secure future for your family</p>
            <HumanSafetyInfo />
            <ProgramInfo />
            <Footer />
        </div>
    )
}

export default human_safey_program
