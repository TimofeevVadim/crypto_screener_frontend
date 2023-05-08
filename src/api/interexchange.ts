import axios from 'axios';

interface ExchangeData {
  url: string;
  exchange: string;
  price: number;
  volume: number;
  volumeUSDT: number;
  average: number;
  quoteVolume: number;
}

interface CryptoPair {
  percent: number;
  pair: string;
  lover: ExchangeData;
  high: ExchangeData;
}
export const fetchGetTickers = async () => {
  try {
    const { data } = await axios.get<CryptoPair[]>('http://localhost:9000/screener/get-tickers');
    if (Array.isArray(data)) return data;
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default { fetchGetTickers };
