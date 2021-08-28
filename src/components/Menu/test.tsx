import { fireEvent, render, screen, waitFor } from 'utils/test-utils'

import Menu from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))

describe('<Menu/>', () => {
  it('should render a Menu correctly', () => {
    const { container } = render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Healthy Food/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /Healthy Recipes/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /Blog/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /Join/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /Register/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should handle submit button ', () => {
    render(<Menu />)

    const handleMobileMenu = jest.fn()

    fireEvent.click(screen.getByLabelText(/Open Menu/i))

    waitFor(() => {
      expect(handleMobileMenu).toHaveBeenCalled()
    })
  })
})
