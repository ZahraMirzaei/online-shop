import React from "react";
import { categorySmContent } from "../../mock/category-sm";
import CategorySmBox from "./CategorySmBox";
import { categoryLgContent } from "../../mock/category-lg";
import CategoryLgBox from "./CategoryLgBox";
import SectionTitle from "../UI/SectionTitle";

const Category = () => {
  return (
    <div className="flex flex-col items-center my-4 md:my-8">
      <SectionTitle title={"CategoryOfGoods"} />

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
        {categoryLgContent.map(
          ({
            name,
            title,
            description,
            styles,
            href,
            imgSrc,
            imgWidth,
            imgHeight,
          }) => {
            return (
              <CategoryLgBox
                key={name}
                name={name}
                title={title}
                description={description}
                styles={styles}
                href={href}
                imgSrc={imgSrc}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Category;
