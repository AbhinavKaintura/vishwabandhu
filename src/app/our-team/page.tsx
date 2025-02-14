import React from "react";
import HeaderBar from "@/components/common/header-bar/page";
import Footer from "@/components/common/footer/page";
import NavBar from "@/components/common/nav-bar/page";
import TeamMembers from "@/components/our-team/team-members/page";

const OurTeam = () => {
  return (
    <div>
      <HeaderBar />
      <NavBar bg_color=""/>
      <TeamMembers />
      <Footer />
    </div>
  );
}

export default OurTeam;