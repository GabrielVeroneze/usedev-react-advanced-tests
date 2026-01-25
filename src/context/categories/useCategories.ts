import { use } from 'react'
import { CategoriesContext } from './CategoriesContext'

export const useCategories = () => {
    const context = use(CategoriesContext)

    if (!context) {
        throw new Error(
            'useCategories deve ser usado dentro de um CategoriesProvider',
        )
    }

    return context
}
