import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Coins from '../src/components/Coins';
// import your context; it will include the provider
import Context from '../src/data/context/ApiContext';

jest.mock(
  'next/link',
  () =>
    function Link({ href, children }) {
      return <a href={href}> {children} </a>;
    },
);

describe('Coins', () => {
  // limpar antes de cada teste
  beforeEach(() => {
    cleanup();
  });

  const aa = jest.fn();

  const contextValue = {
    coins: [
      {
        CoinInfo: { FullName: 'Bitcoin', Name: 'BTC' },
        DISPLAY: { USD: { PRICE: '$2,000', CHANGEPCT24HOUR: '10' } },
        RAW: { USD: { PRICE: '$1,500', CHANGEPCT24HOUR: '10', LASTUPDATE: '15000000' } },
      },
      {
        CoinInfo: { FullName: 'Ethereum', Name: 'ETH' },
        DISPLAY: { USD: { PRICE: '$1,000', CHANGEPCT24HOUR: '-10' } },
        RAW: { USD: { PRICE: '$1,500', CHANGEPCT24HOUR: '-10', LASTUPDATE: '15500000' } },
      },
      {
        CoinInfo: { FullName: 'Euro', Name: 'EUR' },
        DISPLAY: { USD: { PRICE: '$1,500', CHANGEPCT24HOUR: '25' } },
        RAW: { USD: { PRICE: '$1,500', CHANGEPCT24HOUR: '25', LASTUPDATE: '155000' } },
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

    const coinsNames = contextValue.coins.map(item => item.CoinInfo.FullName);

    expect(coinsNames).toEqual(['Bitcoin', 'Ethereum', 'Euro']);

    expect(coinsNames).toHaveLength(3);
  });

  it('should call page details when ckick in Link', async () => {
    const context = {
      coins: [
        {
          CoinInfo: { FullName: 'Bitcoin', Name: 'BTC' },
          DISPLAY: { USD: { PRICE: '$2,000', CHANGEPCT24HOUR: '10' } },
          RAW: { USD: { PRICE: '$1,500', CHANGEPCT24HOUR: '10', LASTUPDATE: '15000000' } },
        },
      ],
    };

    render(
      <Context.Provider value={context}>
        <Coins />
      </Context.Provider>,
    );

    const coinLink = screen.getByRole('link');

    await fireEvent.click(coinLink);

    // espero que a pagina de detalhes seja chamada
    expect(coinLink).toHaveAttribute('href', '/details/BTC');
  });
});
