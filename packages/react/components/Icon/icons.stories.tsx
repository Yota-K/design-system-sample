import { SVGProps } from 'react';
import { Story } from '@storybook/react';
import { Add, Back, Book, Check, Info, Like, More, Pencil } from './icons/index';
import { iconsWrap, iconDiv } from './storyStyle';
import Icon from './Icon';

export default {
  title: 'Icons',
  args: {
    color: 'red',
    width: '16px',
    height: '16px',
  },
};

const allIcons = (props: SVGProps<SVGSVGElement>) => {
  return [
    <div className={iconDiv}>
      <span>Add</span>
      <Add {...props} />
    </div>,
    <div className={iconDiv}>
      <span>Back</span>
      <Back {...props} />
    </div>,
    <div className={iconDiv}>
      <span>Book</span>
      <Book {...props} />
    </div>,
    <div className={iconDiv}>
      <span>Check</span>
      <Check {...props} />
    </div>,
    <div className={iconDiv}>
      <span>Info</span>
      <Info {...props} />
    </div>,
    <div className={iconDiv}>
      <span>Like</span>
      <Like {...props} />
    </div>,
    <div className={iconDiv}>
      <span>More</span>
      <More {...props} />
    </div>,
    <div className={iconDiv}>
      <span>Pencil</span>
      <Pencil {...props} />
    </div>,
  ];
};

export const AllIcons: Story<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <div className={iconsWrap}>
      {allIcons(props).map((icon, i) => (
        <div key={i}>{icon}</div>
      ))}
      <Icon name="Add" />
    </div>
  );
};
