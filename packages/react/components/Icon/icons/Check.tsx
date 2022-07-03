import * as React from "react";
import { SVGProps } from "react";

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      d="M5.707 8.293a1 1 0 0 0-1.414 1.414L7 12.414l5.707-5.707a1 1 0 0 0-1.414-1.414L7 9.586 5.707 8.293z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCheck;
