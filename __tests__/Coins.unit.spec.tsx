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

  const contextValue = {
    coins: [
      {
        CoinInfo: { FullName: 'Bitcoin', Name: 'BTC' },
        DISPLAY: { USD: { PRICE: '$2,000', CHANGEPCT24HOUR: '10' } },
        RAW: { USD: { CHANGEPCT24HOUR: '10', LASTUPDATE: '15000000' } },
      },
      {
        CoinInfo: { FullName: 'Ethereum', Name: 'ETH' },
        DISPLAY: { USD: { PRICE: '$1,000', CHANGEPCT24HOUR: '-10' } },
        RAW: { USD: { CHANGEPCT24HOUR: '-10', LASTUPDATE: '15500000' } },
      },
    ],
  };

  it('should render Coins Component', async () => {
    render(<Coins />);

    expect(screen.getByTestId('coin-component')).toBeInTheDocument();
  });

  it('should render a list of Coins', () => {
    render(
      <Context.Provider value={contextValue}>
        <Coins />
      </Context.Provider>,
    );

    contextValue.coins.forEach(coin => {
      const name = screen.getByText(coin.CoinInfo.FullName);
      const title = screen.getByTitle(coin.CoinInfo.FullName);

      expect(name).toBeTruthy();
      expect(title).toBeInTheDocument();
    });
  });

  it('should call page details when ckick in Link', () => {
    const context = { coins: [{ CoinInfo: { FullName: 'Bitcoin', Name: 'BTC' } }] };

    render(
      <Context.Provider value={context}>
        <Coins />
      </Context.Provider>,
    );

    const coinString = screen.getByRole('link');
    fireEvent.click(coinString);

    expect(coinString).toHaveAttribute('href', '/coin/BTC');
  });
});
