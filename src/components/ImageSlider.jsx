import { useState } from "react"
export const ImageSlider=({slides})=>{
    const [currentIndex, setCurrentIndex]= useState(0);
    const sliderStyle={
        height:"100%",
        position: "relative",
    }
    const slideStyles={
        width:"100%",
        height:"100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    }
    return(
        <div style={sliderStyle}>
            <div style={slideStyles}>

            </div>
        </div>
    )

}