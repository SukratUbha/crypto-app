import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinById } from '../features/crypto/CryptoSlice';
import { RootState } from '../store';
import { Paper, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';

export default function DetailPage() {
  const { coinId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinById(coinId));
  }, [dispatch, coinId]);

  const coinDetails = useSelector((state: RootState) => state.crypto.coin);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper>
      <Grid container spacing={isSmallScreen ? 1 : 4}>
        <Grid item xs={12} sm={6}>
          <img src={coinDetails.image} alt={coinDetails.name} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">{coinDetails.name}</Typography>
          <Typography variant="subtitle1">{coinDetails.symbol}</Typography>
          <Typography variant="body1">Price: ${coinDetails.current_price}</Typography>
          <Typography variant="body1">Market Cap: ${coinDetails.market_cap}</Typography>
          <Typography variant="body1">24h High: ${coinDetails.high_24h}</Typography>
          <Typography variant="body1">24h Low: ${coinDetails.low_24h}</Typography>
          <Typography variant="body1">Price Change (24h): ${coinDetails.price_change_24h}</Typography>
          <Typography variant="body1">Market Cap Change (24h): ${coinDetails.market_cap_change_24h}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
