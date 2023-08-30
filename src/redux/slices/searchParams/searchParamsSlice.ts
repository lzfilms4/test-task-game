import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SearchState } from './types/types';

const initialState: SearchState = {
  platform: undefined,
  category: undefined,
  sortBy: undefined,
}

export const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    setPlatform: (state, action: PayloadAction<string | undefined>) => {
      state.platform = action.payload
    },
    setCategory: (state, action: PayloadAction<string | undefined>) => {
      state.category = action.payload
    },
    setSortBy: (state, action: PayloadAction<string | undefined>) => {
      state.sortBy = action.payload
    },
  },
})

export const { setPlatform, setCategory, setSortBy } = searchParamsSlice.actions

export default searchParamsSlice.reducer
