import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CardItem from './Card';
import '@testing-library/jest-dom';

const mockCard = {
  id: 1,
  title: 'Test',
  platform: 'Platform',
  release_date: '2023-08-31',
  genre: 'Action',
  publisher: 'Publisher',
  thumbnail: 'test-thumbnail-url',
};

describe('Card', () => {
  test('renders CardItem component', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CardItem item={mockCard} />
      </BrowserRouter>,
    );

    const titleElement = getByText('Test');
    expect(titleElement).toBeInTheDocument();
  });
})
