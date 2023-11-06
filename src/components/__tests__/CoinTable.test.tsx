import React from 'react';
import { RenderOptions, render, screen } from '@testing-library/react';
import CryptoTable from '../CryptoTable';
// Import your store
import { store } from '../../store';
import { Provider } from 'react-redux';


test('renders the coin table', () => {
  render(<CryptoTable/>);
  const linkElement = screen.getByRole("table");
  expect(linkElement).toBeInTheDocument();
});
