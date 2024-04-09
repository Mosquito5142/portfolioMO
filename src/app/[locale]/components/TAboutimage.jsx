"use client";
import React from 'react'
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function aboutimage(props) {
  return (
    <div>
                  <Carousel autoPlay infinite>
                <div>
                   <Image src="/images/about/1634816161115.jpg" width={500} height={500} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <Image src="/images/about/1634816161235.jpg" width={500} height={500} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <Image src="/images/about/1634816175592.jpg" width={500} height={500} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <Image src="/images/about/getpersonimage.jpg" width={500} height={500} />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
    </div>
  )
}
