import React from 'react'
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'
import CryptoTableRow from './CryptoTableRow'
import type { CoinType } from '../features/crypto/CryptoSlice'

export default function CryptoTable(cryptoList: CoinType[]) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, border: 0 }} aria-label="Table to display CryptoCoins" role="table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='left'>Coin</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">1h</TableCell>
                            <TableCell align="right">24h</TableCell>
                            <TableCell align="right">7d</TableCell>
                            <TableCell align="right">24h Volume</TableCell>
                            <TableCell align="right">Mkt Cap</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            cryptoList.map((row: CoinType) => (
                                <CryptoTableRow {...row} key={row.id} />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )

}
