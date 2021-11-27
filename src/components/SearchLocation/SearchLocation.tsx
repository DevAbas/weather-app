import { SearchIcon } from '../UI/SVG/images';

const SearchLocation: React.FC = () => {
  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Enter city'
        className='w-full bg-transparent border-b border-white text-white placeholder-white placeholder-opacity-50 pb-3 outline-none'
      />
      <span className='absolute right-0 top-1'>
        <SearchIcon />
      </span>
    </div>
  );
};

export default SearchLocation;
