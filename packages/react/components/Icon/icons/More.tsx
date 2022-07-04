import * as React from 'react';
import { SVGProps } from 'react';

const SvgMore = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path
      d="M6.043 4.957a1 1 0 0 1 1.414-1.414L11.914 8l-4.457 4.457a1 1 0 0 1-1.414-1.414L9.086 8 6.043 4.957z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMore;
