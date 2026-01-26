import {
    calculateTotalPrice,
    calculateTotalPriceWithDiscount,
} from './calculatePrice'

const products = [
    {
        id: 1,
        name: 'Produto 1',
        price: 10,
    },
    {
        id: 2,
        name: 'Produto 2',
        price: 20,
    },
    {
        id: 3,
        name: 'Produto 3',
        price: 30,
    },
    {
        id: 4,
        name: 'Produto 4',
        price: 40,
    },
]

const mockCalculateTotalPrice = jest
    .fn()
    .mockImplementation((products) => calculateTotalPrice(products))

const mockCalculateTotalPriceWithDiscount = jest
    .fn()
    .mockImplementation((products, discount) =>
        calculateTotalPriceWithDiscount(products, discount),
    )

describe('calculatePrice', () => {
    test('deve calcular o preço total corretamente', () => {
        expect(mockCalculateTotalPrice(products)).toBe(100)
        expect(mockCalculateTotalPrice).toHaveBeenCalledWith(products)
    })

    test('deve calcular o preço total com desconto corretamente', () => {
        expect(mockCalculateTotalPriceWithDiscount(products, 10)).toBe(90)
        expect(mockCalculateTotalPriceWithDiscount).toHaveBeenCalledWith(
            products,
            10,
        )
    })
})
