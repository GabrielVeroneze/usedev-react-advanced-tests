import { useState } from 'react'
import { CartContext } from './CartContext'
import type { Product } from '@/types/Product'

interface CartProviderProps {
    children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [items, setItems] = useState<(Product & { quantity: number })[]>([])

    const changeQuantity = (item: Product & { quantity: number }) => {
        setItems(items.map((i) => (i.id === item.id ? item : i)))
    }

    const addItem = (item: Product & { quantity: number }) => {
        setItems([...items, item])
    }

    const removeItem = (item: Product) => {
        setItems(items.filter((i) => i.id !== item.id))
    }

    const clear = () => {
        setItems([])
    }

    return (
        <CartContext
            value={{ items, addItem, removeItem, clear, changeQuantity }}
        >
            {children}
        </CartContext>
    )
}
