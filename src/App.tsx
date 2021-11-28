import { motion } from 'framer-motion';

import { appAnimations } from './animations';

import { SearchLocation } from './components/SearchLocation';
import { Logo } from './components/UI/Logo';
import { WeatherBox } from './components/UI/WeatherBox';
import { WeatherDetails } from './components/WeatherDetails';

function App() {
  return (
    <WeatherBox>
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
            className='w-72 h-10 overflow-hidden'
          >
            <SearchLocation />
          </motion.div>

          <motion.div
            className='mt-auto'
            variants={appAnimations.cityNameContainerVariants}
            initial='hidden'
            animate='show'
          >
            <motion.h2
              variants={appAnimations.cityNameItemVariants}
              className='text-8xl mb-1 h-24 overflow-hidden'
            >
              London
            </motion.h2>
            <motion.p
              variants={appAnimations.cityNameItemVariants}
              className='font-light'
            >
              November 23, 2021
            </motion.p>
          </motion.div>
        </div>
        <div>
          <WeatherDetails />
        </div>
      </div>
    </WeatherBox>
  );
}

export default App;
