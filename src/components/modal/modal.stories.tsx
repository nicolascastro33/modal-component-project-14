import { StoryFn, Meta } from "@storybook/react";
import Modal from "./modal";
import defaultStyle from "./style.stories";

export default {
  title: "ReactComponentLibrary/Rating",
  component: Modal,
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;


export const RatingTest = Template.bind({});
RatingTest.args = {
    message: 'Test Message',
    style: {...defaultStyle, modalCloseButton: {position: "absolute", top: '10px'}}
};

export const RatingSecondary = Template.bind({});
RatingSecondary.args = {
    message:"You're connected",
};