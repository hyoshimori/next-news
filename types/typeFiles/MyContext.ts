import { Category } from "./Category";

// This interface helps TypeScript understand the structure of the context data.
export interface MyContext {
  selectedCategory: Category["MyContext"];
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<Category["MyContext"]>
  >;
}
