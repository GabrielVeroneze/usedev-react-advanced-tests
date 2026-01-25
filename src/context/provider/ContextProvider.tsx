import { CartProvider } from '@/context/cart/CartProvider'
import { CategoriesProvider } from '@/context/categories/CategoriesProvider'
import { ProductsProvider } from '@/context/products/ProductsProvider'

interface ContextProviderProps {
    children: React.ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    return (
        <CartProvider>
            <CategoriesProvider>
                <ProductsProvider>{children}</ProductsProvider>
            </CategoriesProvider>
        </CartProvider>
    )
}
