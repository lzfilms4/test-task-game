import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import counter from './slices/counterSlice'
import { gamesApi } from './slices/gamesApi';

export const store = configureStore({
  reducer: {
    // counter,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
