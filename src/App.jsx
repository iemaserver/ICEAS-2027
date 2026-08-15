import "./main.scss";
import { Home } from "./pages/Home";
import { KeynoteSpeaker } from "./pages/KeynoteSpeaker.jsx";

import { Scope } from "./pages/Scope.jsx";
import { Registration } from "./pages/Registration.jsx";
import { Publication } from "./pages/Publication.jsx";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// IMAGES
import uemLogoBackground from "./assets/PNG/uemBackgroundLogo.svg";
import uemLogo from "./assets/PNG/uemTransparentLogo.png";


import locationIcon from "./assets/PNG/location_on.jpg";
import hamburger from "./assets/PNG/hamburger.svg";

import { useState } from "react";
import { OrganizingTeam } from "./pages/organisingTeam.jsx";

function Banner({ toggleNav }) {
  return (
    // *********************************************************************
    // BANNER
    <div className="Banner-main">

      {/* UEM LOGO */}
      <div>
        <img
          className="
          h-[50px]
        2xl:h-[106px]
        xl:h-[90px]
        lg:h-[84px]
        lg:flex
        md:h-[60px] md:flex
        sm:h-[50px]
        "
          src="https://ik.imagekit.io/keshav5173/Logo/uemLogo2-removebg-preview.png?updatedAt=1752212758763"
          alt=""
        />
      </div>
     


      

      {/* UEM TEXT */}
      <div className="Banner-wrapper-1-text_and_backgroundLogo_uem ">
        <h1
          className=" text-[#14008F] w-auto text-sm font-bold 
        2xl:w-[35rem] 2xl:text-3xl
        xl:text-2xl xl:w-[26rem]
        lg:text-xl lg:w-[19rem] 
        md:text-sm md:w-[18vw]
        sm:text-sm sm:w-[18vw]
        "
        >
          University Of Engineering and Management Jaipur
        </h1>

        {/* UEM BACKGROUND LOGO */}
        <div className="banner-uemLogoBackground">
          <img className="h-[40px]
        w-40 lg:w-auto
        2xl:h-[90px]
        xl:h-[76px]
        lg:h-[70px]
         lg:flex
         md:h-[60px] md:flex
         sm:h-[50px]" src={uemLogoBackground} alt="" />
        </div>
      </div>

      

      

      {/* HAMBURGER */}
      <div onClick={toggleNav} className="flex lg:hidden">
        <img
          className="
        w-6
        "
          src={hamburger}
          alt=""
        />
      </div>
    </div>
  );
}

// ***************************************************************************
// NAVBAR
function Navbar({ isOpen, toggleNav }) {
  return (
    <div
      className={`
      ${isOpen ? "flex" : "hidden"} 
      Navbar-main 
      2xl:text-xl xl:text-lg lg:text-lg text-sm
      lg:flex
      shadow-lg
    `}
    >
      <div className="container mx-auto flex flex-col lg:flex-row flex-wrap lg:justify-evenly w-full gap-3 md:py-2">
      <div
        onClick={toggleNav}
        className="flex lg:hidden absolute right-3 top-0 text-lg p-2"
      >
        X
      </div>
      <NavLink activeClassName="active" to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/scope" className="nav-link">
        Scope
      </NavLink>
      <NavLink to="/Keynote_Speaker" className="nav-link">
        Keynote Speaker
      </NavLink>
      <NavLink to="/Organising_team" className="nav-link">
        Organising Team
      </NavLink>
      <NavLink to="/Registration" className="nav-link">
        Registration
      </NavLink>



      <NavLink to="/Publication" className="nav-link">
        Publication
      </NavLink>

      <a href="#ContactUs" className="nav-link">
        Contact Us
      </a>
      </div>
    </div>
  );
}

// ***************************************************************************
// CONTACT US
function ContactUs() {
  return (
    <div id="ContactUs" className="contactUs_section w-full">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-start items-start md:justify-between py-8">
        {/* THE FIRST BLOCK CONTAINING THE HEADING PHONE NUMBER EMAIL AND UNIVERSITY LOCATION */}
        <div className="flex flex-col mb-4 lg:mb-0">
          {/* CONTACT US HEADING */}
          <h1
            className=" font-bold 
        2xl:text-5xl 
        xl:text-4xl 
        lg:text-3xl
        lg:mb-1
        xl:mb-2
        mb-2"
          >
            Contact Us
          </h1>

          {/* PHONE NUMBER AND EMAIL */}
          <p className="mb-1 font-bold">Conveners:</p>

          <ul className="list-decimal ml-4">
            <li className="font-bold">Sorav Chakarborty : +91- 9999999999</li>
            <p>someone@gmail.com</p>
            
          </ul>
          
          <p className="mb-2">Conference email : conference@uem.edu.in</p>
          

          {/* UEM JAIPUR LOCATION */}
          <a
            href="https://www.google.com/maps/place/University+of+Engineering+%26+Management+(UEM),+Jaipur/@27.2124649,75.6976676,17z/data=!3m1!4b1!4m6!3m5!1s0x396cffc30dacc2db:0xb78e5c340c935a95!8m2!3d27.2124649!4d75.7002425!16s%2Fm%2F0hhqh8d!5m1!1e2?entry=ttu"
            target="_blank"
            className=" flex justify-center items-center relative"
          >
            {/* <img className="w-[1.5rem]" src={locationIcon} alt="" /> */}
            <p>University of Engineering and Management Jaipur</p>
          </a>
        </div>

        
      </div>
    </div>
  );
}

// ***************************************************************************
// THE APP
function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <BrowserRouter>
      <Banner toggleNav={() => setNavOpen(!navOpen)} />
      <Navbar isOpen={navOpen} toggleNav={() => setNavOpen(!navOpen)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scope" element={<Scope />} />
        <Route path="/Keynote_Speaker" element={<KeynoteSpeaker />} />
        <Route path="/Organising_team" element={<OrganizingTeam />} />

        <Route path="Publication" element={<Publication />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
      <ContactUs />
    </BrowserRouter>
  );
}

export default App;
