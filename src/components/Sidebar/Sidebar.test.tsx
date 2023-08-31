import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Sidebar from './Sidebar';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('Sidebar', () => {
  it('should render without errors', () => {
    const store = mockStore({
      searchParams: {
        platform: '',
        category: '',
        sortBy: '',
      },
    });

    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>,
    );

    expect(screen.getByTestId('platform')).toBeInTheDocument();
    expect(screen.getByTestId('category')).toBeInTheDocument();
    expect(screen.getByTestId('sortBy')).toBeInTheDocument();
  });
});
