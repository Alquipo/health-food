import { render, screen } from 'utils/test-utils'

import JoinSection from '.'

describe('<JoinSection/>', () => {
  it('should render a Join Section correctly', () => {
    const { container } = render(<JoinSection />)

    expect(screen.getByTestId(/email/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Join/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Join our membership to get special offer/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
