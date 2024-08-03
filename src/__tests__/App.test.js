// src/__tests__/App.test.js

import React from 'react';  // Add this import statement
import { render } from '@testing-library/react';
import App from '../components/App';  // Ensure this path is correct

test('renders without errors', () => {
  expect(() => render(<App />)).not.toThrow();
});

test('renders the correct child components', () => {
  const { container } = render(<App />);

  expect(container.querySelector('nav')).toBeInTheDocument();
  expect(container.querySelector('#home')).toBeInTheDocument();
  expect(container.querySelector('#home h1')).toHaveTextContent('Home');
  expect(container.querySelector('#about')).toBeInTheDocument();
  expect(container.querySelector('#about h2')).toHaveTextContent('About');
});
