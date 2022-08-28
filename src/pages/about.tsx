import Link from 'next/link';
import Footer from '../components/template/Footer';
import Logo from '../components/template/Logo';

export default function About() {
  return (
    <div className={`flex h-screen w-auto flex-col`}>
      <div className="flex justify-center flex-1 p-14" data-testid="about">
        <div className="max-w-md p-6 bg-gray-400 border border-gray-700 rounded-lg shadow-md bg-opacity-10">
          <Logo titulo="CrypoMunze" src="/images/logo.png" />
          <a href="#">
            <h5 className="mt-4 mb-2 text-2xl font-semibold tracking-tight text-white">About us</h5>
          </a>
          <p className="mb-3 font-normal text-gray-400">
            Cryptocurrencies emerged in 2009 with the first decentralized cryptocurrency - Bitcoin .
            As of today - more than 700 digital currencies exist with a total market capitalization
            greater than 100 billion USD.
          </p>
          <p className="mb-3 font-normal text-gray-400">
            The CryptoMünze is a real-time dashboard that displays the top 10 cryptocurrencies based
            on currency price, market capitalization and overall circulating supply - obtained from
            the leading cryptocurrency resource CryptoCompare.
          </p>
          <Link href={'/'}>
            <p className="text-yellow-300 cursor-pointer">Back to home</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
