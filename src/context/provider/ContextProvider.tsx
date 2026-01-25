import { CartProvider } from '../cart/CartProvider'
import { CategoriesProvider } from '../categories/CategoriesProvider'
import { ProductsProvider } from '../products/ProductsProvider'

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
