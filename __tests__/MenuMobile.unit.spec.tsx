/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import MenuMobile from '../src/components/template/MenuMobile';

const handleClick = jest.fn();

describe('MenuMobile', () => {
  it('should render the component', () => {
    render(<MenuMobile />);

    expect(screen.getByTestId('menu-mobile')).toBeInTheDocument();
  });
  it('should check if mobile button exist', () => {
    render(<MenuMobile />);

    const button = screen.getByRole('button', { name: 'Open main menu' });

    expect(button).toBeInTheDocument();
  });
  it('should pressing the button to show the transition menu mobile', async () => {
    render(<MenuMobile />);

    const button = screen.getByRole('button', { name: 'Open main menu' });

    // show the transition menu mobile
    await fireEvent.click(button);
    expect(screen.getByTestId('menu-transition')).toBeInTheDocument();
    expect(screen.getByTestId('menu-transition')).toBeEnabled();
  });
});
