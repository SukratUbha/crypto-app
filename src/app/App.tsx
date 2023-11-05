import React from 'react';
import logo from './logo.svg';
import './App.css';
import CryptoTable from '../Components/CryptoTable';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function App() {
  return (
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography sx={{ letterSpacing: 10 }} variant="h4" component="h1" gutterBottom>
            Cryptocurrency viewing app
          </Typography>
          <div className="App">
            <CryptoTable />
          </div>
        </Box>
      </Container>
  );
}

export default App;
