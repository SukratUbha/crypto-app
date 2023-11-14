import CryptoTable from './CryptoTable'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { LinearProgress } from '@mui/material';
import PinnedCoins from './PinnedCoins';

export default function CryptoHome() {
    const list = useSelector((state: RootState) => state.crypto.coinsList)
    const isLoading = useSelector((state: RootState) => state.crypto.isLoading)
    const error = useSelector((state: RootState) => state.crypto.error)
    const found = useSelector((state: RootState) => state.crypto.found)
    const filteredList = useSelector((state: RootState) => state.crypto.filteredList)

    if (list.length) {
        if (!found) {
            return (<div>Nothing exists with that name</div>)
        }
        //CryptoTable props: 
        //cryptoList is a filtered array of CoinType if filteredList has text otherwise full list
        //tableProps is key: value in the form of table heading and the fetchedData type name from CoinsType
        return (
            <div className='website-homepage'>
                <PinnedCoins />
                {/* <PageNavbar /> */}
                <div>
                    {!found ? (
                        <div className='text text-not-found'>Nothing found</div>
                    ) : (
                        <CryptoTable
                            cryptoList={filteredList.length ? filteredList : list}
                            tableProps={{
                                'Coin': 'name',
                                'Price': 'current_price',
                                '24h High': 'high_24h',
                                '24h Low': 'low_24h',
                                '24h price change%': 'price_change_percentage_24h',
                                'Mkt Cap': 'market_cap',
                                'Actions': 'pin'
                            }}
                        />
                    )}
                </div>
            </div>
        )
    }

    if (error) {
        return (<div>{error}</div>)
    }

    if (isLoading) {
        <LinearProgress />
    };
    return (
        <LinearProgress />
    )

}
