// SwitchBoardComponent.jsx
import React from "react";
import "./SwitchBoardComponent.css";
import { FaRegStickyNote } from "react-icons/fa";

const SwitchBoardComponent = () => {
  return (
    <div className="switchboard-upgrade-container">
      <h1 className="switchboard-upgrade-header">ELECTRICAL SWITCHBOARD UPGRADE</h1>

      <div className="switchboard-upgrade-content">
        
        {/* Left Side */}
        <div className="switchboard-upgrade-left">
          <h2>Electrical Switchboard Upgrade – Why It’s Essential</h2>
          <p>Your switchboard is the ‘control panel’ of your home’s electrical system. If it’s outdated, upgrading is vital for safety, compliance, and efficiency.</p>

          <h3>1. Fire & Shock Hazards</h3>
          <p>Old switchboards are prone to short-circuits, increasing the risk of electric shocks and fires. If yours still uses wire fuses, it’s a serious safety risk. Upgrading to a modern board with circuit breakers and safety switches is essential.</p>

          <h3>2. Not Enough Power</h3>
          <p>Modern homes use far more power—computers, air conditioning, home theatres, pool pumps, etc. If you notice flickering lights or tripping power, your board may be overloaded and due for an upgrade.</p>

          <h3>3. Safety Switches Are Critical</h3>
          <p>New switchboards include safety switches that instantly cut power during faults, reducing the risk of electrocution and electrical fires. Older boards often lack this key protection.</p>

          <h3>4. Meet Current Standards</h3>
          <p>Electrical safety regulations in Australia have evolved. An outdated board might not comply with current standards, which can impact your insurance and household safety. Upgrading ensures compliance.</p>

          <h3>5. Better Efficiency & Lower Bills</h3>
          <p>Modern switchboards distribute power more efficiently, reducing energy waste and lowering your bills. They also support smart systems, solar power, and battery storage, improving sustainability.</p>

          <h3>6. Ready for Home Upgrades</h3>
          <p>If you're planning renovations, adding appliances, or installing an EV charger, an old switchboard may not handle the increased load. Upgrading future-proofs your electrical system.</p>

          <h3>7. Solar Compatible</h3>
          <p>To install solar panels, Australian standards often require an updated switchboard. A modern board ensures compatibility with solar and battery systems, letting you maximise energy savings.</p>

          <h3>8. Fewer Outages</h3>
          <p>Old boards can cause frequent outages and disruptions. A new switchboard provides more stable and reliable power, reducing downtime and inconvenience.</p>

          <p className="switchboard-upgrade-final-text">
            Protect Your Home & Family — upgrading your switchboard is a smart investment in your family’s safety and your home’s future. Contact Nzxtgen Electrical for a professional assessment. 
            We'll test your unit, provide expert advice, and recommend the best upgrade plan. 
            For a free quote by a licensed electrician, complete our online enquiry form, and we will arrange a prompt assessment of your switchboard and electrical requirements.
          </p>
        </div>

        {/* Right Side */}
        <div className="switchboard-upgrade-right">
          <h2>Request an Electrical Quote</h2>
          <p>Please visit our online quote page below.</p>
          <FaRegStickyNote className="switchboard-upgrade-icon" />
          <h3>ELECTRICAL QUOTE</h3>
          <button
  className="switchboard-upgrade-quote-btn"
  onClick={() => window.location.href = '/free-quote'}
>
QUOTE PAGE
</button>
        </div>

      </div>
    </div>
  );
};

export default SwitchBoardComponent;
