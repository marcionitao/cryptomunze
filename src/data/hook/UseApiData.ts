import { useContext } from 'react';
import ApiContext from '../context/ApiContext';

// criando um hook para que possamos ler o conteudo de 'ApiProvider' que está em 'ApiContext.tsx'
const useApiData = () => useContext(ApiContext)

// usado no 'Coin.tsx' e no 'List.tsx'
export default useApiData