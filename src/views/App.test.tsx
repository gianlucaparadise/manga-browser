import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

test('renders whole app and check footer', () => {
  act(() => {
    render(<App />);
  })
  const linkElement = screen.getByText(/Manga Navigator/i);
  expect(linkElement).toBeInTheDocument();
});
