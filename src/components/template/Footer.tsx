import moment from 'moment';
export default function Footer() {
  //
  const ano = moment().year();

  return (
    <>
      <footer className="p-1 mt-2 bg-gray-400 shadow sm:flex sm:items-center sm:justify-between sm:p-2 bg-opacity-10">
        <span className="flex justify-center text-xs text-gray-400 sm:text-center">
          {`© ${ano}`}&nbsp;
          <a href="https://flowbite.com/" className="hover:underline">
            CrypoMunze
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center justify-center text-xs text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
