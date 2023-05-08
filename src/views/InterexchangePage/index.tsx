import { fetchGetTickers } from '../../api/interexchange';
import { timeouts, interexchange } from '../../utils/enums';

let allTickers = [];

const getAllTickersList = tickers => {
  const list = [...tickers, ...allTickers].filter((item, index, array) => {
    return array.findIndex(obj => obj.ref === item.ref) === index;
  });
  if (list.length > 15) {
    const startMinute = list[list.length - 1].minute;
    const endMinute = list[0].minute;
    if (startMinute >= endMinute) {
      const difference = 60 - startMinute + endMinute;
      if (difference > interexchange.historyPeriodMinutes) {
        return list.filter(item => item.minute !== startMinute);
      }
      return list;
    } else {
      const difference = endMinute - startMinute;
      if (difference > interexchange.historyPeriodMinutes) {
        return list.filter(item => item.minute !== startMinute);
      }
      return list;
    }
  }
  return list;
};

const changeTickersLists = ({ tickers, setTickers, setAllTickers }) => {
  allTickers = getAllTickersList(tickers);

  setAllTickers(allTickers);
  setTickers(tickers);
};

export const fetchTickers = async (setTickers, setAllTickers) => {
  const tickers = await fetchGetTickers();
  changeTickersLists({ tickers, setTickers, setAllTickers });
};

export const startInterval = (setTickers, setAllTickers) => {
  return setInterval(async () => {
    fetchTickers(setTickers, setAllTickers);
  }, timeouts.tickersTimeout);
};

export default { startInterval, fetchTickers };
