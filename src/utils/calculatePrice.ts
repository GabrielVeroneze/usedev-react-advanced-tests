import type { Product } from '@/types/Product'

export const calculateTotalPrice = (products: Product[]) => {
    return products.reduce((acc, product) => acc + product.price, 0)
}

export const calculateTotalPriceWithDiscount = (
    products: Product[],
    discount: number,
) => {
    if (discount >= 100) {
        return 0
    }

    if (discount < 0 || typeof discount !== 'number') {
        return calculateTotalPrice(products)
    }

    return calculateTotalPrice(products) * (1 - discount / 100)
}
