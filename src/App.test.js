import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const goodLuck = screen.getByText("Good luck!");
  expect(goodLuck).toBeInTheDocument();
});

 