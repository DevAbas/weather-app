import * as React from 'react';

function SvgWeatherThunderStorm(props: React.SVGProps<SVGSVGElement>) {
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
        d='M14.5 3c-.213 0-.42.026-.623.062A3.995 3.995 0 0010 0a4 4 0 00-4 4 .5.5 0 01-1 0c0-.622.127-1.212.336-1.762A3.973 3.973 0 004 2a4 4 0 000 8h10.5a3.5 3.5 0 100-7z'
        fill='#BEBDBD'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.057 11H7.143L5 14h2.855L5 18l8-5.143H9.57L11.057 11z'
        fill='#DBBD45'
      />
    </svg>
  );
}

export default SvgWeatherThunderStorm;
