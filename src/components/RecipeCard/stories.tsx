import { Story, Meta } from '@storybook/react'
import RecipeCard, { RecipeCardProps } from '.'

export default {
  title: 'RecipeCard',
  component: RecipeCard
} as Meta

export const Default: Story<RecipeCardProps> = (args) => (
  <RecipeCard {...args} />
)

Default.args = {
  image: '/img/comida_1.svg',
  title: 'Broccoli Saladwith Bacon'
}
