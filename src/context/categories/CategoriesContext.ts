import { createContext } from "react";
import type { Category } from "../../types/Category";

interface CategoriesContextType {
    categories: Category[];
}

const defaultValue: CategoriesContextType = {
     categories: [],
}

export const CategoriesContext = createContext<CategoriesContextType>(defaultValue)
CategoriesContext.displayName = 'Categories'