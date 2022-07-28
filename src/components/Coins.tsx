import moment from 'moment';
import Link from 'next/link';
import { useContext } from 'react';
import ApiContext, { AppContextProps } from '../data/context/ApiContext';

export default function CoinsComponent() {
  // obtendo o context dos dados entre os componentes
  const { coins }: AppContextProps = useContext(ApiContext);
  // const context: AppContextProps = useContext(ApiContext);

  const formatPercentConfig = {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  // const formatCurrency = new Intl.NumberFormat('us-US', formatCurrencyConfig);
  const formatPercent = new Intl.NumberFormat('us-US', formatPercentConfig);

  return (
    <div
      data-testid="coin-component"
      className={`grid grid-cols-1 mt-10 sm:mt-1 sm:grid-cols-3 lg:grid-cols-5 gap-2`}
    >
      {coins.map((coin: any, index: number) => {
        return (
          <Link href={`/coin/${coin.CoinInfo?.Name}`} key={index}>
            <a href={`/coin/${coin.CoinInfo?.Name}`}>
              <div
                data-testid="list"
                key={index}
                className={`flex flex-col items-center ml-2 p-2 rounded-sm border shadow-sm sm:flex-row  border-gray-700 cursor-pointer`}
              >
                <img
                  className="object-cover w-24 h-24 p-1 rounded-t-lg sm:h-24 sm:w-24 sm:rounded-none sm:rounded-l-lg"
                  src={`https://www.cryptocompare.com${coin.CoinInfo?.ImageUrl}`}
                  title={coin.CoinInfo?.FullName}
                />
                <div className="flex flex-col items-center justify-between leading-normal truncate w-42">
                  <p className="mb-1 text-xs font-bold text-white md:text-md ">
                    {coin.CoinInfo?.FullName}
                  </p>
                  <p className="mb-1 font-normal text-gray-400">{coin.DISPLAY?.USD.PRICE}</p>
                  {coin.RAW?.USD.CHANGEPCT24HOUR < 0 ? (
                    <p className="mb-1 text-sm font-bold text-red-600">
                      {formatPercent.format(coin.DISPLAY?.USD.CHANGEPCT24HOUR / 100)} &darr;
                    </p>
                  ) : (
                    <p className="mb-1 text-sm font-bold text-green-500">
                      {formatPercent.format(coin.DISPLAY?.USD.CHANGEPCT24HOUR / 100)} &uarr;
                    </p>
                  )}
                  <p className="mb-1 text-xs font-normal text-yellow-300 truncate w-42">
                    {moment(coin.RAW?.USD.LASTUPDATE * 1000).fromNow()}
                  </p>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
