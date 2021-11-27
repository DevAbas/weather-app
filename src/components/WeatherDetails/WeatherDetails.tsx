import { WeatherHeavyCloud, WeatherHeavyRain } from '../UI/SVG/images';

const WeatherDetails: React.FC = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <span className='mb-4'>
          <WeatherHeavyRain fontSize='100px' />
        </span>
        <p className='text-3xl mb-4'>Cloudy</p>
        <p className='font-light text-8xl'>16°C</p>
      </div>

      <div className='mt-10'>
        <h3 className='text-2xl mb-3'>Weather Details</h3>
        <ul className='w-72'>
          <li className='w-full flex justify-between font-light'>
            <span>Cloudy</span>
            <span>80%</span>
          </li>
          <li className='w-full flex justify-between font-light'>
            <span>Humidity</span>
            <span>62%</span>
          </li>
          <li className='w-full flex justify-between font-light'>
            <span>Wind</span>
            <span>8km/h</span>
          </li>
        </ul>
      </div>

      <div className='mt-10'>
        <h3 className='text-2xl mb-3'>Next Day</h3>
        <ul>
          <li className='flex items-center font-light'>
            <span className='text-5xl mr-5'>
              <WeatherHeavyCloud />
            </span>
            <span className='mr-5'>Rainy</span>
            <span>11°C</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WeatherDetails;
