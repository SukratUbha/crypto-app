import React from 'react'
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'
import CoinGeckoApi from '../Api/CoinGeckoApi'
import type { Coin } from '../Api/CoinGeckoApi';


export default function CryptoTable() {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, border: 0 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Coin</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">1h</TableCell>
                            <TableCell align="center">24h</TableCell>
                            <TableCell align="center">7d</TableCell>
                            <TableCell align="center">24h Volume</TableCell>
                            <TableCell align="center">Mkt Cap</TableCell>
                        </TableRow>
                    </TableHead>
                    {/* <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody> */}
                </Table>
            </TableContainer>

        </>
    )
}
