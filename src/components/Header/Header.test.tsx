import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Header from '.'

const mockNavigate = jest.fn()

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockNavigate,
}))

describe('Header', () => {
    test('deve renderizar o header na tela', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>,
        )

        expect(screen.getByRole('banner')).toBeInTheDocument()
    })

    test('deve disparar função de navegação ao clicar no logo', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>,
        )

        const logo = screen.getByAltText('logo')
        fireEvent.click(logo)

        expect(mockNavigate).toHaveBeenCalledWith('/')
        expect(mockNavigate).not.toHaveBeenCalledWith('/cart')
    })
})
