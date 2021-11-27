import { SearchLocation } from './components/SearchLocation';
import { Logo } from './components/UI/Logo';
import { WeatherBox } from './components/UI/WeatherBox';
import { WeatherDetails } from './components/WeatherDetails';

function App() {
  return (
    <WeatherBox>
      <div className='w-full flex justify-between'>
        <div className='flex flex-col'>
          <div className='mb-20'>
            <Logo />
          </div>

          <div className='w-72'>
            <SearchLocation />
          </div>

          <div className='mt-auto'>
            <h2 className='text-8xl mb-1'>London</h2>
            <p className='font-light'>November 23, 2021</p>
          </div>
        </div>
        <div>
          <WeatherDetails />
        </div>
      </div>
    </WeatherBox>
  );
}

export default App;
