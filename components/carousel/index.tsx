import React from "react";
import Slider from "react-slick";
import { sliderContent } from "../../mock/slider";
import Slide from "./Slide";
import { NextArrow, PrevArrow } from "./Arrows";

const index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: string) => (
      <div
        style={{
          backgroundColor: "transparent",
          paddingBottom: "40px",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="">
      <Slider {...settings}>
        {sliderContent.map((item) => {
          return (
            <div key={item.ID}>
              <Slide sliderItem={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default index;
