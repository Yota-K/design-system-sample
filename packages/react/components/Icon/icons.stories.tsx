import { SVGProps } from 'react';
import { Story } from '@storybook/react';
import { Add, Back, Book, Check } from './icons/index';

export default {
  title: 'Icons',
  args: {
    color: 'red',
    width: '24px',
    height: '24px',
  },
};

const allIcons = (props: SVGProps<SVGSVGElement>) => {
  return [<Add {...props} /> ,<Back {...props} /> ,<Book {...props} /> ,<Check {...props} /> ];
};

export const AllIcons: Story<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <div>
      {allIcons(props).map((icon) => (
        <>{icon}</>
      ))}
    </div>
  );
};
