import * as React from 'react';

function SvgWeatherHeavyCloud(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15 11c-.018 0-.033.005-.05.005A3.49 3.49 0 0011.5 8 3.5 3.5 0 008 11.5a.5.5 0 01-1 0c0-.495.1-.962.248-1.408A3.287 3.287 0 006.5 10a3.5 3.5 0 100 7H15a3 3 0 000-6z'
        fill='#DDDCDC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.771 9A4.493 4.493 0 0111.5 7c.743 0 1.449.189 2.074.52.265-.448.426-.963.426-1.52a3 3 0 00-3-3c-.273 0-.533.048-.785.117A3.504 3.504 0 007 1a3.5 3.5 0 00-3.213 2.118A2.931 2.931 0 003 3a3 3 0 000 6h4.771z'
        fill='#DDDCDC'
      />
    </svg>
  );
}

export default SvgWeatherHeavyCloud;
