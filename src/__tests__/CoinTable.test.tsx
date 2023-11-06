import React from 'react';
import { RenderOptions, render, screen } from '@testing-library/react';
import CryptoTable from '../components/CryptoTable';
// Import your store
import { store } from '../store';
import { Provider } from 'react-redux';
import { CoinType } from '../features/crypto/CryptoSlice';

const testList:CoinType[] = [{
  id: "bitcoin",
  symbol: "btc",
  name: "Bitcoin",
  image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
  current_price: 34761,
  market_cap: 678930415812,
  market_cap_rank: 1,
  fully_diluted_valuation: 729910567554,
  total_volume: 8475939155,
  high_24h: 34910,
  low_24h: 34586,
  price_change_24h: 92.1,
  price_change_percentage_24h: 0.26565,
  market_cap_change_24h: 2996358374,
  market_cap_change_percentage_24h: 0.44329,
  circulating_supply: 19533268,
  total_supply: 21000000,
  max_supply: 21000000,
  ath: 69045,
  ath_change_percentage: -49.65567,
  ath_date: "2021-11-10T14:24:11.849Z",
  atl: 67.81,
  atl_change_percentage: 51161.81386,
  atl_date: "2013-07-06T00:00:00.000Z",
  last_updated: "2023-11-04T20:47:31.556Z"
}]

test('renders the coin table', () => {
  render(<CryptoTable {...testList}/>);
  const linkElement = screen.getByRole("table");
  expect(linkElement).toBeInTheDocument();
});
