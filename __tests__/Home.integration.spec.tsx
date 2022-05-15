/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';

describe('CoinList', () => {
  jest.mock('next/router');

  it('should render Coin List', async () => {
    render(<Home />);

    expect(screen.getByTestId('coin-list')).toBeInTheDocument();
  });
});
