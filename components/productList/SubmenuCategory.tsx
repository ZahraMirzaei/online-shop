import React from "react";
import { useRouter } from "next/router";
import { useLanguage } from "../../hooks/useLanguage";
import menuItems from "../../mock/menuItems";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const SubmenuCategory = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const iconFontSize = width <= 768 ? "1.5rem" : "2.5rem";
  const category = router.query.category;
  const selectedCategory = menuItems.filter(
    (item) => item.category === category
  );
  const subCategories = selectedCategory[0]?.productsGroup?.map((item) => ({
    title: item.title,
    icon: item.icon,
  }));
  function onClickHandler(subCategory: string) {
    if (selectedCategory[0].category) {
      router.push(`/${selectedCategory[0].category}/${subCategory}`);
    }
  }

  return subCategories ? (
    <div className="flex md:items-center flex-col mb-6">
      <h3 className="text-center md:text-2xl mb-3 md:mb-6">{t.categories}</h3>
      <div className="flex justify-center flex-wrap">
        {subCategories?.map((subCategory) => (
          <div
            className="flex flex-col items-center py-2 md:py-4 px-2 sm:px-3 md:px-6 bg-palette-card shadow-lg rounded-lg mx-1 my-1 md:mx-3 w-[5rem] sm:w-auto flex-grow cursor-pointer"
            key={subCategory.title}
            onClick={() => onClickHandler(subCategory.title)}
          >
            <subCategory.icon style={{ fontSize: iconFontSize }} />
            <h4 className="text-center text-[12px] md:text-base md:pt-3">
              {t[subCategory.title]}
            </h4>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default SubmenuCategory;
