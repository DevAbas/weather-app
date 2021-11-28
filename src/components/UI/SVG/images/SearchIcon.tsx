import * as React from 'react';

function SvgSearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 23 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M22.233 22.233L16.1 16.1m-6.133 3.067a9.2 9.2 0 110-18.4 9.2 9.2 0 010 18.4z'
        stroke='#fff'
      />
    </svg>
  );
}

export default SvgSearchIcon;
