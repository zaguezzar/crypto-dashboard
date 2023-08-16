import { ISearchContext, SearchContext } from '@/contexts/SearchContext';
import { ReactNode, useState } from 'react';

interface SearchProviderProps {
  children: ReactNode;
}

export default function SearchProvider({ children }: SearchProviderProps) {
  const [searchString, setSearchString] = useState('');
  const [key, setKey] = useState(0);

  const contextValue: ISearchContext = {
    searchString,
    setSearchString: (newSearchString: string) => {
      setSearchString(newSearchString);
      setKey((prevKey) => prevKey + 1); // Update the key
    },
  };

  return (
    <SearchContext.Provider
      key={key}
      value={contextValue}
    >
      {children}
    </SearchContext.Provider>
  );
}
