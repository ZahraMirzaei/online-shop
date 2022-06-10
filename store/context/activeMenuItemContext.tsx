import React, { createContext, useState } from "react";

interface ActiveMenuItemType {
  activeMenuItemIndex: number;
  setActiveMenuItemIndex: (index: number) => void;
}

const ActiveMenuItemContext = createContext<ActiveMenuItemType>({
  activeMenuItemIndex: 0,
  setActiveMenuItemIndex: (index) => {},
});

export default ActiveMenuItemContext;

export const ActiveMenuItemProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const changeActiveItem = (index: number) => {
    setActiveItemIndex(index);
  };
  const contextValue: ActiveMenuItemType = {
    activeMenuItemIndex: activeItemIndex,
    setActiveMenuItemIndex: changeActiveItem,
  };

  return (
    <ActiveMenuItemContext.Provider value={contextValue}>
      {props.children}
    </ActiveMenuItemContext.Provider>
  );
};
