import { useState } from 'react';
import { useQuery } from 'react-query';
import PuffLoader from 'react-spinners/PuffLoader';
import { motion } from 'framer-motion';

import { fetchLocations } from '../../api';
import useDebounce from '../../hooks/useDebounce';

import { SearchIcon } from '../UI/SVG/images';

const listWrapperVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.8,
    },
  },
};

type SearchLocationProps = {
  setNewLocation: (newLocation: number) => void;
};

const SearchLocation: React.FC<SearchLocationProps> = ({
  setNewLocation,
}: SearchLocationProps) => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearch = useDebounce(searchValue, 500);

  const { data, isLoading } = useQuery(
    ['locations', debouncedSearch],
    () => fetchLocations(debouncedSearch),
    { enabled: debouncedSearch !== '' }
  );

  return (
    <>
      <div className='relative'>
        <input
          type='text'
          placeholder='Enter city'
          className='w-full bg-transparent border-b border-white text-white placeholder-white placeholder-opacity-50 pb-3 pr-8 outline-none'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <span className='absolute right-0 top-1 w-7'>
          {isLoading ? <PuffLoader color='#fff' size={20} /> : <SearchIcon />}
        </span>
      </div>
      {data && !!data.length && (
        <motion.ul
          className='mt-5'
          variants={listWrapperVariants}
          initial='hidden'
          animate='show'
        >
          {data.slice(0, 4).map((location) => (
            <li
              key={location.woeid}
              className='cursor-pointer'
              onClick={() => setNewLocation(location.woeid)}
            >
              {location.title}
            </li>
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default SearchLocation;
