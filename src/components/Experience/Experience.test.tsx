import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Experience from './Experience'

describe('Experience Component', () => {
  it('renders experience section', () => {
    render(<Experience />)
    expect(screen.getByRole('heading', { name: /Experience/i })).toBeInTheDocument()
  })
})
