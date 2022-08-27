import moment from 'moment';
import Link from 'next/link';
export default function Footer() {
  //
  const ano = moment().year();
  //
  return (
    <>
      <footer className="p-1 mt-2 bg-gray-400 shadow sm:flex sm:items-center sm:justify-between sm:p-2 bg-opacity-10">
        <span className="flex justify-center text-xs text-gray-400 sm:text-center">
          {`© ${ano}`}&nbsp;
          <Link href="/">
            <p className="cursor-pointer">CrypoMunze. All Rights Reserved.</p>
          </Link>
        </span>
        <ul className="flex flex-wrap items-center justify-center text-xs text-gray-400">
          <li>
            <Link href="/about">
              <p className="mr-4 md:mr-6 cursor-pointer">About</p>
            </Link>
          </li>
          <li>
            <Link href="/list">
              <p className="mr-4 md:mr-6 cursor-pointer">Coin List</p>
            </Link>
          </li>
          <li>
            <Link href="#">
              <p className="mr-4 md:mr-6 cursor-pointer">Privacy Policy</p>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
