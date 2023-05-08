import * as React from 'react';
import { useEffect, useState } from 'react';

import './InterexchangePage.scss';

import CLinePreloader from '../../components/controls/CLinePreloader/CLinePreloader';
import ComandPanel from '../../components/interexchane/ComandPanel/ComandPanel';
import { PriceDifferenceCard } from '../../components/interexchane/PriceDifferenceCard/PriceDifferenceCard';
import { fetchTickers, startInterval } from './index';

export default function InterexchangePage() {
  const [tickers, setTickers] = useState([]);
  const [allTickers, setAllTickers] = useState([]);
  const [showAllTickers, setShowAllTickers] = useState('active');
  const [loading, setLoading] = useState(true);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setShowAllTickers(newValue);
  };

  useEffect(() => {
    console.log('useEffect');

    const fetchData = async () => {
      setLoading(true);
      await fetchTickers(setTickers, setAllTickers);
      setLoading(false);
    };
    fetchData();
    const intervalId = startInterval(setTickers, setAllTickers);
    return () => clearInterval(intervalId);
  }, [setTickers, setAllTickers]);

  return (
    <div className="container interexchange-page">
      {loading ? (
        <CLinePreloader />
      ) : (
        <div>
          <ComandPanel value={showAllTickers} handleChange={handleChange} />
          <div className="interexchange-page__cards">
            {showAllTickers === 'active'
              ? tickers.map(ticker => <PriceDifferenceCard key={ticker.ref} item={ticker} />)
              : allTickers.map(ticker => <PriceDifferenceCard key={ticker.ref} item={ticker} />)}
          </div>
        </div>
      )}
    </div>
  );
}
