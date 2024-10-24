import { StoryFn, Meta } from '@storybook/react'
import Modal from './modal'
import defaultStyle from './style.stories'
import closeButtonImg from './assets/delete.png'

export default {
  title: 'ReactComponentLibrary/Rating',
  component: Modal,
} as Meta<typeof Modal>

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />

export const RatingTestWithImage = Template.bind({})
RatingTestWithImage.args = {
  message: 'Rating Test With Image',
  modalCloseButtonImg: closeButtonImg,
}

export const RatingWithNewStyle= Template.bind({})
RatingWithNewStyle.args = {
  message: "Rating With New Style injected",
}

export const RatingByDefault = Template.bind({})
RatingByDefault.args = {
  message: "Rating By Default",
}
