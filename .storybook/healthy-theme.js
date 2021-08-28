import { create } from '@storybook/theming'
import theme from '../src/styles/theme'
import logo from '../public/img/logo.svg'

export default create({
  base: 'light',
  colorSecondary: theme.colors.primary,

  brandTitle: 'Healthy Food',
  brandUrl: 'https://health-food.alquipo.dev/',
  brandImage: logo
})
