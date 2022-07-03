import { ReactNode, forwardRef } from "react";
import Button, { ButtonProps } from "../Button/Button";

type IconButtonProps = ButtonProps & {
  icon?: {
    position: "left" | "right";
    component: ReactNode;
  };
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, icon, ...rest }, ref) => {
    return (
      <Button {...rest} ref={ref}>
        {icon && icon.position === "left" && <>{icon.component}</>}
        <span>{children}</span>
        {icon && icon.position === "right" && <>{icon.component}</>}
      </Button>
    );
  }
);

export default IconButton;
