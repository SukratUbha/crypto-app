import React from 'react'
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'

export default function CryptoTable() {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, border: 0 }} aria-label="table to display cryptocoins" role="table">
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
