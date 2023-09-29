import { Input } from '@/components/ui/input';
import { useSearchContext } from '@/contexts/SearchContext';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface ISearchBarProps {
  alt?: boolean;
}

export default function SearchBar({ alt }: ISearchBarProps) {
  const { searchString, setSearchString } = useSearchContext();
  const location = useLocation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      {location.pathname === '/' && (
        <div
          className={cn(
            'w-full justify-center items-center',
            alt ? 'flex md:hidden -mt-12 mb-6' : 'hidden md:flex'
          )}
        >
          <div className='relative w-full md:w-[400px]'>
            <Search
              className='absolute z-10 left-3 top-1/2 text-muted-foreground -translate-y-1/2'
              size={16}
            />
            <Input
              className='w-full relative pl-10'
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
