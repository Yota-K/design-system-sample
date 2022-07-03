import * as React from 'react';
import { SVGProps } from 'react';

const SvgBack = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path
      d="M9.961 11.043a1 1 0 0 1-1.414 1.414L4.09 8l4.457-4.457a1 1 0 0 1 1.414 1.414L6.92 8l3.042 3.043z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBack;
