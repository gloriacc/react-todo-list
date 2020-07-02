import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/actions';

const AddItem = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(addTodo(todo));
    setTodo('');
  };
  return (
    <div className="addItem">
      <input value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={()=>submit()}>Add Todo</button>
    </div>
  )
}
export {AddItem};