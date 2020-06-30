import React from 'react';
import {Item} from './Item';
const ItemList = () => {
  return (
    <ul className="itemList">
      <li>
        <Item/>
      </li>
    </ul>
  )
};
export {ItemList};