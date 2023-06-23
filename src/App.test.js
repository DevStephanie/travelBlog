import { render, screen } from './Travel.jsx';
import App from './App';

test('renders Travel link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Travel link/i);
  expect(linkElement).toBeInTheDocument();
});
