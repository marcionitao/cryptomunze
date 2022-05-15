import Link from 'next/link';
import { useRouter } from 'next/router';

interface MenuItemsProps {
  url: string;
  texto: string;
  className?: string;
  //onClick?: () => void;
}

export default function MenuItems(props: MenuItemsProps) {
  // simnplificando o props
  const { url, texto, className } = props;
  const asPath = useRouter();

  // const ariaCurrent = url === asPath?.asPath ? 'page' : undefined;
  //
  //
  const renderizarLinks = () => {
    return (
      <a className={`flex ${className} `}>
        <span className={`text-base font-light`}>{texto}</span>
      </a>
    );
  };

  return (
    <li className={`cursor-pointer m-3`}>
      <Link href={url} passHref>
        {renderizarLinks()}
      </Link>
    </li>
  );
}
