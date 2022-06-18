import React from "react";
import Slider from "react-slick";
import { useLanguage } from "../../hooks/useLanguage";

import Slide from "./Slide";
import { sliderContent } from "../../mock/slider";
import { NextArrow, PrevArrow } from "./Arrows";
import Link from "next/link";

const Carousel = () => {
  const { t } = useLanguage();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: string) => (
      <div className="bg-transparent !pb-[40px]">
        <ul> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className=" md:mt-40">
      <Slider {...settings}>
        {sliderContent.map((slideContent) => {
          return <Slide key={slideContent.ID} {...slideContent} />;
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
