import Link from 'next/link';

interface MenuItemsProps {
  url?: string;
  texto: string;
  className?: string;
  onClick?: (event: any) => void;
}
export default function MenuItems(props: MenuItemsProps) {
  const renderizarLinks = () => {
    return (
      <a className={`flex ${props.className}`}>
        <span className={`text-xl text-white font-light`}>{props.texto}</span>
      </a>
    );
  };

  return (
    <li className={`cursor-pointer border-b-4 border-indigo-500 m-2 mb-10`}>
      <Link href={props.url}>{renderizarLinks()}</Link>
    </li>
  );
}
