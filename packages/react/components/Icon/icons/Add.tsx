import * as React from 'react';
import { SVGProps } from 'react';

const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path d="M9 9h3a1 1 0 1 0 0-2H9V4a1 1 0 0 0-2 0v3H4a1 1 0 0 0 0 2h3v3a1 1 0 1 0 2 0V9z" fill="currentColor" />
  </svg>
);

export default SvgAdd;
