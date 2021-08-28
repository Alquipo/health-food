import { render, screen } from 'utils/test-utils'

import BlogSection from '.'

jest.mock('components/Gallery', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Gallery" />
  }
}))

describe('<BlogSection/>', () => {
  it('should render a Blog Section correctly', () => {
    const { container } = render(<BlogSection />)

    expect(
      screen.getByRole('heading', { name: /Read Our Blog/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts./i
      )
    ).toBeInTheDocument()

    expect(screen.getAllByTestId(/mock Gallery/i)).toHaveLength(1)

    expect(container.firstChild).toMatchSnapshot()
  })
})
