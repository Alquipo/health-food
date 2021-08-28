import { fireEvent, render, screen, waitFor } from 'utils/test-utils'

import IntroductionSection from '.'

describe('<IntroductionSection/>', () => {
  it('should render a Introduction Section correctly', () => {
    const { container } = render(<IntroductionSection />)

    expect(
      screen.getByRole('heading', {
        name: /Ready for Trying a new recipe?/i
      })
    ).toBeInTheDocument()

    expect(screen.getByTestId(/recipes/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /um peso e uma maçã/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should handle submit button ', () => {
    render(<IntroductionSection />)

    const handleSubmit = jest.fn()

    fireEvent.click(screen.getByLabelText(/submit/i))

    waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled()
    })
  })
})
