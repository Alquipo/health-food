import { render, screen } from 'utils/test-utils'

import Footer from '.'

describe('<Footer/>', () => {
  it('should render a Footer Section correctly', () => {
    const { container } = render(<Footer />)

    expect(
      screen.getByText(/© Copyrights 2019 Stack. All Rights Reserved./i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Privacy Policy/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Terms and Conditions/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
