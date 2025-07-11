import React from "react";
import Navbar from "../components/Navbar";
import "./SwitchBoard.css";

import Footer from "../components/Footer";
import WhatsappChat from "../components/WhatsappChat";
import SwitchBoardComponent from "../components/SwitchBoardComponent";
import RecentSwitchboardUpgrade from "../components/RecentSwitchboardUpgrade";



const SwitchBoard= () => {
  

  return (
    <div>
      <div id="SwitchBoard">
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
