import HashLoader from 'react-spinners/HashLoader';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';

import { appAnimations } from './animations';
import { fetchWeather } from './api';

import { useState } from 'react';

import { SearchLocation } from './components/SearchLocation';
import { Logo } from './components/UI/Logo';
import { WeatherBox } from './components/UI/WeatherBox';
import { WeatherDetails } from './components/WeatherDetails';

const defaultLocations = 638242;

function App() {
  const [currentLocation, setCurrentLocation] = useState(defaultLocations);

  const { data, isLoading } = useQuery(
    ['weatherDetails', currentLocation],
    () => fetchWeather(currentLocation)
  );

  return (
    <WeatherBox>
      {isLoading && (
        <div className='absolute top-14 right-14'>
          <HashLoader color='#FFF' />
        </div>
      )}

      {data && (
        <div className='w-full flex justify-between'>
          <div className='flex flex-col'>
            <motion.div
              variants={appAnimations.logoVariants}
              initial='hidden'
              animate='show'
              className='mb-20'
            >
              <Logo />
            </motion.div>

            <motion.div
              variants={appAnimations.searchLocationVariants}
              initial='hidden'
              animate='show'
              className='w-72'
            >
              <SearchLocation
                setNewLocation={(newLocation: number) =>
                  setCurrentLocation(newLocation)
                }
              />
            </motion.div>

            <motion.div
              className='mt-auto'
              variants={appAnimations.cityNameContainerVariants}
              initial='hidden'
              animate='show'
            >
              <motion.h2
                variants={appAnimations.cityNameItemVariants}
                className='text-8xl'
              >
                {data.title}
              </motion.h2>
              <motion.p
                variants={appAnimations.cityNameItemVariants}
                className='font-light mt-5'
              >
                {new Date(data.time).toLocaleString('default', {
                  month: 'long',
                  day: '2-digit',
                  year: 'numeric',
                })}
              </motion.p>
            </motion.div>
          </div>
          <div>
            <WeatherDetails data={data} />
          </div>
        </div>
      )}
    </WeatherBox>
  );
}

export default App;
