import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Esse est culpa aute nulla labore deserunt laborum cillum.',
  },
} as Meta<TextProps>

export const Primary: StoryObj = {}

export const CustomTag: StoryObj = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
