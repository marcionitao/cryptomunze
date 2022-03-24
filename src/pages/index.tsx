import Head from 'next/head';
import Coins from '../components/Coins';
import Layout from '../components/template/Layout';

interface homeProps {
  moedas?: any;
}

export default function Home(props: homeProps) {
  return (
    <div>
      <Head>
        <title>CrypoMunze</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Coins />
      </Layout>
    </div>
  );
}

// export async function getServerSideProps() {
//   const api: string = process.env.NEXT_PUBLIC_KEY_API;
//   const url: string =
//     'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10';
//   const currency: string = 'USD';

//   const response = await fetch(url + '&tsym=' + currency + '&api_key=' + api);
//   const moedas = await response.json();

//   return {
//     props: {
//       moedas: moedas['Data'],
//     },
//   };
// }
