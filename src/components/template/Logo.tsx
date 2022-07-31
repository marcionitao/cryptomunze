import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  titulo: string;
  src: string;
}

export default function Logo(props: LogoProps) {
  return (
    <div className="flex items-center justify-center">
      <Link href="/">
        <div className="relative h-14 w-14 m-2" data-testid="image-logo">
          <Image
            src={props.src}
            alt={props.titulo}
            layout="fill"
            objectFit="cover"
            className={'rounded-full cursor-pointer'}
          />
        </div>
      </Link>
      <Link href="/">
        <h1 className="text-2xl text-white cursor-pointer">{props.titulo}</h1>
      </Link>
    </div>
  );
}
