import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { IconDown, IconUp } from '../../components/icons/myIcons';
import Layout from '../../components/template/Layout';

export default function Coin({ id, image, price, change, mktcp, volume_24, supply }) {
  const overview = `https://www.cryptocompare.com/coins/${id}/overview`;

  //
  return (
    <Layout>
      <div className="mt-1 sm:mt-1" data-testid="coin-details">
        <a
          href={overview}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center border-gray-600 rounded-sm shadow-sm cursor-pointer sm:flex-row sm:max-w-xl"
        >
          <div className="relative h-72 w-72">
            <Image
              src={`https://www.cryptocompare.com${image}`}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div
            className="flex flex-col items-center justify-between p-5 leading-normal sm:items-start"
            data-testid="coin"
          >
            <p className="mb-2 text-3xl font-bold tracking-tight text-white">{id}</p>
            <p className="mb-3 text-2xl font-normal text-yellow-400">{price}</p>
            <p className="mb-3 text-2xl font-normal text-gray-400">{supply}</p>
            <p className="mb-3 text-2xl font-normal text-gray-400">{volume_24}</p>
            <p className="mb-3 text-2xl font-normal text-gray-400">{mktcp}</p>
            {change < 0 ? (
              <p
                className="flex flex-row mb-3 text-2xl font-bold text-red-600"
                data-testid="vermelho"
              >
                {change}
                {IconDown}
              </p>
            ) : (
              <p
                className="flex flex-row mb-3 text-2xl font-bold text-green-500"
                data-testid="verde"
              >
                {change}
                {IconUp}
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
  //
  //const coins = data.DISPLAY[id][currency];
  const image = data.DISPLAY[id][currency].IMAGEURL;
  const price = data.DISPLAY[id][currency].PRICE;
  const supply = data.DISPLAY[id][currency].CIRCULATINGSUPPLY;
  const volume_24 = data.DISPLAY[id][currency].TOTALVOLUME24H;
  const mktcp = data.DISPLAY[id][currency].MKTCAP;
  const change = data.DISPLAY[id][currency].CHANGEPCT24HOUR;
  //
  //
  return {
    props: {
      // coin: coins,
      id,
      image,
      price,
      supply,
      volume_24,
      mktcp,
      change,
    },
  };
};
