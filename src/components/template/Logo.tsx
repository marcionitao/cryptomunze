import Link from 'next/link';

interface LogoProps {
  className?: string;
  titulo?: string;
}

export default function Logo(props: LogoProps) {
  return (
    <div className="flex items-center justify-center">
      <Link href="/">
        <img
          src="/images/logo.png"
          className={`h-14 w-14 rounded-full cursor-pointer ${props.className}`}
        />
      </Link>
      <Link href="/">
        <h1 className="text-2xl text-white cursor-pointer">{props.titulo}</h1>
      </Link>
    </div>
  );
}
