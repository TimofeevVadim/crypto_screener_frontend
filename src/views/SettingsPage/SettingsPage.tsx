import * as React from 'react';
import { useEffect, useState } from 'react';
import './SettingsPage.scss';

import { getLimitOrders, getMarketData } from '../../api/binance';

// import { getUsers } from '../../api/user';
// import { getLimitOrders } from '../../api/binance';

export default function SettingsPage() {
  const [limitOrders, setLimitOrders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log('fetchData');

      // const data = await getLimitOrders();
      const marketData = await getMarketData();
      console.log(marketData, 'tickers');
      // console.log(data, 'getLimitOrders');

      // setLimitOrders(data);
    };
    setInterval(async () => {
      await fetchData();
    }, 10000);
  }, []);
  return <h1>Settings page</h1>;
}
