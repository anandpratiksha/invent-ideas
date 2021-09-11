import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from '../../gifs/page1.gif';
import p2 from '../../gifs/page2.gif';
import p3 from '../../gifs/page3.gif';
import p4 from '../../gifs/page4.gif';
import '../Home.css'
import '../Caroussel/Carousel.css'

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    };
    return (
      <div className="imgslider">
        <p className="heading" align="center">Acomplishment</p>
        <Slider {...settings}>
          <div>
            <img src={p1} alt="" />
          </div>
          <div>
            <img src={p2} alt="" />
          </div>
          <div>
            <img src={p3} alt="" />
          </div>
          <div>
            <img src={p4} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}