import { fireEvent, render, screen } from '@testing-library/react';
import About from '../src/pages/about';

jest.mock(
  'next/link',
  () =>
    function Link({ href, children }) {
      return <a href={href}> {children} </a>;
    },
);

describe('About', () => {
  it('should render About page', () => {
    render(<About />);
    expect(screen.getByTestId('about')).toBeDefined();
  });
  it('should check button is clicked', () => {
    render(<About />);

    const link = screen.getByRole('link', { name: /Back to home/i });

    fireEvent.click(link);

    expect(link).toBeTruthy();
    // expect when the link is clicked, return to home page
    expect(link).toHaveAttribute('href', '/');
  });
});
