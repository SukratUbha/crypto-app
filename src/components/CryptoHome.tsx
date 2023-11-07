import CryptoTable from './CryptoTable'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { LinearProgress, TextField } from '@mui/material';
import React from 'react';

export default function CryptoHome() {
    const list = useSelector((state: RootState) => state.crypto.coinsList)
    const isLoading = useSelector((state: RootState) => state.crypto.isLoading)
    const error = useSelector((state: RootState) => state.crypto.error)

    function handleSearch() {
        console.log('here');
    }
    if (error) {
        return (<div>{error}</div>)
    }

    if (list.length > 0) {
        return (
            <CryptoTable cryptoList={list} tableProps={{ 'Coin': 'name', 'Price': 'current_price', '24h High':'high_24h', '24h Low':'low_24h' ,'24h price change%':'price_change_percentage_24h', 'Mkt Cap': 'market_cap'}} />
        )
    }
    if (isLoading) {
        <LinearProgress />
    };

    return (
        <div className='search'>
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
    )
}
