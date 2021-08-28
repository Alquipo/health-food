import { render, screen } from 'utils/test-utils'

import RecipeSection from '.'

jest.mock('components/RecipeCard', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock RecipeCard"></div>
    }
  }
})

describe('<RecipeSection/>', () => {
  it('should render a service section correctly', () => {
    const { container } = render(<RecipeSection />)

    expect(
      screen.getByRole('heading', {
        name: /Our Best Recipes/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts./i
      )
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock RecipeCard')).toHaveLength(4)
    expect(container.firstChild).toMatchSnapshot()
  })
})
