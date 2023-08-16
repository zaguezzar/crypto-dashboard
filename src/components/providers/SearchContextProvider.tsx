import { ISearchContext, SearchContext } from '@/contexts/SearchContext';
import { ReactNode, useState } from 'react';

interface SearchProviderProps {
  children: ReactNode;
}

export default function SearchProvider({ children }: SearchProviderProps) {
  const [searchString, setSearchString] = useState('');

  const contextValue: ISearchContext = {
    searchString,
    setSearchString,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}
