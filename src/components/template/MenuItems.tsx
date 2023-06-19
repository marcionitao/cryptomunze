import Link from 'next/link'

interface MenuItemsProps {
  url: string
  texto: string
  className?: string
}

export default function MenuItems(props: MenuItemsProps) {
  // simnplificando o props
  const { url, texto, className } = props

  const renderizarLinks = () => {
    return (
      <a className={`flex ${className} `}>
        <span className={`text-base font-light`}>{texto}</span>
      </a>
    )
  }

  return (
    <li className={`cursor-pointer m-3`}>
      <Link href={url}>{renderizarLinks()}</Link>
    </li>
  )
}
