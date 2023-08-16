import { useTheme } from '@/components/providers/ThemeProvider.tsx';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

export default function ColorModeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='hover:bg-inherit'
    >
      <Sun className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 hover:text-primary' />
      <Moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hover:text-primary' />
    </Button>
  );
}
