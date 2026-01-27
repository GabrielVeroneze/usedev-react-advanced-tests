import { render, screen } from '@testing-library/react'
import Footer from './'

describe('Footer', () => {
    test('deve renderizar o footer na tela', () => {
        render(<Footer />)

        expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    })
})
