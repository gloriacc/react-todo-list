import React, {useState} from 'react';

const AddItem = () => {
  const [todo, setTodo] = useState('');
  const addTodo = () => {
    console.log('add');
  };
  return (
    <div className="addItem">
      <input value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={()=>addTodo()}>Add Todo</button>
    </div>
  )
}
export {AddItem};