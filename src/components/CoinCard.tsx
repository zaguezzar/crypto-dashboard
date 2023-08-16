import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { axislessPriceFormatter, formatData } from '@/lib/utils';
import { type Coin } from '@/types';
import { BadgeDelta, LineChart } from '@tremor/react';

export default function CoinCard({ coin }: { coin: Coin }) {
  return (
    <a
      href={`/coin/${coin.uuid}`}
      key={coin.uuid}
    >
      <Card
        key={coin.uuid}
        className='cursor-pointer opacity-80 hover:opacity-100 hover:shadow-lg'
        // onClick={() => router.push(`/coins/${coin.uuid}`)}
      >
        <CardHeader className='flex-row items-center justify-between'>
          <div className='flex flex-col'>
            <CardTitle>{coin.name}</CardTitle>
            <CardDescription>{coin.symbol}</CardDescription>
          </div>
          <Avatar className='w-8 h-8'>
            <AvatarImage src={coin.iconUrl} />
            <AvatarFallback>{coin.symbol}</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent>
          <LineChart
            className='mt-6 max-h-48'
            data={formatData(coin.sparkline, 'price', coin.price)}
            index='key'
            categories={['Historic price']}
            colors={
              coin.change > 0
                ? ['green']
                : coin.change === 0
                ? ['orange']
                : ['red']
            }
            valueFormatter={axislessPriceFormatter}
            showYAxis={false}
            showXAxis={false}
            showLegend={false}
            showGridLines={false}
            autoMinValue
            animationDuration={3000}
            curveType='natural'
          />
        </CardContent>
        <CardFooter className='flex-row justify-between'>
          {/* coin price */}
          <div className='items-baseline flex'>
            <p className='opacity-70 mr-1'>$</p>
            <span>{axislessPriceFormatter(coin.price, true)}</span>
          </div>
          {/* coin change rate */}
          <BadgeDelta
            deltaType={
              coin.change > 0
                ? 'increase'
                : coin.change === 0
                ? 'unchanged'
                : 'decrease'
            }
          >
            {coin.change}%
          </BadgeDelta>
        </CardFooter>
      </Card>
    </a>
  );
}
