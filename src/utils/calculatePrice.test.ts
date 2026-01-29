import {
    calculateTotalPrice,
    calculateTotalPriceWithDiscount,
} from './calculatePrice'

const products = [
    {
        id: 1,
        name: 'Produto 1',
        price: 10,
        quantity: 1,
    },
    {
        id: 2,
        name: 'Produto 2',
        price: 20,
        quantity: 1,
    },
    {
        id: 3,
        name: 'Produto 3',
        price: 30,
        quantity: 1,
    },
    {
        id: 4,
        name: 'Produto 4',
        price: 40,
        quantity: 1,
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

    test('deve calcular o preço ao fornecer 200% de desconto', () => {
        expect(mockCalculateTotalPriceWithDiscount(products, 200)).toBe(0)
        expect(mockCalculateTotalPriceWithDiscount).toHaveBeenCalledWith(
            products,
            200,
        )
    })

    test('deve calcular o preço total ao inserir um desconto negativo', () => {
        expect(mockCalculateTotalPriceWithDiscount(products, -10)).toBe(100)
        expect(mockCalculateTotalPriceWithDiscount).toHaveBeenCalledWith(
            products,
            -10,
        )
    })

    test('deve calcular o preço total ao inserir um desconto 0', () => {
        expect(mockCalculateTotalPriceWithDiscount(products, 0)).toBe(100)
        expect(mockCalculateTotalPriceWithDiscount).toHaveBeenCalledWith(
            products,
            0,
        )
    })

    test('deve calcular o preço total ao inserir uma string como desconto', () => {
        expect(mockCalculateTotalPriceWithDiscount(products, 'abc')).toBe(100)
        expect(mockCalculateTotalPriceWithDiscount).toHaveBeenCalledWith(
            products,
            'abc',
        )
    })
})
