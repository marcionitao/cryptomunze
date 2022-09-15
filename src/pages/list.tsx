import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import Layout from '../components/template/Layout';
// import context
import ApiContext from '../data/context/ApiContext';

export default function List() {
  //usando context
  const { coins } = useContext(ApiContext);

  const formatPercentConfig = {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const formatCurrencyConfig = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const formatCurrency = new Intl.NumberFormat('en-US', formatCurrencyConfig);
  const formatPercent = new Intl.NumberFormat('en-US', formatPercentConfig);

  return (
    <div>
      <Layout>
        <div className="relative mt-6 overflow-x-auto shadow-md sm:mt-0 sm:rounded-lg">
          <table className="w-full text-sm text-gray-400" data-testid="table-list">
            <thead className="text-xs text-white uppercase border-b border-gray-700 sm:text-sm ">
              <tr>
                <th scope="col" className="flex justify-center px-6">
                  #
                </th>
                <th scope="col" className="px-6">
                  Coin
                </th>
                <th scope="col" className="px-6">
                  Price
                </th>
                <th scope="col" className="px-6 whitespace-no-wrap">
                  % 24h
                </th>
                <th scope="col" className="px-6">
                  Update
                </th>
                <th scope="col" className="px-6">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin: any, index: number) => {
                return (
                  // <Link href={`/details/${coin.CoinInfo.Name}`} key={index}>
                  <tr className="border-b border-gray-700" key={index}>
                    <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-700">
                      <div className="relative flex justify-center w-7 h-7">
                        <Image
                          src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                          alt={coin.CoinInfo.FullName}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                          title={coin.CoinInfo.FullName}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-700">
                      {coin.CoinInfo.FullName}
                    </td>
                    <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-700">
                      {formatCurrency.format(coin.RAW.USD.PRICE)}
                    </td>
                    {coin.RAW.USD.CHANGEPCT24HOUR < 0 ? (
                      <td
                        className={`px-6 py-2 text-red-600 whitespace-no-wrap truncate flex justify-center`}
                      >
                        {formatPercent.format(coin.RAW.USD.CHANGEPCT24HOUR / 100)} &darr;
                      </td>
                    ) : (
                      <td
                        className={`px-6 py-2 text-green-500 whitespace-no-wrap flex justify-center truncate`}
                      >
                        {formatPercent.format(coin.RAW.USD.CHANGEPCT24HOUR / 100)} &uarr;
                      </td>
                    )}
                    <td className="px-6 py-2 text-yellow-300 truncate border-b border-gray-700">
                      {moment(coin.RAW.USD.LASTUPDATE * 1000).fromNow()}
                    </td>
                    <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-700">
                      <Link href={`/details/${coin.CoinInfo.Name}`}>
                        <a
                          href={`/details/${coin.CoinInfo.Name}`}
                          className="text-yellow-300 cursor-pointer"
                        >
                          more details
                        </a>
                      </Link>
                    </td>
                  </tr>
                  // </Link>
                );
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
}
