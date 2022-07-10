import { ComponentStory } from '@storybook/react';
import { iconsWrap, iconDiv } from './storyStyle';
import { svgs } from './svgIconPath';
import Icon from './Icon';

export default {
  title: 'Icons',
  args: {
    background: 'red',
  },
};

export const AllIcons: ComponentStory<typeof Icon> = (props) => {
  return (
    <div className={iconsWrap}>
      {svgs.map((icon, i) => (
        <div key={i} className={iconDiv}>
          <span>{icon}</span>
          <Icon {...props} name={icon} />
        </div>
      ))}
    </div>
  );
};
