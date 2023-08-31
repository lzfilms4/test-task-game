import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import searchParams from './slices/searchParams/searchParamsSlice'
import { gamesApi } from './slices/gamesApi/gamesApi';

export const store = configureStore({
  reducer: {
    searchParams,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
