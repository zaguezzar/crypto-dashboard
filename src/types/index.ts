export type Coin = {
  '24hVolume': number;
  allTimeHigh: {
    price: number;
    timestamp: number;
  };
  btcPrice: number;
  change: number;
  coinRankingUrl: string;
  color: string;
  description: string;
  fullyDilutedMarketCap: number;
  iconUrl: string;
  links: {
    name: string;
    type: string;
    url: string;
  }[];
  listedAt: number;
  lowVolume: boolean;
  marketCap: number;
  name: string;
  price: number;
  rank: number;
  sparkline: number[];
  symbol: string;
  tier: number;
  uuid: string;
};
