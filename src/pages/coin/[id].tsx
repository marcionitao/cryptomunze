import Layout from '../../components/template/Layout';
import { useRouter } from 'next/router';

export default function Coin({ coin }) {
  // get 'id' from url
  const router = useRouter();
  const {
    query: { id },
  } = router;

  console.log(id);

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
          <h1>Coin Details ddddddd</h1>
          <h1>Coin Detailsdddddddd</h1>
          <h1>Coin Details rrrrrr</h1>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const currency = 'USD';
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${id}&tsyms=${currency}`,
  );
  const data = await response.json();
  const coins = data.DISPLAY[id][currency];

  return {
    props: {
      coin: coins,
    },
  };
}
