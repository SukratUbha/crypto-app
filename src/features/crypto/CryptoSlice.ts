import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Coin } from '../../api/CoinGeckoApi';
import axios from 'axios';

const initialState = {
    coinsList: [] as Coin[],
    isLoading: true

}
export const fetchCoins = createAsyncThunk('crypto/fetchCoins', async (apiUrl:string) =>{
  const response = await axios.get(apiUrl);
  const data:Coin[] = await response.data;
  return data
})

const CryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    SetCrypto: (state) => {
      console.log(state);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.coinsList = action.payload
      state.isLoading = false;
    })
    builder.addCase(fetchCoins.rejected, (state) => {
      state.coinsList = []
      state.isLoading = false
    })
    builder.addCase(fetchCoins.pending, (state, action) => {
      state.isLoading = true
    })
  }
});

export const { SetCrypto } = CryptoSlice.actions

export default CryptoSlice.reducer