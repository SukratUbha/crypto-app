import { TableCell, TableRow } from '@mui/material'
import { Coin } from '../api/CoinGeckoApi'

export default function CrptoTableRow(coin:Coin) {
    return (
        <TableRow key={coin.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="left" component="th" scope="row">
                {coin.name}
            </TableCell>
            <TableCell align="right">{coin.name}</TableCell>
            <TableCell align="right">{coin.name}</TableCell>
            <TableCell align="right">{coin.name}</TableCell>
            <TableCell align="right">{coin.name}</TableCell>
            <TableCell align="right">{coin.name}</TableCell>
            <TableCell align="right">{coin.name}</TableCell>
        </TableRow>
    )
}
