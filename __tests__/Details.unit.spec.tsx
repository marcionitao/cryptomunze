import { render, screen } from '@testing-library/react';
import { GetStaticPropsContext } from 'next';
//import { ParsedUrlQuery } from 'querystring';
import Coin, { getStaticProps } from '../src/pages/details/[id]';

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        DISPLAY: {
          BTC: {
            PRICE: '$25,000',
            CIRCULATINGSUPPLY: '1,000',
            TOTALVOLUME24H: '2,000',
            MKTCAP: '$1,000',
            CHANGEPCT24HOUR: '5%',
          },
          ETH: {
            PRICE: '$1,000',
            CIRCULATINGSUPPLY: '1,000',
            TOTALVOLUME24H: '1,000',
            MKTCAP: '$1,000',
            CHANGEPCT24HOUR: '1%',
          },
        },
      }),
  } as any),
);

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Details', () => {
  it('should render Details component', async () => {
    render(<Coin id="BTC" coin={[]} />);

    expect(screen.getByTestId('coin-details')).toBeInTheDocument();
  });
});

describe('getStaticProps', () => {
  it('should call global.fetch 1 time and return props.coin', async () => {
    const props = await getStaticProps({
      params: { coin: [], id: 'BTC' },
    } as GetStaticPropsContext);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(props).toBeDefined();
  });
});
