export interface ICategoryPathsParams {
  category: string;
}

export interface ISubCategoryPathsParams {
  category: string;
  subCategory: string;
}

export interface ITitlePathsParams {
  category: string;
  subCategory: string;
  title: string;
}

export interface ISlugPathsParams {
  slug: { current: string };
  category: string;
  subCategory: string;
  title: string;
}
