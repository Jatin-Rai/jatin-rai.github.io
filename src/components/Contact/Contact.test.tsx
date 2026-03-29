import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from './Contact'

describe('Contact Component', () => {
  it('renders contact section', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /Contact/i })).toBeInTheDocument()
  })
})
