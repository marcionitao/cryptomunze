import 'tailwindcss/tailwind.css';
import { ApiProvider } from '../data/context/ApiContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    // neste caso, 'ApiProvider' está provendo dados p/ todos os componentes da aplicação
    <ApiProvider>
      <Component {...pageProps} />
    </ApiProvider>
  );
}

export default MyApp;
