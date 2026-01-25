import { useEffect, useState } from 'react'
import { ProductsContext } from './ProductsContext'
import type { Product } from '@/types/Product'

interface ProductsProviderProps {
    children: React.ReactNode
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
    const [products, setProducts] = useState<Product[]>([])
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    return (
        <ProductsContext
            value={{ products, selectedProduct, setSelectedProduct }}
        >
            {children}
        </ProductsContext>
    )
}
