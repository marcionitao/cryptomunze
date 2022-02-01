import Logo from './Logo';
import MenuItems from './MenuItems';
import MenuMobile from './MenuMobile';

export default function MenuNav() {
  return (
    <nav className="flex justify-between">
      <div>
        <Logo titulo="CrypoMunze" className="m-2" />
      </div>
      <ul className="justify-end flex-grow hidden m-1 sm:flex">
        <MenuItems url="/" texto="Home" />
        <MenuItems url="/list" texto="List Coins" />
        <MenuItems url="/about" texto="About" />
      </ul>
      <MenuMobile />
    </nav>
  );
}
