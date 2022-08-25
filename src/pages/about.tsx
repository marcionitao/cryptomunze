import Link from 'next/link';
import Logo from '../components/template/Logo';

export default function About() {
  return (
    <div className="flex justify-center p-14">
      <div className="p-6 max-w-md  rounded-lg border shadow-md bg-opacity-10 bg-gray-400 border-gray-700">
        <Logo titulo="CrypoMunze" src="/images/logo.png" />
        <a href="#">
          <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-white">
            Need a help in Claim?
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">
          Go to this step by step guideline process on how to certify for your weekly benefits:
        </p>
        <Link href={'/'}>
          <p className="text-yellow-300 cursor-pointer">Back to home</p>
        </Link>
      </div>
    </div>
  );
}
