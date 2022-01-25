import Logo from './Logo';
import MenuItems from './MenuItems';

export default function MenuNav() {
  return (
    <nav className="flex">
      <div>
        <Logo titulo="CrypoMunze" className="m-2" />
      </div>
      <ul className="hidden sm:flex flex-grow justify-end m-1">
        <MenuItems url="/" texto="Home" />
        <MenuItems url="/list" texto="List Coins" />
        <MenuItems url="/about" texto="About" />
      </ul>
    </nav>
  );
}
