import { Github } from 'lucide-react';
import ColorModeButton from './ColorModeButton';
import Logo from './Logo';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
    <nav className='px-24 py-8 flex justify-between items-center'>
      <Logo />
      <SearchBar />
      <div className='flex gap-x-4 items-center'>
        <ColorModeButton />
        <a href='https://www.github.com'>
          <Github className='hover:text-primary' />
        </a>
      </div>
    </nav>
  );
}
