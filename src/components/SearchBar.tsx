import { Input } from '@/components/ui/input';
import { useSearchContext } from '@/contexts/SearchContext';
import { Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function SearchBar() {
  const { searchString, setSearchString } = useSearchContext();
  const location = useLocation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      {location.pathname === '/' && (
        <div className='w-full flex justify-center items-center'>
          <div className='relative'>
            <Search
              className='absolute z-10 left-3 top-1/2 text-muted-foreground -translate-y-1/2'
              size={16}
            />
            <Input
              className='w-[400px] relative pl-10'
              placeholder='Search...'
              onChange={handleChange}
              value={searchString}
            />
          </div>
        </div>
      )}
    </>
  );
}
