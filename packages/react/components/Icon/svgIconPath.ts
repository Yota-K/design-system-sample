import Add from './svg/Add.svg';
import Back from './svg/Back.svg';
import Book from './svg/Book.svg';
import Check from './svg/Check.svg';
import Info from './svg/Info.svg';
import Like from './svg/Like.svg';
import More from './svg/More.svg';
import Pencil from './svg/Pencil.svg';

const svgs = ['Add', 'Back', 'Book', 'Check', 'Info', 'Like', 'More', 'Pencil'] as const;
export type SvgType = typeof svgs[number];

export const getSvgIconPath = (iconName: SvgType) => {
  const changeIconSvg = (iconName: SvgType) => {
    switch (iconName) {
      case 'Add':
        return Add;
      case 'Back':
        return Back;
      case 'Book':
        return Book;
      case 'Check':
        return Check;
      case 'Info':
        return Info;
      case 'Like':
        return Like;
      case 'More':
        return More;
      case 'Pencil':
        return Pencil;
      default:
        throw new Error('Passed Invalid Svg');
    }
  };

  return `url('${changeIconSvg(iconName)}')`;
};
