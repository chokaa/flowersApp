import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './src/state/Store';

test('renders header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>);
  const linkElement = screen.getAllByText(/flowers/i);
  expect(linkElement).toBeInTheDocument();
});
