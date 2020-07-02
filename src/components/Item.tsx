import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleTodo} from '../redux/actions';
import {ItemType} from '../type';

const Item:React.FC<ItemType> = (props) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div className={props.done?'doneStyle':'todoStyle'}
           onClick={()=>dispatch(toggleTodo(props.id))}>{props.text}</div>
    </li>
  )
}
export {Item};