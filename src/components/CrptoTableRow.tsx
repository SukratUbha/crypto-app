import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { Coin } from '../Api/CoinGeckoApi'

export default function CrptoTableRow(coin:Coin) {
    return (
        <TableRow key={coin.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                {coin.name}
            </TableCell>
            <TableCell align="center">{coin.name}</TableCell>
            <TableCell align="center">{coin.name}</TableCell>
            <TableCell align="center">{coin.name}</TableCell>
            <TableCell align="center">{coin.name}</TableCell>
            <TableCell align="center">{coin.name}</TableCell>
            <TableCell align="center">{coin.name}</TableCell>
        </TableRow>
    )
}
