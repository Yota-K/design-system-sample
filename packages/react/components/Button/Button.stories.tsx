import { ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = (props) => {
  return <Button {...props}>Button</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  radius: 'xl',
  size: 'md',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  radius: 'xl',
  size: 'md',
  disabled: false,
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
  radius: 'xl',
  size: 'md',
  disabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
  radius: 'xl',
  size: 'md',
  disabled: false,
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  radius: 'xl',
  size: 'md',
  disabled: false,
};

export const Info = Template.bind({});
Info.args = {
  color: 'info',
  radius: 'xl',
  size: 'md',
  disabled: false,
};
