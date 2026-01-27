import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Header', () => {
    test('deve renderizar o header na tela', () => {
        render(<Header />)

        expect(screen.getByRole('banner')).toBeInTheDocument()
    })
})
