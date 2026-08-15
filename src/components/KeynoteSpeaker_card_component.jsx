import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export const KeynoteSpeaker_card_component = (props) => {
  const cardRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      cardRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
      }
    ).fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.85,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
      },
      '-=0.5' // overlap so image pops in while the card is still sliding
    )

    return () => tl.kill()
  }, [])

  return (
    <div
      ref={cardRef}
      className='w-full h-auto lg:w-[450px] lg:h-[267px] keynoteSpeaker-card-component-Main font-sofia'
    >

      {/* THE IMAGE */}
      <div ref={imageRef} className='w-full h-auto lg:w-[181px] lg:h-[220px] frame'>
        <img src={props.image} alt="" />
      </div>

      <div className='w-full text-base flex flex-col lg:h-[80.5%] lg:w-[200px] lg:ml-4'>

        {/* THE BOLD WRITING PART  */}
        <h1 className='text-md font-bold lg:text-lg'>{props.bold}</h1>

        {/* THE NORMAL WRITING PART */}
        <p>{props.line1}</p>
        <p>{props.line2}</p>
        <p>{props.line3}</p>
        <p>{props.line4}</p>
      </div>

    </div>
  )
}