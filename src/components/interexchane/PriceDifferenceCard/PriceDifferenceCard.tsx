import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CLink from '../../../components/controls/CLink/CLink';

import { exchangeNames } from '../../../utils/enums';

import './PriceDifferenceCard.scss';

const exchange = ({ item, location }) => {
  return (
    <div className={`price-difference-card__content-exchange price-difference-card__content-exchanges-${location}`}>
      <span className="price-difference-card__content-exchange-inscription">Price</span>
      <div className="price-difference-card__content-exchange-price">
        <span>{item.price}$</span>
      </div>
      <span className="price-difference-card__content-exchange-inscription">Volume</span>
      <div className="price-difference-card__content-exchange-volume">
        <span>{item.volumeUSDT}$</span>
      </div>
      <span className="price-difference-card__content-exchange-inscription">Percentage</span>
      <div className="price-difference-card__content-exchange-percentage">
        <span>{item.percentage}%</span>
      </div>
      <div></div>
    </div>
  );
};

export function PriceDifferenceCard({ item }) {
  return (
    <Card className="price-difference-card">
      <CardContent className="price-difference-card__content">
        <div className="price-difference-card__content-title">
          <span>{item.pair}</span>
        </div>
        <div>
          <span>{item.persent}%</span>
        </div>
        <span className="price-difference-card__content-time">{item.time}</span>
        <div className="price-difference-card__content-exchanges">
          {exchange({ item: item.lover, location: 'left' })}
          {exchange({ item: item.high, location: 'right' })}
        </div>
      </CardContent>
      <CardActions>
        <div className="price-difference-card__actions">
          <CLink target="_blank" href={item.lover.url} title={exchangeNames[item.lover.exchange]} rel="noopener" />
          <CLink target="_blank" href={item.high.url} title={exchangeNames[item.high.exchange]} rel="noopener" />
        </div>
      </CardActions>
    </Card>
  );
}
