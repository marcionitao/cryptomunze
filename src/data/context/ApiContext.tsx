import { createContext, useEffect, useState } from 'react';

interface AppContextProps {
  coins?: any;
}

const ApiContext = createContext<AppContextProps>({
  coins: [],
});

export function ApiProvider({ children }) {
  // request api
  const api: string = process.env.NEXT_PUBLIC_KEY_API;
  const currency: string = 'USD';
  const url: string = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=${currency}&api_key=${api}`;

  const myApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data['Data'];
  };

  // state
  const [coins, setCoins] = useState([]);

  // useEffect
  useEffect(() => {
    myApi().then(data => {
      setCoins(data);
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      myApi().then(data => {
        // console.log(data);
        setCoins(data);
      });
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // criando um 'provider', ou seja, um provedor de dados usando a 'const AppContext' acima
  return (
    // o que foi criado em 'interface' deve ser refletido aqui
    <ApiContext.Provider
      value={{
        // este 'coins', refere-se ao estado inicial
        coins,
      }}
    >
      {/* possibilitará fazer <AppProvider>{props.children}</AppProvider> em outro componente */}
      {children}
    </ApiContext.Provider>
  );
}

export default ApiContext;
