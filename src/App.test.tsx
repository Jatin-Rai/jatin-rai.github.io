import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
  it('renders correctly with all main sections', () => {
    const { container } = render(<App />)
    
    // Check main elements
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(container.querySelector('nav')).toBeInTheDocument() // Navbar
    expect(container.querySelector('footer')).toBeInTheDocument() // Footer
  })
})
