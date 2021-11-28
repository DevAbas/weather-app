import * as React from 'react';

function SvgWeatherHeal(props: React.SVGProps<SVGSVGElement>) {
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
        d='M3 14a1 1 0 11-2 0 1 1 0 112 0zM15 14a1 1 0 102 0 1 1 0 10-2 0zM10 17a1 1 0 11-2 0 1 1 0 112 0z'
        fill='#02AFBE'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.5 3c-.213 0-.42.026-.622.062A3.995 3.995 0 0010 0a4 4 0 00-4 4 .5.5 0 01-1 0c0-.622.128-1.212.337-1.762A3.978 3.978 0 004 2a4 4 0 000 8h10.5a3.5 3.5 0 100-7z'
        fill='#BEBDBD'
      />
      <path
        d='M6.5 11v4.215c-.433-.756-1.242-1.465-2.75-1.465a.25.25 0 000 .5c2.709 0 2.75 2.638 2.75 2.75v.001a.25.25 0 00.25.249.25.25 0 00.25-.243V11h-.5zM14.25 13.75c-1.508 0-2.317.709-2.75 1.465V11H11v6a.25.25 0 00.5 0c0-.112.031-2.75 2.75-2.75a.25.25 0 000-.5zM8.75 11v4a.25.25 0 00.5 0v-4h-.5z'
        fill='#BEBDBD'
      />
    </svg>
  );
}

export default SvgWeatherHeal;
