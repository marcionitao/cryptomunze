import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/template/Layout';

export default function Coin({ coin }) {
  // get 'id' from url
  const router = useRouter();
  const { id } = router.query;
  // console.log(router.query);
  const overview = `https://www.cryptocompare.com/coins/${id}/overview`;
  //
  return (
    <Layout>
      <div className="mt-10 sm:mt-1">
        <a
          href={overview}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center border-gray-600 rounded-sm shadow-sm cursor-pointer sm:flex-row sm:max-w-xl"
        >
          <img
            className="object-cover w-48 rounded-t-lg h-44 sm:h-auto sm:w-72 sm:rounded-none sm:rounded-l-lg"
            src={`https://www.cryptocompare.com${coin.IMAGEURL}`}
            alt=""
          />
          <div className="flex flex-col items-center justify-between p-5 leading-normal sm:items-start">
            <p className="mb-2 text-3xl font-bold tracking-tight text-white">{id}</p>
            <p className="mb-3 text-2xl font-normal text-yellow-400">{coin.PRICE}</p>
            <p className="mb-3 text-2xl font-normal text-gray-400">{coin.CIRCULATINGSUPPLY}</p>
            <p className="mb-3 text-2xl font-normal text-gray-400">{coin.TOTALVOLUME24H}</p>
            <p className="mb-3 text-2xl font-normal text-gray-400">{coin.MKTCAP}</p>
            {/* ... */}
            {coin.CHANGEPCT24HOUR < 0 ? (
              <p className="mb-3 text-2xl font-bold text-red-600">{coin.CHANGEPCT24HOUR} &darr;</p>
            ) : (
              <p className="mb-3 text-2xl font-bold text-green-500">
                {coin.CHANGEPCT24HOUR} &uarr;
              </p>
            )}
          </div>
        </a>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  //
  const id = context.params.id;
  const currency = 'USD';
  //
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${id}&tsyms=${currency}`,
  );
  const data = await response.json();
  // console.log(data.DISPLAY);
  const coins = data.DISPLAY[id][currency];
  return {
    props: {
      coin: coins,
    },
  };
};
