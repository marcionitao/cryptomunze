import Footer from './Footer';
import MenuNav from './MenuNav';

export default function Layout({ children }) {
  return (
    <div className={`flex h-screen w-auto flex-col`}>
      <MenuNav />
      {/* conteudo das paginas */}
      <div className={`flex justify-center sm:h-screen items-center sm:mt-1 mr-4 flex-1`}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
