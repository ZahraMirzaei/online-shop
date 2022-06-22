import React, { createContext, useState } from "react";

interface ActiveMenuItemType {
  activeMenuItemIndex: number;
  activeMenuItemText: string;
  setActiveMenuItemIndex: (index: number) => void;
  setActiveMenuItemText: (text: string) => void;
}

const ActiveMenuItemContext = createContext<ActiveMenuItemType>({
  activeMenuItemIndex: 0,
  activeMenuItemText: "",
  setActiveMenuItemIndex: (index) => {},
  setActiveMenuItemText: (text) => {},
});

export default ActiveMenuItemContext;

export const ActiveMenuItemProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeItemText, setActiveItemText] = useState("");

  const changeActiveItem = (index: number) => {
    setActiveItemIndex(index);
  };
  const changeActiveItemText = (name: string) => {
    setActiveItemText(name);
  };

  const contextValue: ActiveMenuItemType = {
    activeMenuItemIndex: activeItemIndex,
    activeMenuItemText: activeItemText,
    setActiveMenuItemIndex: changeActiveItem,
    setActiveMenuItemText: changeActiveItemText,
  };

  return (
    <ActiveMenuItemContext.Provider value={contextValue}>
      {props.children}
    </ActiveMenuItemContext.Provider>
  );
};
