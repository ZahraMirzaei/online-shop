import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import { sliderContent } from "../../mock/slider";
import { NextArrow, PrevArrow } from "./Arrows";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <NextArrow to="next" />,
    prevArrow: <PrevArrow to="prev" />,
    appendDots: (dots: string) => (
      <div className="bg-transparent !pb-[40px]">
        <ul> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {sliderContent.map((slideContent) => {
          return <Slide key={slideContent.ID} {...slideContent} />;
        })}
      </Slider>
      <div>
        <div className="absolute top-1/2 right-4 md:right-8 shadow-lg rounded-full bg-palette-card p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
          <HiOutlineChevronRight style={{ color: "gray" }} />
        </div>
        <div className="absolute top-1/2 left-4 md:left-8 shadow-lg rounded-full bg-palette-card p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
          <HiOutlineChevronLeft style={{ color: "gray" }} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
