import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { CardType, FullGameInfo } from '../types/CardTypes';
import { SearchState } from './searchParams/types/types';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  tagTypes: ['Games'],
  keepUnusedDataFor: 300, // 5 минут
  baseQuery: retry(fetchBaseQuery({
    baseUrl: '/api',
  }), { maxRetries: 3 }), // 3 повторные попытки при ошибке
  endpoints: (builder) => ({
    getGamesList: builder.query<CardType[], SearchState>({
      query: ({ platform, category, sortBy }) => ({
        url: 'games',
        params: {
          platform,
          category,
          'sort-by': sortBy,
        },
      }),

    }),
    getGame: builder.query<FullGameInfo, string>({
      query: (id) => ({ url: 'game', params: { id } }),
    }),
  }),
})

export const {
  useGetGamesListQuery,
  useGetGameQuery,
} = gamesApi
