import { ComponentStory } from '@storybook/react';
import IconButton from './IconButton';
import Add from '../Icon/icons/Add';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'IconButton',
  component: IconButton,
};

const Template: ComponentStory<typeof IconButton> = (props) => {
  return <IconButton {...props}>Button</IconButton>;
};

export const AddIconLeftButton = Template.bind({});
AddIconLeftButton.args = {
  color: 'primary',
  radius: 'xl',
  size: 'md',
  disabled: false,
  iconPosition: 'left',
  iconComponent: <Add style={{ marginRight: '4px' }} />,
};

export const AddIconRightButton = Template.bind({});
AddIconRightButton.args = {
  color: 'primary',
  radius: 'xl',
  size: 'md',
  disabled: false,
  iconPosition: 'right',
  iconComponent: <Add style={{ marginLeft: '4px' }} />,
};
