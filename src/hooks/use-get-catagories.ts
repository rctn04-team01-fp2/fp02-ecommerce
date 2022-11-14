export type CategoriesType =
  | 'all'
  | 'electronics'
  | 'jewelery'
  | "men's clothing"
  | "women's clothing";

export default function useGetCategories(): CategoriesType[] {
  return ['electronics', 'jewelery', "men's clothing", "women's clothing"];
}
