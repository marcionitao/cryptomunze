import Link from 'next/link';

interface LogoProps {
  className?: string;
  titulo?: string;
}

export default function Logo(props: LogoProps) {
  return (
    <div className="flex justify-center items-center">
      <Link href="/">
        <img
          src="/images/logo.png"
          className={`h-14 w-14 rounded-full cursor-pointer ${props.className}`}
        />
      </Link>
      <Link href="/">
        <h1 className="text-white text-2xl cursor-pointer">{props.titulo}</h1>
      </Link>
    </div>
  );
}
