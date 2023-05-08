import axios from 'axios';

interface LimitOrders {
  symbol: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
}

interface MarketData {
  [pair: string]: {
    bidPrice: number;
    askPrice: number;
    volume: number;
  };
}

export const getLimitOrders = async (): Promise<LimitOrders[]> => {
  try {
    const response = await axios.get<LimitOrders[]>('http://localhost:9000/binance/get-limit-orders');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getMarketData = async (): Promise<MarketData> => {
  try {
    const response = await axios.get<Record<string, any>>('http://localhost:9000/screener/get-tickers');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default { getLimitOrders, getMarketData };
