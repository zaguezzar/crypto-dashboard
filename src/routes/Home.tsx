import { useQuery } from '@tanstack/react-query';

import { getCoins } from '@/api/coins';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

import CoinCard from '@/components/CoinCard';
import { useSearchContext } from '@/contexts/SearchContext';
import { type Coin } from '@/types';
import { useEffect, useState } from 'react';

export default function Home() {
  const [coinsData, setCoinsData] = useState<Coin[] | undefined>([]);
  const query = useQuery({ queryKey: ['coins'], queryFn: getCoins });
  const { searchString } = useSearchContext();

  // update the coins data when the query is successful
  useEffect(() => {
    if (query.data) {
      if (searchString.length > 0) {
        const filteredCoins = coinsData?.filter((coin) =>
          coin.name.toLowerCase().includes(searchString.toLowerCase())
        );
        setCoinsData(filteredCoins);
      } else {
        setCoinsData(query.data);
      }
    }
  }, [query.data, searchString]);

  return (
    <div className='flex flex-col w-full'>
      {/* card grid */}
      <div className='grid grid-cols-4 gap-2 w-full'>
        {query.isSuccess
          ? coinsData?.map((coin) => (
              <CoinCard
                coin={coin}
                key={coin.uuid}
              />
            ))
          : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
              <Card
                key={index}
                className='cursor-pointer hover:opacity-70'
              >
                <CardHeader className='flex-row items-center justify-between'>
                  <div className='flex flex-col gap-2'>
                    <Skeleton className='h-4 w-[100px]' />
                    <Skeleton className='h-4 w-[50px]' />
                  </div>
                  <Skeleton className='w-8 h-8 rounded-full' />
                </CardHeader>
                <CardContent>
                  <div className='h-48'></div>
                </CardContent>
                <CardFooter className='flex-row justify-between'>
                  <Skeleton className='h-4 w-[100px]' />
                  <Skeleton className='h-4 w-[100px]' />
                </CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
}
