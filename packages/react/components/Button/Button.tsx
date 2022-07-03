import React, { ReactNode, forwardRef } from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { buttonResetCss, buttonTextCss, buttonDisabledCss } from './style';

// TODO
// 1, ボタンってbuttonタグじゃなくてaタグ使いたいケースもあるのでそういう時どうするか考える
// 2, themeの値に設定されていない色や数値を指定したらエラーが出るようにする

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
type StyleProps = {
  // ボタンの色
  color: Color;
  // ボタンの丸み
  radius: Size;
  // ボタンの大きさ
  size: Size;
  // Linaria側でdisabledが有効になっているかどうかを受け取るためこっちに定義する
  disabled: boolean;
  // デフォルトのclassNameを当てるためこっちに定義する
  className: string;
};
export type ButtonProps = {
  children: ReactNode;
} & Partial<StyleProps> &
  Omit<React.ComponentPropsWithRef<'button'>, 'className' | 'disabled'>;

const ButtonRoot = styled.button<Omit<ButtonProps, 'children'>>`
  background: ${(props) => (props.color ? colorToProps(props.color).background : '#ff4785')};
  color: ${(props) => (props.color ? colorToProps(props.color).color : '#fff')};
  border-radius: ${(props) => (props.radius ? variantToRadius(props.radius) : '0px')};
  padding: ${(props) => (props.size ? sizeToProps(props.size).padding : '0px 8px')};
  height: ${(props) => (props.size ? sizeToProps(props.size).height : '36px')};
  font-size: ${(props) => (props.size ? sizeToProps(props.size).fontSize : '12px')};
`;

// 独自定義したコンポーネントにrefを渡すとエラーになるのでforwardRefを用いる
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, color = 'primary', size = 'xs', radius = 'xs', disabled = false, className, ...rest }, ref) => {
    return (
      <ButtonRoot
        {...rest}
        color={color}
        size={size}
        radius={radius}
        disabled={disabled}
        className={cx(buttonResetCss, className, disabled && buttonDisabledCss)}
        ref={ref}
      >
        <span className={buttonTextCss}>{children}</span>
      </ButtonRoot>
    );
  }
);

// TODO: themeの値に設定されていない色や数値を指定したらエラーが出るようにする
const colorToProps = (color: Color) => {
  switch (color) {
    case 'primary':
      return { color: '#fff', background: '#ff4785' } as const;
    case 'secondary':
      return { color: '#fff', background: '#1e75d6' } as const;
    case 'success':
      return { color: '#fff', background: '#198754' } as const;
    case 'warning':
      return { color: '#fff', background: '#ffc107' } as const;
    case 'danger':
      return { color: '#fff', background: '#dc3545' } as const;
    case 'info':
      return { color: '#fff', background: '#1e75d6' } as const;
    default:
      return { color: '#fff', background: '#ff4785' } as const;
  }
};

const sizeToProps = (size: Size) => {
  switch (size) {
    case 'xs':
      return { padding: '0px 14px', height: '30px', fontSize: '12px' } as const;
    case 'sm':
      return { padding: '0px 18px', height: '36px', fontSize: '14px' } as const;
    case 'md':
      return { padding: '0px 22px', height: '42px', fontSize: '16px' } as const;
    case 'lg':
      return { padding: '0px 26px', height: '50px', fontSize: '18px' } as const;
    case 'xl':
      return { padding: '0px 32px', height: '60px', fontSize: '20px' } as const;
    default:
      return { padding: '0px 14px', height: '36px', fontSize: '12px' } as const;
  }
};

const variantToRadius = (radius: Size) => {
  switch (radius) {
    case 'xs':
      return '0px';
    case 'sm':
      return '4px';
    case 'md':
      return '8px';
    case 'lg':
      return '12px';
    case 'xl':
      return '100vw';
    default:
      return '0px';
  }
};

export default Button;
