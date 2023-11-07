import CryptoTable from './CryptoTable'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { AppBar, LinearProgress, TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { getFilteredList } from '../features/crypto/CryptoSlice';

export default function CryptoHome() {
    const list = useSelector((state: RootState) => state.crypto.coinsList)
    const isLoading = useSelector((state: RootState) => state.crypto.isLoading)
    const error = useSelector((state: RootState) => state.crypto.error)
    const found = useSelector((state: RootState) => state.crypto.found)
    const filteredList = useSelector((state: RootState) => state.crypto.filteredList)
    const [filterText, setFilterText] = useState('');
    const dispatch = useDispatch();

    function handleSearch(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFilterText(event.target.value);
        dispatch(getFilteredList(filterText));
    }

    if (error) {
        return (<div>{error}</div>)
    }

    if (isLoading) {
        <LinearProgress />
    };
    if (list.length > 0) {
        if (!found) {
            return (<div>Nothing exists with that name</div>)
        }
        //CryptoTable props: 
        //cryptoList is a filtered array of CoinType if filteredList has text otherwise full list
        //tableProps is key: value in the form of table heading and the fetchedData type name from CoinsType
        return (
            <div className='website-homepage'>

                <AppBar position="static" sx={{ height: '50px' }}>
                    <TextField
                        id="search-textfield"
                        label="Search Crypto"
                        aria-label="SearchBar"
                        variant="standard"
                        onChange={(e) => handleSearch(e)}
                        sx={{ color: 'white', width: '100%', input: { color: 'white' } }}
                    />
                </AppBar>

                <CryptoTable
                    cryptoList={filteredList.length ? filteredList : list}
                    tableProps={{ 'Coin': 'name', 'Price': 'current_price', '24h High': 'high_24h', '24h Low': 'low_24h', '24h price change%': 'price_change_percentage_24h', 'Mkt Cap': 'market_cap' }}
                />
            </div>
        )
    }
    return (
        <LinearProgress />
    )

}
