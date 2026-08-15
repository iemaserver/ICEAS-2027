// IMAGES
// import uemLogoBackground from "../assets/PNG/uemBackgroundLogo.svg"
// import uemLogo from "../assets/PNG/uemLogo2-removebg-preview.png"
import hawaMahal from "../assets/PNG/hawaMahal.jpg";
import jalMahal from "../assets/PNG/jalMahal.jpg";
import uemImage from "../assets/PNG/uemImage.webp";
import locationIcon from "../assets/PNG/location_on.jpg";
import uemLogo from "../assets/PNG/uemBackgroundLogo.svg";
// import downArrow from "../assets/PNG/downArrow.png"
// import image1 from "../assets/PNG/2023_Event_Images/2023-image1.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CHAKRA UI
import { Table, Tbody, Tr, Td, Th, TableContainer } from "@chakra-ui/react";

import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Home = () => {
  const [autoWidth, setAutoWidth] = useState("43rem");

  // ---- LETTER FLIP ANIMATION SETUP ----
  const staticPrefix = "International Conference On Intelligent Computing, ";
  const flipText = "Explainable AI and Autonomous System";

  const letterRefs = useRef([]);
  letterRefs.current = []; // reset on every render so refs stay in sync with the split text

  const addLetterRef = (el) => {
    if (el && !letterRefs.current.includes(el)) {
      letterRefs.current.push(el);
    }
  };

  useEffect(() => {
  const targets = letterRefs.current.filter(
    (el) => el && el.dataset.char !== " "
  );

  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 2,
  });

  tl.set(targets, { color: "#FFFFFF", transformPerspective: 400, rotateX: 0 })
    .to(targets, {
      rotateX: 180, // flip halfway — letter appears edge-on/mirrored at the peak
      color: "#FFEA00",
      duration: 0.6,
      ease: "power2.inOut",
      stagger: 0.04,
    })
    .to(targets, {
      rotateX: 360, // continue to a full rotation so the letter lands right-side-up again
      color: "#FFFFFF",
      duration: 0.6,
      ease: "power2.inOut",
      stagger: 0.04,
    }, "-=0.2");

  return () => tl.kill();
}, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1490) {
        setAutoWidth("38rem");
      }

      if (window.innerWidth < 1380) {
        setAutoWidth("35rem");
      }
      if (window.innerWidth < 1198) {
        setAutoWidth("31rem");
      }
      if (window.innerWidth < 1102) {
        setAutoWidth("27rem");
      }
      if (window.innerWidth > 1542) {
        setAutoWidth("43rem");
      }
    }

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // SETTINGS FOR THE CAROUSEL
  let settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "homePageCarousel",
    autoplay: true,
    lazyLoad: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
  };

  return (
    <div className="Home-main">
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
      {/* WRAPPER OVER THE CAROUSOUL AND THE WRITING */}
      <div>
        {/* THE WRITING OVER THE CAROUSOUL AND THE BLACK OVERLAY*/}
        <div className="Home-main-wrapper-2-writing_over_carousel_and_black_overlay 2xl:px-32 xl:px-16 lg:px-8">
          {/* THE MAIN HEADING */}
          <h1
            className="text-lg xl:text-7xl
          lg:text-5xl font-bold xl:mb-2"
          >
            ICEAS
          </h1>

          {/* THE FULL FORM */}
          <h3
            className=" 
          text-sm
          w-full
          max-w-full
          2xl:text-3xl
          xl:text-2xl
          2xl:w-[56rem]
          xl:w-[45rem] 
          xl:mb-4
          lg:text-xl
          lg:w-[38rem]"
            style={{ perspective: "400px" }}
          >
            {staticPrefix}
            {flipText.split("").map((char, index) => (
              <span
                key={index}
                ref={addLetterRef}
                data-char={char}
                style={{
                  display: "inline-block",
                  whiteSpace: char === " " ? "pre" : "normal",
                }}
              >
                {char}
              </span>
            ))}
          </h3>

          {/* THE COLLEGE LOCATION AND NAME */}
          <div className=" flex justify-center items-center relative right-2">
            {/* THE LOCATION ICON */}
            {/* <img className=" w-[2.2rem]" src={locationIcon} alt="" /> */}

            {/* THE UNIVERSITY NAME */}
            <p className=" xl:text-xl lg:text-base">
              University of Engineering And Management Jaipur
            </p>
          </div>

          {/* DATE */}
          <h3
            className=" 
          2xl:text-3xl
          xl:text-2xl
          2xl:w-[56rem]
          xl:w-[45rem] 
          xl:mt-2
          lg:text-xl
          lg:w-[38rem]"
          >
            15-17 April 2027, Hybrid mode
          </h3>
        </div>

        {/* THE CAROUSOUL */}
        <div className="">
          <Slider {...settings}>
            <div>
              <img
                className="relative bottom-0 lg:bottom-[18rem]"
                src={uemImage}
                alt=""
              />
            </div>

            <div>
              <img
                className="relative bottom-0 lg:bottom-[6rem]"
                src={hawaMahal}
                alt=""
              />
            </div>

            <div>
              <img
                className="relative bottom-0 lg:bottom-[8rem]"
                src={jalMahal}
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>

      {/* ************************************************************ *************/}

      {/* THE ABOUT US SECTION AND THE IMPORTANT DATES SECTION WRAPPER */}
      <div className="flex justify-center container mx-auto xl:py-16 xl:pb-32 lg:pb-16 lg:py-16 py-6 ">
        {/* THE ABOUT US SECTION  */}
        <div className="flex flex-col align-center">
          {/* HEADING */}
          <h1 className="font-bold 2xl:text-5xl xl:text-3xl lg:mb-6 lg:text-2xl text-lg">
            About Us
          </h1>

          {/* PARAGRAPH */}
          <p className="2xl:text-2xl xl:text-xl lg:text-base text-sm">
            The International Conference on Intelligent Computing, Explainable
            AI and Autonomous Systems (ICEAS 2027) is a premier international
            forum dedicated to advancing research in intelligent computing,
            explainable artificial intelligence, optimization algorithms, and
            autonomous intelligent systems. The rapid evolution of Artificial
            Intelligence has transformed industries, scientific research,
            healthcare, manufacturing, finance, cybersecurity, transportation,
            and smart cities. While AI systems continue to achieve remarkable
            performance, concerns surrounding explainability, transparency,
            fairness, optimization, security, and autonomous decision-making
            have become increasingly significant. ICEAS 2027 aims to bring
            together leading researchers, academicians, industry experts,
            practitioners, policymakers, and students from across the globe to
            discuss the latest scientific advances, emerging technologies,
            innovative methodologies, and practical applications in
            intelligent computing. The conference will foster
            interdisciplinary collaboration among experts working in
            artificial intelligence, machine learning, optimization,
            computational intelligence, autonomous systems, data science,
            robotics, and intelligent decision-making.
            <br></br>
            <br />{" "}
          </p>

          {/* ABOUT UEM SECTION  */}
          <h1 className="font-bold 2xl:text-5xl xl:text-3xl lg:mb-6 lg:text-2xl text-lg">
            About UEM
          </h1>

          <p className="2xl:text-2xl xl:text-xl lg:text-base text-sm">
            UEM Jaipur was established in the year 2011 by Ordinance 11 of 2011
            and Act No 5 of 2012 of Govt of Rajasthan. UEM Jaipur has achieved
            the awards of “Best Private University in North India” and “Best
            Emerging University in North India”. The university is dedicated to
            providing an international learning environment that fosters
            innovation, creativity, and technical expertise. With a strong
            emphasis on industry-oriented courses and modern teaching
            techniques, UEM Jaipur ensures that students are well-prepared to
            meet the demands of the evolving job market. The curriculum is
            designed to bridge the gap between academics and industry
            requirements, equipping students with practical knowledge, hands-on
            training, and professional skills that give them a competitive edge
            during placements. UEM Jaipur continuously adapts to the latest
            advancements in technology and education, offering state-of-the-art
            facilities, experienced faculty, and research opportunities to help
            students excel in their respective fields. The university also
            encourages entrepreneurship, innovation, and leadership, making it a
            preferred choice for students aspiring to build successful careers.
          </p>
        </div>

        {/* THE IMPORTANT DATES SECTION */}
        {/*<div className="importantDates-wrapper font-sofia 
        2xl:text-xl
        xl:text-lg
        lg:text-base">
          <div>
            <h1 className=" font-bold 
            2xl:text-4xl
            xl:text-3xl
            lg:text-2xl
            mb-4">Important Dates</h1>
          </div>

          <TableContainer className="w-[45rem]">
            <Table variant='striped' colorScheme="blue" size="md">
            <Tbody>
             
              <Tr>
                <Td>Abstract submission deadline</Td>
                <Td>30<sup>th</sup>June 2025</Td>

              </Tr>
              <Tr>
                <Td>Acceptance mail for Submission last date</Td>
                <Td>31<sup>st</sup> July 2025</Td>
              </Tr>
              <Tr>
                <Td>Registration deadline</Td>
                <Td>31<sup>st</sup> August 2025</Td>
              </Tr>
              <Tr>
                <Td>Accommodation booking deadline</Td>
                <Td>5<sup>th</sup> September 2025</Td>

              </Tr>
              <Tr>
                <Td>Conference dates</Td>
                <Td>20<sup>th</sup>21<sup>st</sup> September 2025</Td>
              </Tr>

            </Tbody>
            </Table>
          </TableContainer>
        </div>*/}
      </div>
    </div>
  );
};