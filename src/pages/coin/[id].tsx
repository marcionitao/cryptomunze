import Layout from '../../components/template/Layout';
import useApiData from '../../data/hook/UseApiData';

interface coinProps {
  coin: any;
  id: string;
}

export default function Coin(props: coinProps) {
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

  return (
    <Layout>
      <div
        className={`flex flex-col text-white justify-center items-center h-full w-full`}
      >
        <h1 className="text-base font-bold">{props.id}</h1>
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
      id: id,
    },
  };
}
