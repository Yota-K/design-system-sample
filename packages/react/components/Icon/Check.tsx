import React from "react";
import { Props } from "./type";

const Check: React.FC<Props> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return (
    <svg
      {...rest}
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      stroke={color}
    >
      <path
        d="M5.707 8.293a1 1 0 00-1.414 1.414L7 12.414l5.707-5.707a1 1 0 00-1.414-1.414L7 9.586 5.707 8.293z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default Check;
