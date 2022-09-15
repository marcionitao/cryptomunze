import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';

import List from '../src/pages/list';
// import your context; it will include the provider
import Context from '../src/data/context/ApiContext';

// jest.mock(
//   'next/link',
//   () =>
//     function Link({ href, children }) {
//       return <a href={href}>{children}</a>;
//     },
// );
jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children,
);

describe('List', () => {
  // limpar antes de cada teste
  beforeEach(() => {
    cleanup();
  });

  const contextValue = {
    coins: [
      {
        CoinInfo: { FullName: 'Bitcoin', Name: 'BTC' },
        DISPLAY: { USD: { PRICE: '2,000', CHANGEPCT24HOUR: '10' } },
        RAW: { USD: { PRICE: '1,400', CHANGEPCT24HOUR: '10', LASTUPDATE: '15000000' } },
      },
      {
        CoinInfo: { FullName: 'Ethereum', Name: 'ETH' },
        DISPLAY: { USD: { PRICE: '1,000', CHANGEPCT24HOUR: '-10' } },
        RAW: { USD: { PRICE: '1,500', CHANGEPCT24HOUR: '10', LASTUPDATE: '15000000' } },
      },
    ],
  };

  it('should render Comoponet', () => {
    render(<List />);

    expect(screen.getByTestId('table-list')).toBeInTheDocument();
  });

  it('should render a list of Coins', () => {
    render(
      <Context.Provider value={contextValue}>
        <List />
      </Context.Provider>,
    );

    const coinsNames = contextValue.coins.map(item => item.CoinInfo.FullName);

    expect(coinsNames).toEqual(['Bitcoin', 'Ethereum']);

    expect(coinsNames).toHaveLength(2);
  });

  it('should call page details when ckick in Link', async () => {
    const context = {
      coins: [
        {
          CoinInfo: { FullName: 'Bitcoin', Name: 'BTC' },
          DISPLAY: { USD: { PRICE: '2,000', CHANGEPCT24HOUR: '10' } },
          RAW: { USD: { PRICE: '1,400', CHANGEPCT24HOUR: -1.5, LASTUPDATE: '15000000' } },
        },
      ],
    };
    render(
      <Context.Provider value={context}>
        <List />
      </Context.Provider>,
    );

    const link = screen.getByRole('link', { name: /more details/i });

    // screen.debug(link);

    fireEvent.click(link);

    await waitFor(() => {
      expect(link).toHaveAttribute('href', '/details/BTC');
    });
  });

  it('should check if CHANGEPCT24HOUR is true', () => {
    const context = {
      coins: [
        {
          CoinInfo: { FullName: 'Bitcoin', Name: 'BTC' },
          DISPLAY: { USD: { PRICE: '2,000', CHANGEPCT24HOUR: '10' } },
          RAW: { USD: { PRICE: '1,400', CHANGEPCT24HOUR: -1.5, LASTUPDATE: '15000000' } },
        },
      ],
    };

    const coinChange = context.coins[0].RAW.USD.CHANGEPCT24HOUR;
    if (coinChange < 0) {
      expect(coinChange).toBe(-1.5);
    } else {
      expect(coinChange).toBeNull();
    }
  });
});
