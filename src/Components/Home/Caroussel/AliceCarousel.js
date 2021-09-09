import React from "react";
import "./AliceCarousel.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function App({ innovatorItem }) {
  return (
    <div className="carousel">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        {/* <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image3} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" /> */}
        {
          innovatorItem.map((item) => {
            {/* console.log(item) */ }
            console.log(item.image)
            return (
              <img src={item.image} className="slidering" alt="pic" />
            )
          })
        }
      </AliceCarousel>
    </div>
  );
}

