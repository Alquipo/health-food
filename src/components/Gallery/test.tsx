import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import Gallery from '.'

import mockItems from './mock'

describe('<Gallery />', () => {
  it('should render BlogCards', () => {
    render(<Gallery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('img', {
        name: mockItems[0].label
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: mockItems[1].label
      })
    ).toBeInTheDocument()
  })
})
