import Navbar from '@/components/Navbar';
import { TailwindIndicator } from '@/components/TailwindIndicator';
import SearchContextProvider from '@/components/providers/SearchContextProvider';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <SearchContextProvider>
      <Navbar />
      <main className='px-24 pt-24 pb-12'>
        <Outlet />
      </main>
      <TailwindIndicator />
    </SearchContextProvider>
  );
}
