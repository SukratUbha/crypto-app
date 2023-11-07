import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export type CoinType = {
  id: string,
  symbol: string,
  name: string,
  image: string,
  current_price: number,
  market_cap: number,
  market_cap_rank: number,
  fully_diluted_valuation: number,
  total_volume: number,
  high_24h: number,
  low_24h: number,
  price_change_24h: number,
  price_change_percentage_24h: number,
  market_cap_change_24h: number,
  market_cap_change_percentage_24h: number,
  circulating_supply: number,
  total_supply: number,
  max_supply: number,
  ath: number,
  ath_change_percentage: number,
  ath_date: string,
  atl: number,
  atl_change_percentage: number,
  atl_date: string,
  last_updated: string,
  [key: string]: string | number;
}

const initialState = {
    coinsList: [] as CoinType[],
    isLoading: true,
    error: null as null | string

}
//Built in redux function to handle async requests
export const fetchCoins = createAsyncThunk('crypto/fetchCoins', async (apiUrl:string) =>{
  const response = await axios.get(apiUrl,{
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
});
  const data:CoinType[] = await response.data;
  return data
})

const CryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    filteredList: (state, payload) => {
      // const filteredList = state.coinsList.filter(item =>
      //   item.name.toLowerCase().includes(payload.text.toLowerCase())
    // );
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.coinsList = action.payload;
      state.isLoading = false;
    })
    builder.addCase(fetchCoins.rejected, (state, action) => {
      state.error = action.error.message!
      state.isLoading = false
    })
    builder.addCase(fetchCoins.pending, (state, action) => {
      state.isLoading = true
    })
  }
});
 
export const { filteredList } = CryptoSlice.actions

export default CryptoSlice.reducer