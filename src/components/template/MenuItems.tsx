import Link from 'next/link';

interface MenuItemsProps {
  url?: string;
  texto?: string;
  className?: string;
}
export default function MenuItems(props: MenuItemsProps) {
  //
  const renderizarLinks = () => {
    return (
      <a className={`flex ${props.className} `}>
        <span className={`text-base font-light`}>{props.texto}</span>
      </a>
    );
  };

  return (
    <li className={`cursor-pointer m-3`}>
      <Link href={props.url}>{renderizarLinks()}</Link>
    </li>
  );
}
