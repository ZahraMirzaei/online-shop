import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { categorySmContent } from "../../mock/category-sm";
import CategorySmBox from "./CategorySmBox";
import { categoryLgContent } from "../../mock/category-lg";
import CategoryLgBox from "./CategoryLgBox";

const Category = () => {
  const { t } = useLanguage();
  return (
    <div className="my-4 lg:my-10 flex flex-col items-center">
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
        {categoryLgContent.map(
          ({
            name,
            title,
            description,
            styles,
            rowSpan,
            colSpan,
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
                rowSpan={rowSpan}
                colSpan={colSpan}
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
