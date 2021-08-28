import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argsTypes: {
    children: {
      type: 'string'
    },
    boxShadow: {
      control: {
        type: 'boolean'
      }
    },
    fullSize: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'See Recipe'
}
