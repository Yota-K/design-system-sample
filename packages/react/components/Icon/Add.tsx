import React from "react";
import { Props } from "./type";

const Add: React.FC<Props> = ({
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
        d="M9 9h3a1 1 0 100-2H9V4a1 1 0 00-2 0v3H4a1 1 0 000 2h3v3a1 1 0 102 0V9z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default Add;
