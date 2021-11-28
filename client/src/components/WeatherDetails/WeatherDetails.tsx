import { motion } from 'framer-motion';

import { weatherDetailsAnimations } from '../../animations';
import { ShowWeatherDays, WeatherResponse } from '../../types';
import { mphToKnots } from '../../utils/mphToKnots';

import { WeatherHeavyCloud, WeatherHeavyRain } from '../UI/SVG/images';

type WeatherDetailsProps = { data: WeatherResponse };

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  data,
}: WeatherDetailsProps) => {
  const weatherDetailsOfToday =
    data.consolidated_weather[ShowWeatherDays.Today];
  const weatherDetailsOfTomorrow =
    data.consolidated_weather[ShowWeatherDays.Tomorrow];

  return (
    <>
      <div className='flex flex-col items-center'>
        <motion.span
          className='mb-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: 'easeInOut', delay: 1 } }}
        >
          <WeatherHeavyRain fontSize='100px' />
        </motion.span>
        <motion.div
          className='flex flex-col items-center'
          variants={weatherDetailsAnimations.tempratureContainerVariants}
          initial='hidden'
          animate='show'
        >
          <motion.p
            className='text-3xl mb-4'
            variants={weatherDetailsAnimations.tempratureItemVariants}
          >
            {weatherDetailsOfToday.weather_state_name}
          </motion.p>
          <motion.p
            className='font-light text-8xl'
            variants={weatherDetailsAnimations.tempratureItemVariants}
          >
            {`${Math.round(weatherDetailsOfToday.the_temp)}°C`}
          </motion.p>
        </motion.div>
      </div>

      <div className='mt-10'>
        <motion.h3
          className='text-2xl mb-3'
          variants={weatherDetailsAnimations.weatherDetailsTitleVariants}
          initial='hidden'
          animate='show'
        >
          Weather Details
        </motion.h3>
        <motion.ul
          className='w-72'
          variants={weatherDetailsAnimations.infoContainerVariants}
          initial='hidden'
          animate='show'
        >
          <motion.li
            className='w-full flex justify-between font-light mb-1'
            variants={weatherDetailsAnimations.infoItemVariants}
          >
            <span>Wind Speed</span>
            <span>
              {`${Math.round(mphToKnots(weatherDetailsOfToday.wind_speed))}kn`}
            </span>
          </motion.li>
          <motion.li
            className='w-full flex justify-between font-light mb-1'
            variants={weatherDetailsAnimations.infoItemVariants}
          >
            <span>Humidity</span>
            <span>{`${weatherDetailsOfToday.humidity}%`}</span>
          </motion.li>
          <motion.li
            className='w-full flex justify-between font-light'
            variants={weatherDetailsAnimations.infoItemVariants}
          >
            <span>Confidence</span>
            <span>{`${weatherDetailsOfToday.predictability}%`}</span>
          </motion.li>
        </motion.ul>
      </div>

      <div className='mt-10'>
        <motion.h3
          className='text-2xl mb-3'
          variants={weatherDetailsAnimations.weatherDetailsTitleVariants}
          initial='hidden'
          animate='show'
        >
          Next Day
        </motion.h3>
        <motion.ul
          variants={weatherDetailsAnimations.infoContainerVariants}
          initial='hidden'
          animate='show'
        >
          <motion.li
            className='flex items-center font-light'
            variants={weatherDetailsAnimations.infoItemVariants}
          >
            <span className='text-5xl mr-5'>
              <WeatherHeavyCloud />
            </span>
            <span className='mr-5'>
              {weatherDetailsOfTomorrow.weather_state_name}
            </span>
            <span>{`${Math.round(weatherDetailsOfTomorrow.the_temp)}°C`}</span>
          </motion.li>
        </motion.ul>
      </div>
    </>
  );
};

export default WeatherDetails;
