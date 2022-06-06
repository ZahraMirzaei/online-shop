import { TSlug } from "./products";

export interface ICategory {
  title: string;
  slug: TSlug;
  description?: string;
  parents?: any;
}
