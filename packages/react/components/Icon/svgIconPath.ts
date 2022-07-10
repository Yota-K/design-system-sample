import Add from './svg/Add.svg';
import Back from './svg/Back.svg';
import Book from './svg/Book.svg';
import Check from './svg/Check.svg';
import Info from './svg/Info.svg';
import Like from './svg/Like.svg';
import More from './svg/More.svg';
import Pencil from './svg/Pencil.svg';
import Search from './svg/Search.svg';

export const svgs = ['Add', 'Back', 'Book', 'Check', 'Info', 'Like', 'More', 'Pencil', 'Search'] as const;
export type SvgType = typeof svgs[number];

const svgObj = {
  Add: Add,
  Back: Back,
  Book: Book,
  Check: Check,
  Info: Info,
  Like: Like,
  More: More,
  Pencil: Pencil,
  Search: Search,
};

export const getSvgIconPath = (iconName: SvgType) => {
  const iconSvg = (iconName: SvgType) => {
    if (iconName) {
      return svgObj[iconName];
    }
    throw new Error('Passed Invalid Svg');
  };

  return `url('${iconSvg(iconName)}')`;
};
