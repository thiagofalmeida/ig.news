import { render, screen } from '@testing-library/react'
import ActiveLink from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component', () => {
  it('renders correctly', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>testing...</a>
      </ActiveLink>
    )
  
    expect(screen.getByText('testing...')).toBeInTheDocument()
  })
  
  it('adds active class if the link as currently active', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>testing...</a>
      </ActiveLink>
    )
  
    expect(screen.getByText('testing...')).toHaveClass('active')
  })
})