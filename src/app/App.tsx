import { useEffect } from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAppDispatch } from '../store';
import { fetchCoins } from '../features/crypto/CryptoSlice';
import CryptoHome from '../components/CryptoHome';

export default function App() {
  const dispatch = useAppDispatch();
  

  useEffect(() => {
      dispatch(fetchCoins(`${process.env.REACT_APP_ALL_COIN_LIST}`))
    }, [dispatch]);

  return (
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          <Typography sx={{ letterSpacing: 10 }} variant="h4" component="h1" gutterBottom>
            Cryptocurrency viewing app
          </Typography>
          <div className="App">
            <CryptoHome />
          </div>
        </Box>
      </Container>
  );
}

