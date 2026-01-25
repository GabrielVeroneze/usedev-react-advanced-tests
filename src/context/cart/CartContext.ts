import { createContext } from 'react'
import type { Product } from '@/types/Product'

interface CartContextType {
    items: (Product & { quantity: number })[]
    addItem: (item: Product & { quantity: number }) => void
    removeItem: (item: Product) => void
    clear: () => void
    changeQuantity: (item: Product & { quantity: number }) => void
}

const defaultValue: CartContextType = {
    items: [],
    addItem: () => {},
    removeItem: () => {},
    clear: () => {},
    changeQuantity: () => {},
}

export const CartContext = createContext<CartContextType>(defaultValue)
CartContext.displayName = 'Cart'
