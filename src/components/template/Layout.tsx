import MenuNav from './MenuNav';

export default function Layout({ children }) {
  return (
    <div className={`flex h-full sm:h-screen w-full flex-col`}>
      <MenuNav />
      {/* conteudo das paginas */}
      <div className={`flex justify-center items-center sm:mt-20 mr-4`}>
        {children}
      </div>
    </div>
  );
}
