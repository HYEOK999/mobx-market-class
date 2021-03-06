import React from 'react';
import BasketItem from './BasketItem';
import { inject, observer } from 'mobx-react';

const BasketItemList = ({ items, total, onTake }) => {
  const itemList = items.map((item) => <BasketItem item={item} key={item.name} onTake={onTake} />);

  return <div>{itemList}</div>;
};

export default inject(({ market }) => ({
  items: market.selectedItems,
  total: market.total,
  onTake: market.take,
}))(observer(BasketItemList));
