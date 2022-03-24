import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/template/Layout';

export default function Coin({ coin }) {
  // get 'id' from url
  const router = useRouter();
  const { id } = router.query;
  // console.log(router.query);
  const overview = `https://www.cryptocompare.com/coins/${id}/overview`;
  //console.log(overview);

  //
  return (
    <Layout>
      <div className={`flex flex-wrap`}>
        <div className="w-full m-4">
          <legend className="text-base font-bold text-white border-b-2 border-indigo-500 sm:pb-2 sm:text-xl">
            {id}
          </legend>
        </div>
        <div
          className={`flex text-white justify-center items-center w-full sm:w-1/2`}
        >
          <img
            src={`https://www.cryptocompare.com${coin.IMAGEURL}`}
            className="w-24 h-24 sm:w-44 sm:h-44"
          />
        </div>
        <div
          className={`flex flex-col m-6 p-3 items-start justify-center  text-white `}
        >
          <h1>{coin.PRICE}</h1>
          <h1>{coin.CIRCULATINGSUPPLY}</h1>
          <h1>{coin.TOTALVOLUME24H}</h1>
          <h1>{coin.MKTCAP}</h1>
          {coin.CHANGEPCT24HOUR < 0 ? (
            <h1 className="text-red-600">{coin.CHANGEPCT24HOUR} &darr;</h1>
          ) : (
            <h1 className="text-green-500">{coin.CHANGEPCT24HOUR} &uarr;</h1>
          )}

          <div className="text-yellow-400 underline">
            <a href={overview} target="_blank" rel="noreferrer">
              Details Info
            </a>
          </div>
        </div>
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
  console.log(data.DISPLAY);
  const coins = data.DISPLAY[id][currency];
  return {
    props: {
      coin: coins,
    },
  };
};
