export const calculateTotalPrice = (prices: number[]) => {
    return prices.reduce((acc, price) => acc + price, 0)
}

export const calculateTotalPriceWithDiscount = (prices: number[], discount: number) => {
    return prices.reduce((acc, price) => acc + price, 0) * (1 - discount)
}
