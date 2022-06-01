/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MenuNav from '../src/components/template/MenuNav';

const mockMenuItems = jest.fn();

// eslint-disable-next-line react/display-name
jest.mock('../src/components/template/MenuItems', () => props => {
  mockMenuItems(props);
  return <div>MenuItems</div>;
});

describe('MenuNav', () => {
  it('should render the component', () => {
    render(<MenuNav />);

    expect(screen.getByTestId('menu-nav')).toBeInTheDocument();
  });

  it('should MenuItems called with prop url, texto and className', () => {
    render(<MenuNav />);

    expect(mockMenuItems).toHaveBeenLastCalledWith(
      expect.objectContaining({
        url: '/about',
        texto: 'About',
        className: 'text-indigo-300',
      }),
    );
  });
});
