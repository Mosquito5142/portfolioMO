import React from 'react'
import Image from "next/image";
import { cardDetails } from "./Carousel-config";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay'

export default function Aboutimage() {
  const AutoplaySlider = withAutoplay(AwesomeSlider)

  return (
<AutoplaySlider
        play
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
      >
    {cardDetails.map((card, index) => (
      <div key={index}>
        <Image
          src={card.imgUrl}
          layout="responsive"
          width={500} // Optional: Set a maximum width if desired
          height={500} // Optional: Set a maximum height if desired
          alt={card.title || `Slide ${index + 1}`} // Provide alt text for accessibility
        />
        <p className="legend">{card.title}</p>
      </div>
    ))}
  </AutoplaySlider>

  )
}
