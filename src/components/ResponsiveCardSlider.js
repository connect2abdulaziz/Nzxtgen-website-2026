import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ResponsiveCardSlider.css';

import img1 from "../assets/servicePage/1.jpg";
import img2 from "../assets/servicePage/2.jpg";
import img3 from "../assets/servicePage/3.jpg";
import img4 from "../assets/servicePage/4.jpg";
import img5 from "../assets/servicePage/5.JPG";
import img6 from "../assets/servicePage/6.jpg";
import img7 from "../assets/servicePage/7.jpg";
import img8 from "../assets/servicePage/8.jpg";
import img9 from "../assets/servicePage/9.jpg";
import img10 from "../assets/servicePage/10.jpg";
import img11 from "../assets/servicePage/11.jpg";
import img12 from "../assets/servicePage/12.jpg";
import img13 from "../assets/servicePage/13.jpg";
import img14 from "../assets/servicePage/14.jpg";
import img15 from "../assets/servicePage/15.jpg";
import img16 from "../assets/servicePage/16.jpg";
import img17 from "../assets/servicePage/17.png";
import img18 from "../assets/servicePage/18.jpg";
import img19 from "../assets/servicePage/19.jpg";
import img20 from "../assets/servicePage/20.jpg";
import img21 from "../assets/servicePage/21.jpg";
import img22 from "../assets/servicePage/22.jpg";
import img23 from "../assets/servicePage/23.jpg";
import img24 from "../assets/servicePage/24.jpg";
import img25 from "../assets/servicePage/25.jpg";
import img26 from "../assets/servicePage/26.jpg";
import img27 from "../assets/servicePage/27.jpg";
import img28 from "../assets/servicePage/28.png";
import img29 from "../assets/servicePage/29.jpg";
import img30 from "../assets/servicePage/30.jpg";
import img31 from "../assets/servicePage/31.jpg";
import img32 from "../assets/servicePage/32.jpg";
import img33 from "../assets/servicePage/33.jpg";
import img34 from "../assets/servicePage/34.jpg";
import img35 from "../assets/servicePage/35.jpg";
import img36 from "../assets/servicePage/36.webp";
import img37 from "../assets/servicePage/37.jpg";
import img38 from "../assets/servicePage/38.webp";
import img39 from "../assets/servicePage/39.webp";
import img40 from "../assets/servicePage/40.webp";
import img41 from "../assets/servicePage/41.jpg";
import img42 from "../assets/servicePage/42.webp";
import img43 from "../assets/servicePage/43.webp";

