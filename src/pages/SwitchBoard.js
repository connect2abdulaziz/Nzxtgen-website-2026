import React from "react";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import "./SwitchBoard.css";
import Footer from "../components/Footer";
import WhatsappChat from "../components/WhatsappChat";
import SwitchBoardComponent from "../components/SwitchBoardComponent";
import RecentSwitchboardUpgrade from "../components/RecentSwitchboardUpgrade";

const SwitchBoard = () => {
  return (
    <div>
      <div id="SwitchBoard">
        <SEO 
          title="Switchboard Upgrade Services | Licensed Electricians | NZXTGEN"
          description="Professional switchboard upgrade services for homes and businesses. Licensed electricians ensure safety, compliance and modern electrical systems. Get a free quote."
          canonical={typeof window !== 'undefined' ? window.location.origin + '/switchboard-upgrade' : undefined}
        />
        <WhatsappChat />
        <Navbar/>
        <SwitchBoardComponent/>
        <RecentSwitchboardUpgrade/>
        <Footer/>
      </div>
    </div>
  );
};

export default SwitchBoard;
