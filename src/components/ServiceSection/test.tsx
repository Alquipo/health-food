import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import ServiceSection from '.'

describe('<ServiceSection/>', () => {
  it('should render a service section', () => {
    const { container } = render(<ServiceSection />)

    expect(
      screen.getByRole('heading', {
        name: /The best services ready To serve you/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts/i
      )
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean./i
      )
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /A small river named Duden flows by their place and supplies it with the necessary regelialia./i
      )
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Know More/i })).toHaveStyleRule(
      'box-shadow',
      `0 1.3rem 2.1rem -0.8rem ${theme.colors.primary}`
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
