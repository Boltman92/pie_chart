import React from 'react';
import { render } from '@testing-library/react';
import PieChart from './PieChart';

test('renders learn react link', () => {
  const { getByText } = render(<PieChart />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
