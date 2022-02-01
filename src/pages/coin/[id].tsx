import Layout from '../../components/template/Layout';
import { useRouter } from 'next/router';

interface coinProps {
  coin: any;
}

export default function Coin(props: coinProps) {
  // get 'id' from url
  const router = useRouter();
  const {
    query: { id },
  } = router;
  console.log(id);

  return (
    <Layout>
      <div
        className={`flex flex-col text-white justify-center items-center h-full w-full`}
      >
        <h1 className="text-base font-bold">{id}</h1>
        <img
          src={`https://www.cryptocompare.com${props.coin.IMAGEURL}`}
          className="mt-2 w-36 h-36"
        />
        <h1>Coin Details</h1>
        <h1>Coin Details</h1>
        <h1>Coin Details</h1>
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
