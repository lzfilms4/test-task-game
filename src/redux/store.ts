import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import counter from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
