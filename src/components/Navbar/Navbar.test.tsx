import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Navbar from './Navbar'

describe('Navbar Component', () => {
  it('renders desktop navigation links', () => {
    render(<Navbar />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    
    // Mobile toggle button check
    const toggleBtn = screen.getByRole('button')
    expect(toggleBtn).toBeInTheDocument()
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Navbar />)
    
    const toggleBtn = screen.getByRole('button')
    fireEvent.click(toggleBtn)
    
    // The mobile menu overlay should appear, which is a list that was hidden before
    const lists = screen.getAllByRole('list')
    expect(lists.length).toBeGreaterThan(1) // Desktop + Mobile list
  })
})
