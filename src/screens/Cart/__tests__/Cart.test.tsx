import { act, fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { ContextProvider } from '@/context/provider/ContextProvider'
import { useCart } from '@/context/cart/useCart'
import Cart from '../'

const mockNavigate = jest.fn()

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockNavigate,
}))

const CartItemStub = () => {
    const { addItem } = useCart()

    const addTestItem = () => {
        addItem({
            id: 1,
            name: 'Test Product',
            price: 100,
            quantity: 1,
            category: 1,
            description: 'A product for testing',
            colors: ['red', 'blue'],
            sizes: ['S', 'M', 'L'],
            image: 'http://example.com/image.jpg',
        })
    }

    return <button onClick={addTestItem}>Add Item</button>
}

const renderCart = async () => {
    const result = await act(async () => {
        render(
            <BrowserRouter>
                <ContextProvider>
                    <CartItemStub />
                    <Cart />
                </ContextProvider>
            </BrowserRouter>,
        )
    })

    return result
}

describe('Cart', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('deve renderizar a mensagem de carrinho vazio caso não tenha itens no carrinho', async () => {
        await renderCart()

        expect(screen.getByText('Seu carrinho está vazio')).toBeInTheDocument()

        const continueShoppingButton = screen.getByText('Continuar comprando')
        fireEvent.click(continueShoppingButton)

        expect(mockNavigate).toHaveBeenCalledWith('/')
    })
})
