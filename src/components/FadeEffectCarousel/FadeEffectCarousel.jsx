import React, { Component } from "react";
import Hole from "../../assets/img/hole.jpg";
import Museum from "../../assets/img/museum.jpg";
import NC from "../../assets/img/nightCity.jpg";
import PC from "../../assets/img/pourConcrete.jpg";
import Schem from "../../assets/img/schematics.jpg";
import WB from "../../assets/img/whiteBuilding.jpg";
import Swiper from "swiper";
////////////CSS////////////
//swiper css must come first
import "swiper/css/swiper.min.css";
// your custom css must come second to overwrite certain stylings in swiper.css
import "./FadeEffectCarousel.css";

class FadeEffectCarousel extends Component {
  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      speed: 1900, // controls the speed between each slide when arrow click or grabCursor
      grabCursor: true, // little hand cursor over slides
      loop: true, // allows the slides to loop from the last slide back to the first in that direction
      centeredSlides: true, // helps to center the slides
      parallax: true, // Helps focus the users attention to the slide in front/center
      autoplay: { // allows for autoplay for the slides
        delay: 2500, // a delay for each slide before it flips to the next one
        disableOnInteraction: false, // if you want to stop autoplay with a click to the slides
      },
      effect: "fade", // fadeEffect is the type of effect on the pictures
      fadeEffect: { // the effect that you want to use
        crossFade: true, // Enables slides cross fade
      },
      pagination: { // Object with navigation parameters
        el: ".swiper-pagination", // little dots under the slides for navigation
        clickable: true, // allows you to click on the little dots
      },
      navigation: { // Object with navigation parameters
        nextEl: ".swiper-button-next", // arrows on the side of the slides
        prevEl: ".swiper-button-prev", // arrows on the side of the slides
      },
    });
  }

  render() {
    return (
      <>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                style={{ width: "100vw", height: "89.99vh" }}
                className="d-block w-100"
                src={Hole}
                alt="First slide"
              />
            </div>
            <div className="swiper-slide">
              <img
                style={{ width: "100vw", height: "89.99vh" }}
                className="d-block w-100"
                src={Museum}
                alt="Second slide"
              />
            </div>
            <div className="swiper-slide">
              <img
                style={{ width: "100vw", height: "89.99vh" }}
                className="d-block w-100"
                src={NC}
                alt="Third slide"
              />
            </div>
            <div className="swiper-slide">
              <img
                style={{ width: "100vw", height: "89.99vh" }}
                className="d-block w-100"
                src={PC}
                alt="Fourth slide"
              />
            </div>
            <div className="swiper-slide">
              <img
                style={{ width: "100vw", height: "89.99vh" }}
                className="d-block w-100"
                src={Schem}
                alt="Fifth slide"
              />
            </div>
            <div className="swiper-slide">
              <img
                style={{ width: "100vw", height: "89.99vh" }}
                className="d-block w-100"
                src={WB}
                alt="Sixth slide"
              />
            </div>
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </>
    );
  }
}

export default FadeEffectCarousel;
