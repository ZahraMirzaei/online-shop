import React, { useState, useEffect } from "react";
import menuItems from "../../../mock/menuItems";
import MenuItems from "../../UI/MenuItems";
import { IDropDown } from "../../../lib/interface/dropDown";
import Submenu from "./Submenu";
const Menu = () => {
  const [submenu, setSubmenu] = useState<IDropDown[]>();

  function activeItem(submenuList: IDropDown[] | undefined) {
    setSubmenu(submenuList);
  }
  useEffect(() => {
    setSubmenu(menuItems[0].productsGroup);
  }, []);

  return (
    <div className=" flex">
      <nav className="md:w-72 md:py-4 ltr:border-r-2 rtl:border-l-2 border-slate-300">
        <MenuItems onMouseOver={activeItem} />
      </nav>
      <Submenu subMenu={submenu} />
    </div>
  );
};

export default Menu;
