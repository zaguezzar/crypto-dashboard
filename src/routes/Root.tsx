import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import { TailwindIndicator } from '@/components/TailwindIndicator';
import SearchContextProvider from '@/components/providers/SearchContextProvider';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <SearchContextProvider>
      <Navbar />
      <main className='px-12 md:px-16 lg:px-24 pt-24 pb-12'>
        <SearchBar alt />
        <Outlet />
      </main>

      <TailwindIndicator />
    </SearchContextProvider>
  );
}
