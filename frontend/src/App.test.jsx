import Rotas from './routes/routes'
import { render, screen } from '@testing-library/react'

describe('Tests the aplication', () => {
  it('Shoul render the aplication', () => {
    render(<Rotas />)

    screen.debug()
  })
})
