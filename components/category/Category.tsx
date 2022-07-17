import React from "react";
import CategorySmBox from "./CategorySmBox";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../hooks/useLanguage";
import { categorySmContent } from "../../mock/category-sm";

const Category = () => {
  const { t } = useLanguage();
  return (
    <div className="my-4 lg:my-10 flex flex-col">
      <h2 className="mx-auto mt-4 py-8 text-2xl md:text-3xl">
        {t.CategoryOfGoods}
      </h2>

      {/* 📱 sm and md break point */}
      <div className="flex flex-wrap justify-around items-center lg:hidden">
        {categorySmContent.map((categoryItem) => {
          return (
            <CategorySmBox
              bgc={categoryItem.bgc}
              imgSrc={categoryItem.imgSrc}
              categoryTitle={categoryItem.categoryTitle}
              href={categoryItem.href}
              key={categoryItem.categoryTitle}
            />
          );
        })}
      </div>

      {/* 💻lg break point */}
      <div className="hidden lg:grid  gap-4 grid-rows-9 grid-cols-2 md:grid-cols-9 w-full xl:max-w-[2100px] mx-auto">
        <div className="flex justify-around items-center md:row-span-6 md:col-span-3 bg-palette-digitalCategory py-8 px-4 rounded-md shadow-lg overflow-hidden">
          <div>
            <h3 className="text-2xl font-[500]">{t.digitalCategoryTitle}</h3>
            <p className="mt-4">{t.digitalCategoryDescription}</p>
            <Link href="/digital">
              <a className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-3 px-4 rounded-lg mt-4 text-sm">
                {t.seeAllProducts}
              </a>
            </Link>
          </div>

          <Image
            src="/images/category-img/digital-category.png"
            alt="digital"
            width={190}
            height={240}
            className="drop-shadow-lg hover:scale-95 transition-transform duration-300"
          />
        </div>
        <div className="flex justify-around items-center md:row-span-6 md:col-span-3 bg-palette-fashionCategory  rounded-md shadow-lg px-4 ">
          <div>
            <h3 className="text-xl font-[500]">{t.fashionCategoryTitle}</h3>
            <p className="text-[12px] mt-4">{t.fashionCategoryDescription}</p>
            <Link href="/fashion">
              <a className="inline-block shadow-lg border-none bg-palette-primary text-palette-side py-3 px-2 xl:px-4 rounded-lg mt-4 text-[12px] xl:text-sm bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300">
                {t.seeAllProducts}
              </a>
            </Link>
          </div>

          <Image
            src="/images/category-img/fashion-category.png"
            alt="fashion"
            width={240}
            height={250}
            className="drop-shadow-lg self-start  hover:scale-95 transition-transform duration-300"
          />
        </div>
        <div className="flex justify-around items-center md:row-span-3 md:col-span-3 rounded-md shadow-lg bg-palette-beautyCategory px-4 py-2">
          <div>
            <h3 className="text-lg font-[500]">{t.beautyCategoryTitle}</h3>
            <p className="text-[12px] mt-4">{t.beautyCategoryDescription}</p>
            <Link href="/beauty">
              <a className="inline-block shadow-lg border-none bg-palette-primary text-palette-side py-3 px-4 rounded-lg mt-4 text-sm bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300">
                {t.seeAllProducts}
              </a>
            </Link>
          </div>

          <Image
            src="/images/category-img/beauty-category.png"
            alt="beauty"
            width={170}
            height={150}
            className="drop-shadow-lg self-start  hover:scale-95 transition-transform duration-300"
          />
        </div>
        <div className="flex justify-around items-center md:row-span-3 md:col-span-3 rounded-md shadow-lg bg-palette-sportCategory">
          <Image
            src="/images/category-img/sport-category.png"
            alt="sport"
            width={130}
            height={150}
            className="drop-shadow-lg self-start  hover:scale-95 transition-transform duration-300"
          />
          <div>
            <h3 className="text-lg font-[500]">{t.sportCategoryTitle}</h3>
            <p className="text-[12px] mt-4">{t.sportCategoryDescription}</p>
            <Link href="/sport">
              <a className="inline-block shadow-lg border-none bg-palette-primary text-palette-side py-3 px-4 rounded-lg mt-4 text-sm bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300">
                {t.seeAllProducts}
              </a>
            </Link>
          </div>
        </div>
        <div className="flex justify-evenly items-center md:row-span-2 md:col-span-5 rounded-md shadow-lg bg-palette-houseCategory px-4">
          <div className="">
            <h3 className="text-2xl font-[500]">{t.houseCategoryTitle}</h3>
            <p className="text-md mt-4">{t.houseCategoryDescription}</p>
            <Link href="/house">
              <a className="inline-block shadow-lg border-none bg-palette-primary text-palette-side py-3 px-4 rounded-lg mt-4 text-sm bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300">
                {t.seeAllProducts}
              </a>
            </Link>
          </div>
          <Image
            src="/images/category-img/house-category.png"
            alt="house"
            width={320}
            height={240}
            className="drop-shadow-lg self-start  hover:scale-95 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col justify-around items-center md:row-span-2 md:col-span-2 rounded-md shadow-lg bg-palette-toyCategory">
          <div className="text-center">
            <h3 className="text-lg font-[500]">{t.toyCategoryTitle}</h3>
            <p className="text-[12px] mt-3">{t.toyCategoryDescription}</p>
            <Link href="/toy">
              <a className="inline-block shadow-lg border-none bg-palette-primary text-palette-side py-3 px-4 rounded-lg mt-3 text-sm bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300">
                {t.seeAllProducts}
              </a>
            </Link>
          </div>
          <Image
            src="/images/category-img/toy-category.png"
            alt="toy"
            width={130}
            height={110}
            className="drop-shadow-lg self-start  hover:scale-95 transition-transform duration-300"
          />
        </div>
        <div className="flex justify-around items-center md:row-span-2 md:col-span-2 rounded-md shadow-lg px-3 bg-palette-stationeryCategory">
          <div className="">
            <h3 className="text-lg font-[500]">{t.stationeryCategoryTitle}</h3>
            <p className="text-[12px] mt-3">
              {t.stationeryCategoryDescription}
            </p>
            <Link href="/stationery">
              <a className="inline-block shadow-lg border-none bg-palette-primary text-palette-side py-3 px-2 rounded-lg mt-3 text-[10px] xl:text-[12px] bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300">
                {t.seeAllProducts}
              </a>
            </Link>
          </div>
          <Image
            src="/images/category-img/stationery-category.png"
            alt="stationery"
            width={130}
            height={250}
            className="drop-shadow-lg self-start  hover:scale-95 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
