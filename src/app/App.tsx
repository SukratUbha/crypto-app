import { useEffect } from 'react';
import './App.css';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import { useAppDispatch } from '../store';
import { fetchCoins } from '../features/crypto/CryptoSlice';
import CryptoHome from '../components/CryptoHome';
import DetailPage from '../components/DetailPage';
import { Route, Routes } from 'react-router-dom';
import PageNavbar from '../components/PageNavbar';

export default function App() {
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchCoins(`${process.env.REACT_APP_ALL_COIN_LIST}`))
  }, [dispatch]);

  return (
    <>
      <PageNavbar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/about/:coinId" element={<DetailPage />} />
      </Routes>
    </>
  );
}

