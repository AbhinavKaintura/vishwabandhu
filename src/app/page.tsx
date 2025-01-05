import Link from "next/link";
import HeaderBar from "@/components/header-bar/page";
import Hero from "@/components/hero/page";
import NavBar from "@/components/nav-bar/page";

export default function Home() {
  return (
    <div>
      
      <HeaderBar/>
      <NavBar/>
      {/* <Hero/> */}

    </div>
    // <div>
    //   This is the home page
    //   <br/>
    //   <div className="m-6 font-semibold bg-yellow-700 text-red-800">
    //     div for s
    //     <Link 
    //       href="./servicesPage"
    //       className="bg-green-300 text-blue-500"
    //     >
    //       Services
    //     </Link>
    //   </div>
    // </div>
    
  );
}
