import { render, screen } from '@testing-library/react'
import Archive from '../app/poems/page'

// Mock Next.js components
jest.mock('next/link', () => {
  return function MockLink({ children, href, className }: any) {
    return <a href={href} className={className}>{children}</a>
  }
})

// Mock the custom components
jest.mock('../app/PageHeader', () => {
  return function MockPageHeader({ text }: { text: string }) {
    return <div data-testid="page-header">{text}</div>
  }
})

jest.mock('../app/Divider', () => {
  return function MockDivider() {
    return <div data-testid="divider" />
  }
})

// Mock the font
jest.mock('../app/fonts/Bookmania', () => ({
  BookMania: { className: 'mock-bookmania' }
}))

describe('Archive Page', () => {
  it('renders the archive page with header', () => {
    render(<Archive />)
    
    // Check for page header
    expect(screen.getByTestId('page-header')).toBeInTheDocument()
    expect(screen.getByText('Poetry delight every month')).toBeInTheDocument()
    
    // Check for archive title
    expect(screen.getByText('Archive')).toBeInTheDocument()
  })

  it('displays poem list with data', () => {
    render(<Archive />)
    
    // Check that poems are listed - these should come from allPoems
    expect(screen.getByText(/For A New Beginning/)).toBeInTheDocument()
    expect(screen.getByText(/Thank You/)).toBeInTheDocument()
    
    // Check for dates in the format (Month Year) - check that at least one exists
    expect(screen.getAllByText(/\w+ 2024/)).toHaveLength(4) // Should have 4 poems with dates
  })

  it('renders poem links correctly', () => {
    render(<Archive />)
    
    // Check that poems are rendered as links
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
    
    // Check that links have the correct href pattern
    const poemLink = screen.getByText(/For A New Beginning/).closest('a')
    expect(poemLink).toHaveAttribute('href', '/poems/for-a-new-beginning')
  })

  it('includes divider component', () => {
    render(<Archive />)
    
    expect(screen.getByTestId('divider')).toBeInTheDocument()
  })
})