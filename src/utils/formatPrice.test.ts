import { formatPrice } from './formatPrice'

describe('formatPrice', () => {
    test('deve formatar o preço corretamente', () => {
        expect(formatPrice(10)).toBe('R$ 10,00')
    })
})
