import { Input } from '@/components/ui/input';
import { useSearchContext } from '@/contexts/SearchContext';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const { searchString, setSearchString } = useSearchContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='relative'>
        <Search
          className='absolute bg-red-600 left-3 top-1/2 text-white -translate-y-1/2'
          size={20}
        />
        <Input
          className='w-[400px] relative pl-10'
          placeholder='Search...'
          onChange={handleChange}
          value={searchString}
        />
      </div>
    </div>
  );
}
