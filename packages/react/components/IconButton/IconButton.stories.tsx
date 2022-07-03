import { ComponentStory } from "@storybook/react";
import IconButton from "./IconButton";
import { Add } from "../Icon/index";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "IconButton",
  component: IconButton,
};

const Template: ComponentStory<typeof IconButton> = (props) => {
  return <IconButton {...props}>Button</IconButton>;
};

export const AddIconLeftButton = Template.bind({});
AddIconLeftButton.args = {
  color: "primary",
  radius: "xl",
  size: "md",
  disabled: false,
  icon: {
    position: "left",
    component: <Add />,
  },
};

export const AddIconRightButton = Template.bind({});
AddIconRightButton.args = {
  color: "primary",
  radius: "xl",
  size: "md",
  disabled: false,
  icon: {
    position: "right",
    component: <Add />,
  },
};
