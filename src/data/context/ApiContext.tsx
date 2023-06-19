import { createContext, useEffect, useState } from 'react'
import { myApi } from '../../data/base_api'

export interface AppContextProps {
  coins: any
}
const ApiContext = createContext<AppContextProps>({
  coins: [],
})
export function ApiProvider({ children }) {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    myApi().then((data) => {
      setCoins(data)
    })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      myApi().then((data) => {
        setCoins(data)
      })
    }, 10000)
    return () => clearInterval(timer)
  }, [])
  // criando um 'provider', ou seja, um provedor de dados usando a 'const AppContext' acima
  return (
    // o que foi criado em 'interface' deve ser refletido aqui
    <ApiContext.Provider
      value={{
        // estado inicial
        coins,
      }}
    >
      {/* <AppProvider>{props.children}</AppProvider> em outro componente */}
      {children}
    </ApiContext.Provider>
  )
}

export default ApiContext
