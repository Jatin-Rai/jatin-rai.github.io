import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skills from './Skills'

describe('Skills Component', () => {
  it('renders skills section', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { name: /Skills/i })).toBeInTheDocument()
  })
})
