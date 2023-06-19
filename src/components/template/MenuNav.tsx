import { useRouter } from 'next/router'
import Logo from './Logo'
import MenuItems from './MenuItems'
import MenuMobile from './MenuMobile'

export default function MenuNav() {
  //
  const router = useRouter()
  const itemAtivo = 'text-yellow-50 border-b-4 border-yellow-500'
  const itemInativo = 'text-indigo-300'

  //
  return (
    <nav className="flex justify-between" data-testid="menu-nav">
      <div>
        <Logo titulo="CrypoMunze" src="/images/logo.png" />
      </div>
      <ul className="justify-end flex-grow hidden m-1 sm:flex">
        <MenuItems
          url="/"
          texto="Home"
          className={
            router?.pathname === '/' ? `${itemAtivo}` : `${itemInativo}`
          }
        />
        <MenuItems
          url="/list"
          texto="List Coins"
          className={
            router?.pathname === '/list' ? `${itemAtivo}` : `${itemInativo}`
          }
        />
        <MenuItems
          url="/about"
          texto="About"
          className={
            router?.pathname === '/about' ? `${itemAtivo}` : `${itemInativo}`
          }
        />
      </ul>
      <MenuMobile />
    </nav>
  )
}
