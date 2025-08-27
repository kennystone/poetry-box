import { render, screen } from '@testing-library/react'
import Home from '../app/page'

// Mock the ForANewBeginning component since it's complex with fonts and styling
jest.mock('../app/poems/for-a-new-beginning/page', () => {
  return function MockForANewBeginning() {
    return (
      <div data-testid="for-a-new-beginning">
        <h1>For A New Beginning</h1>
        <p>In out-of-the-way places of the heart</p>
      </div>
    )
  }
})

describe('Home Page', () => {
  it('renders the home page', () => {
    render(<Home />)
    
    // Check that the ForANewBeginning component is rendered
    expect(screen.getByTestId('for-a-new-beginning')).toBeInTheDocument()
    expect(screen.getByText('For A New Beginning')).toBeInTheDocument()
  })

  it('displays poem content', () => {
    render(<Home />)
    
    // Check that poem content is visible
    expect(screen.getByText('In out-of-the-way places of the heart')).toBeInTheDocument()
  })
})