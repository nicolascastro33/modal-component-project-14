import { StoryFn, Meta } from '@storybook/react'
import Modal from './modal'
import defaultStyle, { modalCloseButton, overlayModal, modal } from './style.stories'
import closeButtonImg from './assets/delete.png'
import { transform } from '@babel/core'

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

export const RatingWithNewStyle = Template.bind({})
RatingWithNewStyle.args = {
  message: 'Rating With New Style injected',
  style: {
    ...defaultStyle,
    overlayModal: {
      ...overlayModal,
      backgroundColor: 'green',
    },
    modalCloseButton: {
      ...modalCloseButton,
    },
    modal: {
      ...modal,
      backgroundColor: "yellow",
      borderRadius :"none", 
      cursor: "wait",
      "&:hover":{
        transform: "scale(2)",
      },
    },
  },
}

export const RatingByDefault = Template.bind({})
RatingByDefault.args = {
  message: 'Rating By Default',
}
