import { Provider } from 'react-redux';
import type { ReactNode } from 'react';
import { renderHook } from '@testing-library/react';
import React from 'react'
import { store } from '../../store';
import { useGetGameQuery, useGetGamesListQuery } from './gamesApi';

function Wrapper(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}

describe('gamesApi', () => {
  it('renders hook useGetGamesListQuery', () => {
    const { result } = renderHook(() => useGetGamesListQuery({ platform: undefined, category: undefined, sortBy: undefined }), { wrapper: Wrapper });
    expect(result.current).toMatchObject({
      status: 'pending',
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });
  });
  it('renders hook useGetGameQuery', () => {
    const { result } = renderHook(() => useGetGameQuery('1'), { wrapper: Wrapper });
    expect(result.current).toMatchObject({
      status: 'pending',
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });
  });
})
