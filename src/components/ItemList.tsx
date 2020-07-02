import React from 'react';
import {Item} from './Item';
import {useSelector} from 'react-redux';
import {ItemType, StateType} from '../type';

const ItemList = () => {
  const list = useSelector<StateType, ItemType[]>(state =>
    state.items.filter(item => state.filter === 'all' ?
    item : (state.filter === 'done' ? item.done : !item.done)));
  return (
    <ul className="itemList">
      {list.length > 0 ? list.map((item) =>
        <Item key={item.id} id={item.id} text={item.text} done={item.done}/>) : <div>Try to add a todo~</div>}
    </ul>
  )
};
export {ItemList};