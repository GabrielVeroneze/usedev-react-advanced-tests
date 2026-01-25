import { useEffect, useState } from 'react'
import { CategoriesContext } from './CategoriesContext'
import type { Category } from '@/types/Category'

interface CategoriesProviderProps {
    children: React.ReactNode
}

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
    }, [])

    return (
        <CategoriesContext value={{ categories }}>{children}</CategoriesContext>
    )
}
