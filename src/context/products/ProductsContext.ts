import { createContext } from "react";
import type { Product } from "../../types/Product";

interface ProductsContextType {
    products: Product[];
    selectedProduct: Product | null;
    setSelectedProduct: (product: Product | null) => void;
}

const defaultValue: ProductsContextType = {
    products: [],
    selectedProduct: null,
    setSelectedProduct: () => {},
}

export const ProductsContext = createContext<ProductsContextType>(defaultValue);
ProductsContext.displayName = 'Products'