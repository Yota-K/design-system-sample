import * as React from 'react';
import { SVGProps } from 'react';

const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path
      d="M9.974 3.193a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1 0 1.414l-1.06 1.061-2.829-2.828 1.061-1.061zM8.206 4.96 3.61 9.558l-.56 2.8a.5.5 0 0 0 .588.588l2.8-.56 4.597-4.596-2.829-2.828z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPencil;
