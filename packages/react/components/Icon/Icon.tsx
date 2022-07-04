import React from 'react';
import { styled } from '@linaria/react';
import { SvgType } from './iconSvgType';

// 作り途中
// TODO: svgのパスが解決できない
type StyleProps = {
  width: string;
  height: string;
};

type IconProps = {
  name: SvgType;
} & Partial<StyleProps>;

const IconRoot = styled.i<StyleProps>`
  width: ${(props) => (props.width ? props.width : '20px')};
  height: ${(props) => (props.height ? props.height : '20px')};
`;

const Icon: React.FC<IconProps> = ({ name, width = '20px', height = '20px' }) => {
  return <IconRoot style={{ WebkitMaskImage: `url(./svg/${name})` }} width={width} height={height} />;
};

export default Icon;
