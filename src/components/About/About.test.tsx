import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from './About'

describe('About Component', () => {
  it('renders about section', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument()
  })
})
