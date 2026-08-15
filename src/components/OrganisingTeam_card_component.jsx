import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export const OrganisingTeam_card_component = (props) => {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    )
  }, [])

  return (
    <div
      ref={cardRef}
      className='w-full h-auto lg:w-[300px] lg:h-[400px] organisingTeam-card-component-Main font-sofia rounded-3xl border border-gray-500 overflow-hidden p-4 flex flex-col items-center'
    >

      {/* THE IMAGE */}
      <div className='w-full h-auto lg:w-[181px] lg:h-[520px] frame rounded-xl overflow-hidden mx-auto'>
        <img src={props.image} alt="" className='w-full h-full object-cover' />
      </div>

      <div className='w-full text-base flex flex-col lg:h-[80.5%] lg:w-[200px] text-center'>

        {/* THE NAME */}
        <h1 className='text-md font-bold lg:text-lg'>{props.name}</h1>

        {/* THE DESIGNATION / LINES */}
        <p>{props.line1}</p>
        <p>{props.line2}</p>
        <p>{props.line3}</p>
      </div>

    </div>
  )
}