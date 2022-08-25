import { cleanup, render, screen } from '@testing-library/react';

import List from '../src/pages/list';
// import your context; it will include the provider
import Context from '../src/data/context/ApiContext';

describe('List', () => {
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
});
