import Link from 'next/link';
import Footer from '../components/template/Footer';
import Logo from '../components/template/Logo';

export default function About() {
  return (
    <div className={`flex h-screen w-auto flex-col`}>
      <div className="flex justify-center p-14 flex-1">
        <div className="p-6 max-w-md  rounded-lg border shadow-md bg-opacity-10 bg-gray-400 border-gray-700">
          <Logo titulo="CrypoMunze" src="/images/logo.png" />
          <a href="#">
            <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-white">About us</h5>
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
