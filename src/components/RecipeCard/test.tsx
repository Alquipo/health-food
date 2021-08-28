import { render, screen } from 'utils/test-utils'

import RecipeCard from '.'

const props = {
  image: '/img/comida_1.svg',
  title: 'Broccoli Saladwith Bacon'
}

describe('<RecipeCard/>', () => {
  it('should render a service section correctly', () => {
    const { container } = render(<RecipeCard {...props} />)

    expect(
      screen.getByRole('img', {
        name: props.title
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: props.title
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /See Recipe/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
