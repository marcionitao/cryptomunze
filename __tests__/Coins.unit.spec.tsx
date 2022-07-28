import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Coins from '../src/components/Coins';
// import your context; it will include the provider
import Context from '../src/data/context/ApiContext';

jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children,
);

describe('Coins', () => {
  // limpar antes de cada teste
  beforeEach(() => {
    cleanup();
  });

  it('should render Coins Component', async () => {
    render(<Coins />);

    expect(screen.getByTestId('coin-component')).toBeInTheDocument();
  });

  it('should render a list of Coins', () => {
    const contextValue = {
      coins: [
        { CoinInfo: { FullName: 'Bitcoin', Name: 'BTC' } },
        { CoinInfo: { FullName: 'Ethereum', Name: 'ETH' } },
      ],
    };

    render(
      <Context.Provider value={contextValue}>
        <Coins />
      </Context.Provider>,
    );

    const name1 = screen.getByText(/bitcoin/i);
    const name2 = screen.getByText(/ethereum/i);

    expect(name1).toBeInTheDocument();
    expect(name2).toBeInTheDocument();
  });

  it('should call page details when ckick in Link', () => {
    const contextValue = { coins: [{ CoinInfo: { FullName: 'Bitcoin', Name: 'BTC' } }] };

    render(
      <Context.Provider value={contextValue}>
        <Coins />
      </Context.Provider>,
    );

    const coinString = screen.getByRole('link');
    fireEvent.click(coinString);

    expect(coinString).toHaveAttribute('href', '/coin/BTC');
  });
});
