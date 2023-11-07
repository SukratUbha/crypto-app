//Redux store defined here
import { configureStore } from '@reduxjs/toolkit';
import CryptoReducer from './features/crypto/CryptoSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    crypto: CryptoReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//Setting useAppDispatch to infer type automatically instead of specifying every use
export const useAppDispatch: () => AppDispatch = useDispatch