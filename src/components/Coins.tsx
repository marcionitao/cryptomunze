import moment from 'moment';
import Link from 'next/link';
import { useContext } from 'react';
import ApiContext from '../data/context/ApiContext';

export default function CoinsComponent() {
  // obtendo o context dos dados entre os componentes
  const { coins } = useContext(ApiContext);
  // const context = useContext(ApiContext);

  const formatCurrencyConfig = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    currencyDisplay: 'symbol',
  };

  const formatPercentConfig = {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const formatCurrency = new Intl.NumberFormat('us-US', formatCurrencyConfig);
  const formatPercent = new Intl.NumberFormat('us-US', formatPercentConfig);

  const coinsRender = () => {
    return coins.map((coin: any, index: number) => {
      return (
        <Link href={`/coin/${coin.CoinInfo.Name}`} key={index}>
          <div
            key={index}
            className={`flex flex-row border shadow-md border-gray-600 h-32 w-48 b-2 ml-2 rounded cursor-pointer`}
          >
            <div className="flex flex-col w-1/2 p-1">
              <span className="text-base text-yellow-300 truncate">
                {coin.CoinInfo.FullName}
              </span>
              <img
                src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                className="object-cover w-16 h-16 mt-2"
                title={coin.CoinInfo.FullName}
              />
            </div>
            <div className={`flex flex-col justify-center items-center w-full`}>
              <span className="text-base font-bold text-blue-400">
                {coin.CoinInfo.Name}
              </span>
              <span className="text-base text-gray-200">
                {coin.DISPLAY.USD.PRICE}
              </span>
              {coin.RAW.USD.CHANGEPCT24HOUR < 0 ? (
                <span className="text-base text-red-600">
                  {formatPercent.format(coin.DISPLAY.USD.CHANGEPCT24HOUR / 100)}{' '}
                  &darr;
                </span>
              ) : (
                <span className="text-base text-green-500">
                  {formatPercent.format(coin.DISPLAY.USD.CHANGEPCT24HOUR / 100)}{' '}
                  &uarr;
                </span>
              )}

              <p className="text-yellow-200 text-xs truncate">
                {moment(coin.RAW.USD.LASTUPDATE * 1000).fromNow()}
              </p>
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2`}>
      {coinsRender()}
    </div>
  );
}
