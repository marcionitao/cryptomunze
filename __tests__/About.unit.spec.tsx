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

    // find testing button with fireEvent.
    const button = screen.getByRole('link', { name: /Back to home/i });

    // expect button to be clicked
    fireEvent.click(button);

    expect(button).toBeTruthy();
  });
});
