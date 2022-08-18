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

    const coin_1 = screen.queryByText(contextValue.coins[0].CoinInfo.FullName).closest('td');
    expect(coin_1.textContent).toEqual('Bitcoin');

    const coin_2 = screen.queryByText(contextValue.coins[1].CoinInfo.FullName).closest('td');
    expect(coin_2.textContent).toEqual('Ethereum');

    const row = screen.getAllByRole('row');
    // espero que tenha 3 linhas na tabela (1 para cabeçalho e 2 para o primeiro item)
    expect(row).toHaveLength(3);
  });
});
