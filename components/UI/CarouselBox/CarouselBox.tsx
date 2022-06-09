import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../carousel/Arrows";

import { useLanguage } from "../../../hooks/useLanguage";

const CarouselBox = () => {
  const { locale } = useLanguage();
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
    <div className="w-[85%] mx-auto flex bg-[#19e5fc] rounded-md overflow-hidden">
      <div className="flex flex-col items-center justify-around flex-grow text-sm sm:text-base bg-offersBG bg-cover bg-no-repeat bg-center backdrop-blur-md">
        <h2 className="sm:text-xl font-bold text-palette-primary">
          پیشنهادات ویژه
        </h2>
        <Link href="/">
          <a className="text-palette-mute font-bold">دیدن همه</a>
        </Link>
      </div>
      <div className="w-[55%]  sm:w-[75%] md:w-[85%]">
        <Slider {...settings}>
          <div className="w-full px-2 my-2">
            <div className="w-full p-3 shadow-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80 rounded-md">
              <Image
                src="/images/card-temporary/image.png"
                alt="laptop image"
                width={200}
                height={185}
                className="object-contain object-center hover:scale-110 transition-transform"
              />
              <p className="truncate">
                Lenovo Yoga 7i Intel Core i5 8GB RAM 256GB SSD 14&quot; 2-in-1
                Laptop
              </p>
              <span>
                <del className="text-sm text-rose-600">
                  <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>
                  2,350,00
                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </del>
                <br />
                <ins className="text-[16px]  self-end mt-6 font-bold">
                  <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>
                  2,000,00
                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </ins>
              </span>
            </div>
          </div>
          <div className="w-full px-2 my-2">
            <div className="w-full p-3 shadow-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80 rounded-md">
              <Image
                src="/images/card-temporary/image.png"
                alt="laptop image"
                width={200}
                height={185}
                className="object-contain object-center hover:scale-110 transition-transform"
              />
              <p className="truncate">
                Lenovo Yoga 7i Intel Core i5 8GB RAM 256GB SSD 14&quot; 2-in-1
                Laptop
              </p>
              <span>
                <del className="text-sm text-rose-600">
                  <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>
                  2,350,00
                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </del>
                <br />
                <ins className="text-[16px]  self-end mt-6 font-bold">
                  <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>
                  2,000,00
                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </ins>
              </span>
            </div>
          </div>
          <div className="w-full px-2 my-2">
            <div className="w-full p-3 shadow-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80 rounded-md">
              <Image
                src="/images/card-temporary/image.png"
                alt="laptop image"
                width={200}
                height={185}
                className="object-contain object-center hover:scale-110 transition-transform"
              />
              <p className="truncate">
                Lenovo Yoga 7i Intel Core i5 8GB RAM 256GB SSD 14&quot; 2-in-1
                Laptop
              </p>
              <span>
                <del className="text-sm text-rose-600">
                  <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>
                  2,350,00
                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </del>
                <br />
                <ins className="text-[16px]  self-end mt-6 font-bold">
                  <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>
                  2,000,00
                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </ins>
              </span>
            </div>
          </div>
          <div className="w-full px-2 my-2">
            <div className="w-full p-3 shadow-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80 rounded-md">
              <Image
                src="/images/card-temporary/image.png"
                alt="laptop image"
                width={200}
                height={185}
                className="object-contain object-center hover:scale-110 transition-transform"
              />
              <p className="truncate">
                Lenovo Yoga 7i Intel Core i5 8GB RAM 256GB SSD 14&quot; 2-in-1
                Laptop
              </p>
              <span>
                <del className="text-sm text-rose-600">
                  <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>
                  2,350,00
                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </del>
                <br />
                <ins className="text-[16px]  self-end mt-6 font-bold">
                  <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>
                  2,000,00
                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </ins>
              </span>
            </div>
          </div>
          <div className="w-full px-2 my-2">
            <div className="w-full p-3 shadow-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80 rounded-md">
              <Image
                src="/images/card-temporary/image.png"
                alt="laptop image"
                width={200}
                height={185}
                className="object-contain object-center hover:scale-110 transition-transform"
              />
              <p className="truncate">
                Lenovo Yoga 7i Intel Core i5 8GB RAM 256GB SSD 14&quot; 2-in-1
                Laptop
              </p>
              <span>
                <del className="text-sm text-rose-600">
                  <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>
                  2,350,00
                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </del>
                <br />
                <ins className="text-[16px]  self-end mt-6 font-bold">
                  <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>
                  2,000,00
                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </ins>
              </span>
            </div>
          </div>
          <div className="w-full px-2 my-2">
            <div className="w-full p-3 shadow-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80 rounded-md">
              <Image
                src="/images/card-temporary/image.png"
                alt="laptop image"
                width={200}
                height={185}
                className="object-contain object-center hover:scale-110 transition-transform"
              />
              <p className="truncate">
                Lenovo Yoga 7i Intel Core i5 8GB RAM 256GB SSD 14&quot; 2-in-1
                Laptop
              </p>
              <span>
                <del className="text-sm text-rose-600">
                  <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>
                  2,350,00
                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </del>
                <br />
                <ins className="text-[16px]  self-end mt-6 font-bold">
                  <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>
                  2,000,00
                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </ins>
              </span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselBox;
