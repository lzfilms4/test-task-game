import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  setPlatform,
  setCategory,
  setSortBy,
} from './searchParamsSlice';
import { SearchState } from './types/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('searchParamsSlice', () => {
  it('should handle setPlatform', () => {
    const initialState: SearchState = {
      platform: undefined,
      category: undefined,
      sortBy: undefined,
    };
    const store = mockStore({ searchParams: initialState });

    const platform = 'example_platform';
    store.dispatch(setPlatform(platform));

    const actions = store.getActions();
    const expectedPayload = { type: 'searchParams/setPlatform', payload: platform };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should handle setCategory', () => {
    const initialState: SearchState = {
      platform: undefined,
      category: undefined,
      sortBy: undefined,
    };
    const store = mockStore({ searchParams: initialState });

    const category = 'example_category';
    store.dispatch(setCategory(category));

    const actions = store.getActions();
    const expectedPayload = { type: 'searchParams/setCategory', payload: category };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should handle setSortBy', () => {
    const initialState: SearchState = {
      platform: undefined,
      category: undefined,
      sortBy: undefined,
    };
    const store = mockStore({ searchParams: initialState });

    const sortBy = 'example_sortBy';
    store.dispatch(setSortBy(sortBy));

    const actions = store.getActions();
    const expectedPayload = { type: 'searchParams/setSortBy', payload: sortBy };
    expect(actions).toEqual([expectedPayload]);
  });
});
