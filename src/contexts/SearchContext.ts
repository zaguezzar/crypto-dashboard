import { createContext, useContext } from 'react';

export interface ISearchContext {
  searchString: string;
  setSearchString: (search: string) => void;
}

export const SearchContext = createContext<ISearchContext | undefined>(
  undefined
);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error(
      'Bruh: useSearchContext must be used within a SearchProvider'
    );
  }
  return context;
};
