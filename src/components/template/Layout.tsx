import MenuNav from './MenuNav';

interface LayoutProps {
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`flex h-full sm:h-screen w-full flex-col`}>
      <MenuNav />
      {/* conteudo das paginas */}
      <div className={`flex justify-center items-center sm:mt-20 mr-4`}>
        {props.children}
      </div>
    </div>
  );
}
