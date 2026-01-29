import type { Product } from '@/types/Product'

export type CartProduct = Product & {
    quantity: number
}

export const calculateTotalPrice = (products: CartProduct[]) => {
    return products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0,
    )
}

export const calculateTotalPriceWithDiscount = (
    products: CartProduct[],
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
