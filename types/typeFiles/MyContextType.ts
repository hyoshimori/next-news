import { CategoryType } from "./CategoryType";

// This interface helps TypeScript understand the structure of the context data.
export interface MyContext {
  selectedCategory: CategoryType["MyContext"];
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<CategoryType["MyContext"]>
  >;
}
