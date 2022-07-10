import React from 'react';
import { styled } from '@linaria/react';
import { SvgType, getSvgIconPath } from './svgIconPath';

type StyleProps = {
  width: string;
  height: string;
  background: string;
};

type IconProps = {
  name: SvgType;
} & Partial<StyleProps> &
  React.HtmlHTMLAttributes<HTMLLIElement>;

const IconRoot = styled.i<StyleProps & { name: string }>`
  mask-image: ${(props) => props.name && props.name};
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  background: ${(props) => props.background && props.background};
`;

const Icon: React.FC<IconProps> = ({
  name,
  width = '20px',
  height = '20px',
  background = 'currentColor',
  ...props
}) => {
  return <IconRoot {...props} name={getSvgIconPath(name)} width={width} height={height} background={background} />;
};

export default Icon;
