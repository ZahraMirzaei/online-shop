import React, { createContext, useState } from "react";
import { IDropDown } from "../../lib/types/dropDown";

type SidebarContextObj = {
  isSidebarOpen: boolean;
  isNavbarOpen: boolean;
  dropDownList: IDropDown[];
  setDropDownList: (entries: IDropDown[]) => void;
  openSidebar: () => void;
  openNavbar: () => void;
  closeSidebar: () => void;
  closeNavbar: () => void;
};

const SidebarContext = createContext<SidebarContextObj>({
  isSidebarOpen: false,
  isNavbarOpen: false,
  dropDownList: [],
  setDropDownList: (entries: IDropDown[]) => {},
  openSidebar: () => {},
  openNavbar: () => {},
  closeSidebar: () => {},
  closeNavbar: () => {},
});

export default SidebarContext;

export const SidebarContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<IDropDown[]>([]);

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function openNavbar() {
    setIsNavbarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function closeNavbar() {
    setIsSidebarOpen(false);
    setIsNavbarOpen(false);
  }

  function setSidebarEntries(entries: IDropDown[]) {
    setSidebarContent(entries);
  }

  const contextValue: SidebarContextObj = {
    isSidebarOpen,
    isNavbarOpen,
    dropDownList: sidebarContent,
    setDropDownList: setSidebarEntries,
    openSidebar,
    openNavbar,
    closeSidebar,
    closeNavbar,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {props.children}
    </SidebarContext.Provider>
  );
};
