import Footer from "@/components/common/footer/page";
import HeaderBar from "@/components/common/header-bar/page";
import NavBar from "@/components/common/nav-bar/page";
import Pay_Donate_Gaushala from "@/components/gaushala-program/pay-donate-gaushala/page";
import React from "react";

const Donate_Gaushala_Program = () => {
    return (
        <div>
            <HeaderBar />
            <NavBar bg_color=""/>
            <Pay_Donate_Gaushala />
            <Footer />

        </div>
    );
}

export default Donate_Gaushala_Program;