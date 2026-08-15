import { KeynoteSpeaker_card_component } from "../components/KeynoteSpeaker_card_component"
import uemLogo from "../assets/PNG/uemBackgroundLogo.svg";

export const KeynoteSpeaker = () => {
  return (
    <div className='lg:py-32 py-8 flex flex-col keynoteSpeaker-main container mx-auto'>
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

      <div className="flex justify-start keynoteSpeaker-heading">
        <h1 className="mb-3 text-lg font-bold lg:text-5xl lg:mb-16">Keynote Speakers :</h1>
      </div>
      <div className="KeynoteSpeakers-card-wrapper">

        {/* firstname lastname */}
        <KeynoteSpeaker_card_component image="" bold="firstname lastname" line1="Desgination" line2="Information 1" line3="Information 2" />

       
      </div>

      
    </div>
  )
}
