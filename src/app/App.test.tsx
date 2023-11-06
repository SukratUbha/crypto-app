// // import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// import App from './App';

// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// const initialState = { output: 10 };
// const mockStore = configureStore();
// let store;


// test('renders learn react link', () => {
//   store = mockStore(initialState);
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
//   // const linkElement = screen.getByText('table');
//   // expect(linkElement).toBeInTheDocument();
// });