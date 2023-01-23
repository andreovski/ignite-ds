import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
} as Meta<BoxProps>

export const Primary: StoryObj = {
  args: {
    children: (
      <>
        <Text>Element Box</Text>
      </>
    ),
  },
}
