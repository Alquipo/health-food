import { Story, Meta } from '@storybook/react'
import BlogCard, { BlogCardProps } from '.'

export default {
  title: 'BlogCard',
  component: BlogCard,
  args: {
    image: '/img/bloco_image_1.svg',
    title: 'Quick-start guide to nuts and seeds',
    authorName: 'Kevin Ibrahim',
    authorPhoto: '/img/ibrahim.png'
  }
} as Meta

export const Default: Story<BlogCardProps> = (args) => (
  <div style={{ maxWidth: '34rem' }}>
    <BlogCard {...args} />
  </div>
)
