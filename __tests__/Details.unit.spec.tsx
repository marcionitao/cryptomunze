import { cleanup, render, screen } from '@testing-library/react';
import { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import Coin, { getStaticPaths, getStaticProps } from '../src/pages/details/[id]';

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        DISPLAY: {
          BTC: {
            USD: {
              PRICE: '$25,000',
              IMAGEURL: '/images/logo.png',
              CIRCULATINGSUPPLY: '1,000',
              TOTALVOLUME24H: '2,000',
              MKTCAP: '$1,000',
              CHANGEPCT24HOUR: 2.5,
            },
          },
        },
      }),
  } as any),
);

beforeEach(() => {
  jest.clearAllMocks();
  cleanup();
});

const coin = [
  {
    PRICE: '$25,000',
    IMAGEURL: '/images/logo.png',
    CIRCULATINGSUPPLY: '1,000',
    TOTALVOLUME24H: '2,000',
    MKTCAP: '$1,000',
    CHANGEPCT24HOUR: -2.5,
  },
];

describe('Details', () => {
  it('should render Details component', async () => {
    render(
      <Coin
        id={'BTC'}
        image={'/images/logo.png'}
        price={'$25,000'}
        change={-0.25}
        mktcp={'$1,000'}
        volume_24={'2,000'}
        supply={'1,000'}
      />,
    );

    expect(screen.getByTestId('coin-details')).toBeInTheDocument();
  });

  it('should check if CHANGEPCT24HOUR is positive', () => {
    render(
      <Coin
        id={'BTC'}
        image={'/images/logo.png'}
        price={'$25,000'}
        change={2.5}
        mktcp={'$1,000'}
        volume_24={'2,000'}
        supply={'1,000'}
      />,
    );

    expect(screen.getByTestId('verde').textContent).toBe('2.5');
  });

  it('should check if CHANGEPCT24HOUR is negative', () => {
    render(
      <Coin
        id={'BTC'}
        image={'/images/logo.png'}
        price={'$25,000'}
        change={-2.5}
        mktcp={'$1,000'}
        volume_24={'2,000'}
        supply={'1,000'}
      />,
    );

    expect(screen.getByTestId('vermelho').textContent).toBe('-2.5');
  });
});

describe('getStaticProps', () => {
  it('should call global.fetch 1 time and check props', async () => {
    const props = await getStaticProps({
      params: { coin: global.fetch, id: 'BTC' },
    } as unknown as GetStaticPropsContext);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(props).toBeDefined();
  });
});

describe('getStaticPaths', () => {
  it('should check static path', async () => {
    const path = await getStaticPaths({
      params: { path: [], fallback: 'blocking' },
    } as GetStaticPathsContext);

    expect(path).toBeDefined();
  });
});
