import React, { createContext, useState } from "react";

type MegaMenuContextObj = {
  isMegaMenuOpen: boolean;
  openMegaMenu: () => void;
  closeMegaMenu: () => void;
};

const MegaMenuContext = createContext<MegaMenuContextObj>({
  isMegaMenuOpen: false,
  openMegaMenu: () => {},
  closeMegaMenu: () => {},
});

export default MegaMenuContext;

export const MegaMenuContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  function openMegaMenu() {
    setIsMegaMenuOpen(true);
  }

  function closeMegaMenu() {
    setIsMegaMenuOpen(false);
  }

  const contextValue: MegaMenuContextObj = {
    isMegaMenuOpen,
    openMegaMenu,
    closeMegaMenu,
  };

  return (
    <MegaMenuContext.Provider value={contextValue}>
      {props.children}
    </MegaMenuContext.Provider>
  );
};
