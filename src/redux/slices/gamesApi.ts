import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardType } from '../types/CardTypes';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  tagTypes: ['Items'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/api/',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
  }),
  endpoints: (builder) => ({
    getGamesList: builder.query<CardType[], void>({
      query: () => 'games',
    }),
    getGame: builder.query<any, string>({
      query: (id) => ({ url: 'game', params: { id } }),
    }),
  }),
})

export const {
  useGetGamesListQuery,
  useGetGameQuery,
} = gamesApi
