import { render, screen } from 'utils/test-utils'

import BlogCard from '.'

const blogCardMock = {
  image: '/img/bloco_image_1.svg',
  title: 'Quick-start guide to nuts and seeds',
  authorName: 'Kevin Ibrahim',
  authorPhoto: '/img/ibrahim.png'
}

describe('<BlogCard/>', () => {
  it('should render a BlogCard Section correctly', () => {
    const { container } = render(<BlogCard {...blogCardMock} />)

    expect(
      screen.getByRole('img', { name: blogCardMock.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: blogCardMock.authorName })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: blogCardMock.title })
    ).toBeInTheDocument()

    expect(screen.getByText(blogCardMock.authorName)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
