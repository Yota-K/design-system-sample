import * as React from 'react';
import { SVGProps } from 'react';

const SvgLike = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 2.75a3 3 0 0 1 3 3c0 3.967-4.663 6.963-5.767 7.617a.452.452 0 0 1-.466 0C6.663 12.713 2 9.717 2 5.75a3 3 0 0 1 3-3c1.127 0 2.34.852 3 1.918.66-1.066 1.873-1.918 3-1.918z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLike;
