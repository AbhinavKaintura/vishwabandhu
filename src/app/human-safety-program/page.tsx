import NavBar from "@/components/nav-bar/page"
import HeaderBar from "@/components/header-bar/page"
import Image from 'next/image'
import blue_sky from '../../../public/blue_sky.jpg'

const human_safey_program = () => {
    return (
        <div className="bg-white h-screen">
            <HeaderBar />
            <NavBar />
            <Image src={blue_sky} alt="this is blue sky" className="h-40"></Image>
        </div>
    )
}

export default human_safey_program