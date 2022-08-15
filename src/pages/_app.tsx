import 'tailwindcss/tailwind.css';
import { ApiProvider } from '../data/context/ApiContext';
import '../styles/globals.css';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/nprogress.css';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
});

function MyApp({ Component, pageProps }) {
  // quando mudar de rota, o nprogress é iniciado
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
  }, []);
  //
  return (
    // neste caso, 'ApiProvider' está provendo dados p/ todos os componentes da aplicação
    <ApiProvider>
      <Component {...pageProps} />
    </ApiProvider>
  );
}

export default MyApp;
