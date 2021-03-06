import * as React from 'react';

function SvgWeatherClear(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 18 18'
      width='1em'
      height='1em'
      {...props}
    >
      <defs>
        <path id='weather-clear_svg__a' d='M0 0h18v18H0z' />
      </defs>
      <clipPath id='weather-clear_svg__b'>
        <use xlinkHref='#weather-clear_svg__a' overflow='visible' />
      </clipPath>
      <path
        d='M15.762 9.903c-.398-.261-.618-.588-.618-.921 0-.334.22-.661.617-.921l2.024-1.321a.475.475 0 00-.272-.873l-2.51.065c-.486 0-.864-.158-1.062-.446-.186-.267-.202-.639-.05-1.049l.821-2.201a.473.473 0 00-.722-.549l-1.944 1.426c-.779.571-1.623.321-1.899-.574L9.453.298C9.33-.1 8.67-.1 8.547.298l-.692 2.241c-.278.896-1.123 1.146-1.901.575L4.01 1.687a.473.473 0 00-.723.549l.821 2.201c.153.41.135.782-.049 1.049-.199.288-.575.446-1.117.446h-.004L.486 5.867a.473.473 0 00-.465.334.477.477 0 00.194.539l2.023 1.321c.398.26.618.587.618.921 0 .333-.22.661-.618.921l-2.023 1.32a.477.477 0 00-.194.539c.064.203.249.32.465.334l2.51-.064c.486 0 .863.157 1.063.444.184.269.202.641.049 1.051l-.821 2.2a.474.474 0 00.723.549l1.944-1.426c.78-.571 1.624-.319 1.901.574l.692 2.241a.474.474 0 00.906.001l.693-2.241c.276-.895 1.12-1.144 1.899-.574l1.944 1.426c.086.063.2.098.289.092a.48.48 0 00.482-.475.472.472 0 00-.092-.28l-.778-2.086c-.152-.41-.136-.782.05-1.051.198-.286.576-.453 1.12-.443l2.452.063c.217-.013.401-.131.465-.334a.478.478 0 00-.193-.539l-2.022-1.321zM9 12.5c-1.93 0-3.5-1.57-3.5-3.5S7.07 5.5 9 5.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5'
        clipPath='url(#weather-clear_svg__b)'
        fill='#c88c32'
      />
    </svg>
  );
}

export default SvgWeatherClear;