const items = [
  { img: img1, title: 'EV Car Chargers', description: 'Quick & Fast Charging Options Available' },
  { img: img2, title: 'Smoke Alarms', description: 'Smoke Alarms With Battery Backup', link: '/smoke-alarms-electrical-safety-checks' },
  { img: img3, title: 'Speaker Mounting & Installation', description: 'Wall & Ceilings Mounts / Surface & Flush Mounts' },
  { img: img4, title: 'Downlights', description: 'Switchable 3000k, 4000k, 6000k & Option To Smart Control' },
  { img: img5, title: 'Home Control With Smartphone or Tablet', description: 'Control & Monitor Your Home Remotely With Your Smartphone or Tablet' },
  { img: img6, title: 'Data Patch Panels & Switches', description: 'Centralise All Your Data Points To One Place' },
  { img: img7, title: 'Data Points', description: 'Cat 5,6,7 / Extension & Internet Ports' },
  { img: img8, title: 'Sensors', description: 'Pir Sensor, Motion Sensor, Day & Night Sensor (lights), Temp Sensor' },
  { img: img9, title: 'Switches', description: 'Smart Switches, 2way, 3way+ more' },
  { img: img10, title: 'Powerpoints', description: 'Internal & External With USB Fast Charge' },
  { img: img11, title: 'Led Strip Lighting', description: 'Kitchen, Signage, Bathroom, Recessed Shelves Etc.' },
  { img: img12, title: 'Outdoor Lighting', description: 'On Switch, Sensor, Timer Or Smart Control' },
  { img: img13, title: 'Intercom', description: 'Video Calling, Remote Access, Smart Phone Integration' },
  { img: img14, title: 'RGB Downlights', description: 'Smart Controlled, Remote Controlled, Multi Controlled' },
  { img: img15, title: 'CCTV', description: 'Coloured Night Vision, Motion Detection, Remote Access, 4K, 1080p' },
  { img: img16, title: 'TV Mounting & Installation', description: 'Hidden & Organised Cable Management' },
  { img: img17, title: 'Video & Audio Cabling', description: 'Long Range Cabling, Wireless, Bluetooth' },
  { img: img18, title: 'Alarms', description: 'Remote Monitoring, Smartphone Integration' },
  { img: img19, title: 'Wall Chasing', description: 'New Builds & Renovations' },
  { img: img20, title: 'A/C Cabling & Connections', description: 'Run & Connect Power To A/C Units' },
  { img: img21, title: 'Bathroom IXL Units', description: 'Now With New Cool Fan, Heat Fan Options & Smart Control' },
  { img: img22, title: 'Antenna & Coax', description: 'Free To Air Antenna Install & Coax Cabling' },
  { img: img23, title: 'Gate Connections', description: 'Run & Connect Power To Gate Motors' },
  { img: img24, title: 'Maintenance & Service', description: 'Preventive Maintenance & Inspections' },
  { img: img25, title: 'Kitchen Appliances', description: 'In Built & Free Standing Ovens, Grills, Range Hoods Etc.' },
  { img: img26, title: 'Renovations', description: 'Repair, Rewire, Renew' },
  { img: img27, title: 'Emergency & Exits', description: 'Lighting For Emergency & Exits' },
  { img: img28, title: 'Grannyflat', description: 'Granny Flat Mains Wiring & Internal Wiring' },
  { img: img29, title: 'Mountable Server Racks', description: 'Mount & Cable Server Racks' },
  { img: img30, title: 'Voice Control Home', description: 'Voice Control Your Lights, Garage Door, Curtains & Setup Short Phrased Commands' },
  { img: img31, title: 'Single, Dual & 3 Phases Connections & Outlets', description: 'Industrial Outlets' },
  { img: img32, title: 'Water Heater Connections', description: 'Water Heater Cabling & Connections' },
  { img: img33, title: 'Garage', description: 'Garage Cabling & Connections' },
  { img: img34, title: 'Kitchen Lighting', description: 'Kitchen Lighting' },
  { img: img35, title: 'New Builds', description: 'Wire From Scratch With Smart Controls' },
  { img: img36, title: 'Touch Control Panel (Smart Home)', description: 'Control & Monitor Your Home From One Place, To Do List & Reminders' },
  { img: img37, title: 'Ceiling Fans', description: 'Ceiling & Wall Mounted, Retractable & Non Retractable Blades' },
  { img: img38, title: 'Strata', description: 'Replacements, Maintenance, Fault Finding, Repairs' },
  { img: img39, title: 'Outdoor Area', description: 'Lightings, Fans, Speakers, Appliances' },
  { img: img40, title: 'Pergola', description: 'Various Lightings' },
  { img: img41, title: 'Customer Mains', description: 'Renew, Replace, Relocate' },
  { img: img42, title: 'Main Service Fuses', description: 'Renew, Replace, Relocate' },
  { img: img43, title: 'NBN', description: 'Expertise & Knowledge' },
];

const ResponsiveCardSlider = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (title) => {
    setFavorites((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const isFavorite = (title) => favorites.includes(title);

  return (
    <div className="responsive-card-slider">
      <h2 className="slider-title">Our Signature Services</h2>

      {/* Desktop View */}
      <div className="desktop-view">
        {items.map((item, index) => {
          const CardContent = (
            <>
              <div className="card-img-wrapper">
                <img src={item.img} alt={item.title} className="card-img" />
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </>
          );
          
          return (
            <div key={index} className="card">
              {item.link ? (
                <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {CardContent}
                </Link>
              ) : (
                CardContent
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile View */}
      <div className="mobile-view">
        {items.map((item, index) => {
          const CardContent = (
            <div className="card-img-wrapper">
              <img src={item.img} alt={item.title} className="card-img" />
              <h3 className="card-title">{item.title}</h3>
              {/*<div
                className={`favorite-icon ${isFavorite(item.title) ? 'active' : ''}`}
                onClick={() => toggleFavorite(item.title)}
              >
                ♥
              </div>*/}
            </div>
          );
          
          return (
            <div key={index} className="card mobile-card">
              {item.link ? (
                <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  {CardContent}
                </Link>
              ) : (
                CardContent
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResponsiveCardSlider;
