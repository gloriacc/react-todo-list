import React, {useState} from 'react';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const addTodo = () => {
    console.log('add');
  };
  return (
    <div>
      <input value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={()=>addTodo()}>Add Todo</button>
    </div>
  )
}
export {AddTodo};