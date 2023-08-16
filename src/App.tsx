import QueryClientProvider from '@/components/providers/QueryClientProvider';
import ThemeProvider from '@/components/providers/ThemeProvider';
import Home from '@/routes/Home';
import Root from '@/routes/Root';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CoinDetails from './routes/CoinDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/coin/:uuid',
        element: <CoinDetails />,
      },
    ],
  },
]);

export default function App() {
  return (
    <ThemeProvider
      defaultTheme='dark'
      storageKey='vite-ui-theme'
    >
      <QueryClientProvider>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
