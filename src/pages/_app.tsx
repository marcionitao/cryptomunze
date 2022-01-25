import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { ApiProvider } from '../data/context/ApiContext';

function MyApp({ Component, pageProps }) {
  return (
    // neste caso, 'ApiProvider' está provendo dados p/ todos os componentes da aplicação
    <ApiProvider>
      <Component {...pageProps} />;
    </ApiProvider>
  );
}

export default MyApp;
