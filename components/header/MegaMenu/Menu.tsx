import React, { useState, useEffect, useContext } from "react";
import menuItems from "../../../mock/menuItems";
import MenuItems from "../../UI/MenuItems";
import { IDropDown } from "../../../lib/interface/dropDown";
import Submenu from "./Submenu";
import ActiveMenuItemContext from "../../../store/context/activeMenuItemContext";
const Menu = () => {
  const [submenu, setSubmenu] = useState<IDropDown[]>();
  const activeItemCtx = useContext(ActiveMenuItemContext);

  function activeItem(
    submenuList: IDropDown[] | undefined,
    activeItemIndex: number
  ) {
    setSubmenu(submenuList);
    activeItemCtx.setActiveMenuItemIndex(activeItemIndex);
  }

  useEffect(() => {
    setSubmenu(menuItems[0].productsGroup);
    return () => {
      activeItemCtx.setActiveMenuItemIndex(0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
