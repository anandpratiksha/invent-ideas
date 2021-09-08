import React from "react";
import "./Carousel.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../img/slideA.png'
import image2 from '../../img/slideA.png'
import image3 from '../../img/slideA.png'
import image4 from '../../img/slideA.png'


export default function App() {
  return (
    <div className="carousel">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image3} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
  );
}



