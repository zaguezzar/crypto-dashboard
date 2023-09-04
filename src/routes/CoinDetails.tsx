import { getCoin } from '@/api/coin';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { formatData, formatNumber, priceFormatter } from '@/lib/utils';
import { type Coin } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useQuery } from '@tanstack/react-query';
import { LineChart } from '@tremor/react';
import { ExternalLink } from 'lucide-react';
import * as React from 'react';
import { useParams } from 'react-router-dom';

interface Link {
  name: string;
  url: string;
  type: string;
}

export default function CoinDetails() {
  const { uuid } = useParams<{ uuid: string }>();
  const [coinData, setCoinData] = React.useState<Coin | undefined>(undefined);

  // fetch coin data from the api
  const getCoinData = async () => {
    return getCoin(uuid);
  };

  const query = useQuery({
    queryKey: ['coin'],
    queryFn: getCoinData,
  });

  // update the coin data when the query is successful
  React.useEffect(() => {
    setCoinData(undefined);
    if (query.data) {
      setCoinData(query.data);
      console.log(query.data);
    }
  }, [query.data, uuid]);

  return (
    <div className='flex gap-x-4'>
      <Card className='w-2/3 pr-[50px]'>
        <CardContent>
          {query.isSuccess && coinData ? (
            <LineChart
              className='mt-6 h-[600px]'
              data={formatData(coinData?.sparkline, 'price')}
              index='key'
              categories={['Historic price']}
              colors={
                coinData?.change > 0
                  ? ['green']
                  : coinData.change === 0
                  ? ['orange']
                  : ['red']
              }
              valueFormatter={priceFormatter}
              autoMinValue
              animationDuration={3000}
              curveType='natural'
              yAxisWidth={100}
            />
          ) : (
            <Skeleton className='mt-6 h-[600px]' />
          )}
        </CardContent>
      </Card>

      <div className='w-1/3 flex flex-col gap-y-4'>
        <Card className='p-2 grow-0'>
          <CardHeader className='flex-row justify-between p-6'>
            <div className='flex flex-col w-1/2'>
              <CardTitle>{coinData?.name}</CardTitle>
              <CardDescription>{coinData?.symbol}</CardDescription>
            </div>
            <Avatar className='w-8 h-8'>
              <AvatarImage src={coinData?.iconUrl} />
              <AvatarFallback>{coinData?.symbol}</AvatarFallback>
            </Avatar>
          </CardHeader>

          <CardContent>
            <ul className='space-y-1'>
              <li className='flex justify-between'>
                <span className='text-muted-foreground'>Rank:</span>{' '}
                <span className='font-bold'>{coinData?.rank}</span>
              </li>
              <li className='flex justify-between'>
                <span className='text-muted-foreground'>Current price:</span>{' '}
                <span className='font-bold'>
                  $ {formatNumber(coinData?.price, 4)}
                </span>
              </li>
              <li className='flex justify-between'>
                <span className='text-muted-foreground'>All-time high:</span>{' '}
                <span className='font-bold'>
                  $ {formatNumber(coinData?.allTimeHigh.price, 4)}
                </span>
              </li>
              <li className='flex justify-between'>
                <span className='text-muted-foreground'>Listings:</span>{' '}
                <span className='font-bold'>
                  {formatNumber(coinData?.listedAt)}
                </span>
              </li>
              <li className='flex justify-between'>
                <span className='text-muted-foreground'>Market cap:</span>{' '}
                <span className='font-bold'>
                  {formatNumber(coinData?.marketCap)}
                </span>
              </li>
              <li className='flex justify-between'>
                <span className='text-muted-foreground'>
                  Diluted market cap:
                </span>{' '}
                <span className='font-bold'>
                  {formatNumber(coinData?.fullyDilutedMarketCap)}
                </span>
              </li>
              <li className='flex justify-between'>
                <span className='text-muted-foreground'>Change:</span>{' '}
                <span className='font-bold'>{coinData?.change}%</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className='p-2 grow'>
          <CardHeader>
            <CardTitle>Description</CardTitle>
          </CardHeader>

          <CardContent className='text-muted-foreground'>
            <span>{coinData?.description}</span>
            <br />
            <br />
            <ul className='font-mono text-sm'>
              {coinData?.links
                .filter((link: Link) => link.type === 'website')
                .map((link) => (
                  <li
                    key={link.name}
                    className='flex gap-x-2 items-baseline'
                  >
                    <ExternalLink
                      size={10}
                      className='text-primary font-mono'
                    />
                    <a
                      className='hover:text-primary hover:underline'
                      href={link.url}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
