import { ReactNode, forwardRef } from 'react';
import Button, { ButtonProps } from '../Button/Button';

type IconButtonProps = ButtonProps & {
  iconPosition: 'left' | 'right';
  iconComponent: ReactNode;
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, iconPosition, iconComponent, ...rest }, ref) => {
    return (
      <Button {...rest} ref={ref}>
        {iconComponent && iconPosition === 'left' && <>{iconComponent}</>}
        <span>{children}</span>
        {iconComponent && iconPosition === 'right' && <>{iconComponent}</>}
      </Button>
    );
  }
);

export default IconButton;
