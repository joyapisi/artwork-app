import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Details from '../components/Details';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('Details component', () => {
  beforeEach(() => {
    useLocation.mockReturnValue({
      state: {
        artwork: {
          id: 1,
          date_display: '2023-05-25',
          place_of_origin: 'Origin',
          dimensions: '10x10',
          medium_display: 'Oil on canvas',
        },
      },
    });
  });

  test('renders details correctly', () => {
    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>,
    );

    expect(screen.getByText('Artworks Details')).toBeInTheDocument();
    expect(screen.getByText(/Date Display:/i)).toHaveTextContent('2023-05-25');
    expect(screen.getByText(/Place of Origin:/i)).toHaveTextContent('Origin');
    expect(screen.getByText(/Dimensions:/i)).toHaveTextContent('10x10');
    expect(screen.getByText(/Medium Used:/i)).toHaveTextContent('Oil on canvas');
  });
});
