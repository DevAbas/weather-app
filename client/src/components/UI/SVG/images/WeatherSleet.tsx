import * as React from 'react';

function SvgWeatherSleet(props: React.SVGProps<SVGSVGElement>) {
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
        d='M10 13a1 1 0 11-2 0 1 1 0 112 0zM6 13a1 1 0 11-2 0 1 1 0 112 0zM14 13a1 1 0 11-2 0 1 1 0 112 0z'
        fill='#02AFBE'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.5 4c-.213 0-.42.026-.622.062A3.995 3.995 0 0010 1a4 4 0 00-4 4 .5.5 0 01-1 0c0-.622.128-1.212.337-1.762A3.978 3.978 0 004 3a4 4 0 000 8h10.5a3.5 3.5 0 100-7z'
        fill='#BEBDBD'
      />
      <path
        d='M8 16a1 1 0 11-2 0 1 1 0 112 0zM12 16a1 1 0 11-2 0 1 1 0 112 0z'
        fill='#02AFBE'
      />
    </svg>
  );
}

export default SvgWeatherSleet;
