import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Header from '.'

const mockNavigate = jest.fn()

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockNavigate,
}))

describe('Header', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>,
        )
    })

    afterEach(() => {
        mockNavigate.mockClear()
    })

    test('deve renderizar o header na tela', () => {
        expect(screen.getByRole('banner')).toBeInTheDocument()
    })

    test('deve disparar função de navegação ao clicar no logo', () => {
        const logo = screen.getByAltText('logo')
        fireEvent.click(logo)

        expect(mockNavigate).toHaveBeenCalledWith('/')
        expect(mockNavigate).not.toHaveBeenCalledWith('/cart')
    })

    test('deve disparar função de navegação ao clicar no carrinho', () => {
        const cart = screen.getByAltText('cart')
        fireEvent.click(cart)

        expect(mockNavigate).toHaveBeenCalledWith('/cart')
        expect(mockNavigate).not.toHaveBeenCalledWith('/')
    })
})
