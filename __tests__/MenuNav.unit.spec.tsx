/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MenuNav from '../src/components/template/MenuNav';

describe('MenuNav', () => {
  it('should render the component', () => {
    render(<MenuNav />);

    expect(screen.getByTestId('menu-nav')).toBeInTheDocument();
  });
});
