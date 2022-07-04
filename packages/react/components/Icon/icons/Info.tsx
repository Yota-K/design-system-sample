import * as React from 'react';
import { SVGProps } from 'react';

const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm8 6A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm1.25-9a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM7 11.25v-3.5a1 1 0 0 1 2 0v3.5a1 1 0 1 1-2 0z"
      fill="currentColor"
    />
  </svg>
);

export default SvgInfo;
