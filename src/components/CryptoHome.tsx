import CryptoTable from './CryptoTable'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { LinearProgress } from '@mui/material';
import React from 'react';

export default function CryptoHome() {
    const list = useSelector((state: RootState) => state.crypto.coinsList)
    const isLoading = useSelector((state: RootState) => state.crypto.isLoading)
    const error = useSelector((state: RootState) => state.crypto.error)

    if (error) {
        return (<div>{error}</div>)
    }
    if(list.length > 0) {
        console.log('here', list);
        return (
            <CryptoTable {...list} />
        )
    }
    return <LinearProgress />
}
