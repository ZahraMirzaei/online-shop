export interface IActiveMenuItem {
  activeMenuItemIndex: number;
  activeMenuItemText: string;
}

export interface IActiveMenuItemRootState {
  activeMenuItem: IActiveMenuItem;
}
