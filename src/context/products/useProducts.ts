import { use } from "react";
import { ProductsContext } from "./ProductsContext";

export const useProducts = () => {
    const context = use(ProductsContext)

	if (!context) {
        throw new Error('useProducts deve ser usado dentro de um ProductsProvider')
    }

    return context
};
