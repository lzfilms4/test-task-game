import React from 'react';
import { render } from '@testing-library/react';
import MenuHeader from './MenuHeader';
import '@testing-library/jest-dom';

test('renders MenuHeader component', () => {
  const { getByText } = render(<MenuHeader />);
  const titleElement = getByText('Avito');

  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveStyle('color: #fff');
});
