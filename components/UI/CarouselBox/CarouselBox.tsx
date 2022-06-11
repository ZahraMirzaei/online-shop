import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./CarouselBoxArrows";
import { useLanguage } from "../../../hooks/useLanguage";
import { IProduct } from "../../../lib/interface/products";
import CarouselBoxCard from "./CarouselBoxCard";

interface Props {
  title: string;
  className: string;
  productList: IProduct[];
}
const CarouselBox: React.FC<Props> = (props) => {
  const { t } = useLanguage();

  const settings = {
    className: "center",
    infinite: false,
    speed: 600,
    centerPadding: "60px",
    slidesToShow: 5,
    slidesToScroll: 1,
    // initialSlide: 0,
    swipeToSlide: true,
    // rtl: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[85%] mx-auto flex bg-[#37bccef9] rounded-md">
      <div
        className={`flex flex-col items-center justify-around flex-grow text-sm sm:text-base  bg-cover bg-no-repeat bg-center rounded-md backdrop-blur-md ${props.className}`}
      >
        <h2 className="sm:text-xl font-bold text-palette-primary">
          {t[`${props.title}`]}
        </h2>
        <Link href="/">
          <a className="text-palette-primary/60 text-sm font-bold py-1 px-4 -mb-2 shadow-lg block rounded-full backdrop-filter backdrop-blur-[10px] bg-gray-300/10">
            {t.seeAll}
          </a>
        </Link>
      </div>
      <div className="w-[55%] sm:w-[75%] md:w-[85%]">
        <Slider {...settings}>
          <CarouselBoxCard product={props.productList[0]} />
          <CarouselBoxCard product={props.productList[1]} />
          <CarouselBoxCard product={props.productList[2]} />
          <CarouselBoxCard product={props.productList[3]} />
          <CarouselBoxCard product={props.productList[4]} />
          <CarouselBoxCard product={props.productList[5]} />
          <CarouselBoxCard product={props.productList[6]} />
          <CarouselBoxCard product={props.productList[7]} />
        </Slider>
      </div>
    </div>
  );
};

export default CarouselBox;
