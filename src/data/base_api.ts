/* istanbul ignore file */

const api = process.env.NEXT_PUBLIC_KEY_API;
const currency = 'USD';
const url = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=${currency}&api_key=${api}`;

export const myApi = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.Data[0].CoinInfo);
    return data.Data;
  } catch (error) {
    console.error(error.message);
  }
};
