// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import { fetchCoins, SetCrypto } from '../../features/crypto/CryptoSlice';
// import axios from 'axios';

// const middlewares = [thunk];
// const mockStore = configureStore<any, any>(middlewares);

// describe('CryptoSlice Redux Tests', () => {
//   it('should dispatch action to set crypto data', () => {
//     const store = mockStore({ crypto: { coinsList: [], isLoading: false } });

//     store.dispatch(SetCrypto());

//     const actions = store.getActions();
//     expect(actions[0]).toEqual({ type: 'crypto/SetCrypto' });
//   });

//   it('should fetch coins and update state', async () => {
//     const apiUrl = 'mock-api-url';
//     const response = [{ id: 'bitcoin', name: 'Bitcoin' }]; // Mock response

//     // Mock Axios.get to resolve with the mock response
//     jest.spyOn(axios, 'get').mockResolvedValue({ data: response });

//     const store = mockStore({ crypto: { coinsList: [], isLoading: true } });

//     await store.dispatch(fetchCoins(apiUrl));

//     const actions = store.getActions();
//     expect(actions[0]).toEqual(fetchCoins.pending.type);
//     expect(actions[1]).toEqual(fetchCoins.fulfilled.type);
//     expect(actions[1].payload).toEqual(response);

//     // You can also make more assertions on the updated state if needed
//     const updatedState = store.getState().crypto;
//     expect(updatedState.isLoading).toBe(false);
//     expect(updatedState.coinsList).toEqual(response);
//   });

//   it('should handle error when fetching coins', async () => {
//     const apiUrl = 'mock-api-url';

//     // Mock Axios.get to reject with an error
//     jest.spyOn(axios, 'get').mockRejectedValue(new Error('API error'));

//     const store = mockStore({ crypto: { coinsList: [], isLoading: true } });

//     await store.dispatch(fetchCoins(apiUrl));

//     const actions = store.getActions();
//     expect(actions[0]).toEqual(fetchCoins.pending.type);
//     expect(actions[1]).toEqual(fetchCoins.rejected.type);

//     // You can also make assertions on the updated state when there's an error
//     const updatedState = store.getState().crypto;
//     expect(updatedState.isLoading).toBe(false);
//     expect(updatedState.coinsList).toEqual([]);
//   });
// });
