import { IDropDown } from "./dropDown";

export interface ISideNavBar {
  isSidebarOpen: boolean;
  isNavbarOpen: boolean;
  dropDownList: IDropDown[];
}

export interface ISideNavBarRootState {
  sideNavBar: ISideNavBar;
}
