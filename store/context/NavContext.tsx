import React, { createContext, useState } from "react";
import { IDropDown } from "../../lib/interface/dropDown";

type SidebarContextObj = {
  isOpen: boolean;
  dropDownList: IDropDown[];
  setDropDownList: (entries: IDropDown[]) => void;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextObj>({
  isOpen: false,
  dropDownList: [],
  setDropDownList: (entries: IDropDown[]) => {},
  openSidebar: () => {},
  closeSidebar: () => {},
});

export default SidebarContext;

export const SidebarContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<IDropDown[]>([]);

  function openSidebar() {
    setIsOpen(true);
  }

  function closeSidebar() {
    setIsOpen(false);
  }

  function setSidebarEntries(entries: IDropDown[]) {
    setSidebarContent(entries);
  }

  const contextValue: SidebarContextObj = {
    isOpen,
    dropDownList: sidebarContent,
    setDropDownList: setSidebarEntries,
    openSidebar,
    closeSidebar,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {props.children}
    </SidebarContext.Provider>
  );
};
