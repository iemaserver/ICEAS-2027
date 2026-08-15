import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import uemLogo from "../assets/PNG/uemBackgroundLogo.svg";
import { OrganisingTeam_card_component } from "../components/OrganisingTeam_card_component";

export const OrganizingTeam = () => {


  return (
    <div className="flex flex-col lg:py-16 py-10 container mx-auto">
      {/* FIXED BACKGROUND LOGO - stays centered & stable on scroll */}
      <img
        src={uemLogo}
        alt=""
        aria-hidden="true"
        className="
          fixed
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[50%]
          max-w-[300px]
          opacity-1
          pointer-events-none
          select-none
          -z-10
        "
      />
      <div>
        {/* <h1 className="text-lg lg:text-5xl font-bold mb-4 lg:mb-10">
          Advisory Board
        </h1> */}
        
        <h1 className="text-lg lg:text-5xl font-bold mt-1 mb-4 lg:mb-10 lg:mt-1 2xl:mb-16">
          Organising Team
        </h1>
      </div>

      {/* THE ORGANIZING TEAM SECTION */}
      <div className=" flex flex-col items-center">
        {/* SATYAJIT CHAKRABARTI, alex and Banani */}
        <div className="mb-10 flex flex-row gap-6 flex-wrap justify-center">
          <OrganisingTeam_card_component
            image=""
            name="Assitant Prof. Sorav Chakrabarti"
            line1="line 1"
            line2="line 2"
            line3="line 3"
          />
          
        </div>
      </div>
      {/*Organising Team Table*/}

      
    </div>
  );
};