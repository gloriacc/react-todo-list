import React from 'react';
import './App.css';
import {AddTodo} from './components/AddTodo';
import {TodoList} from './components/TodoList';
import {FilterTabs} from './components/FilterTabs';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <FilterTabs/>
      <TodoList/>
    </div>
  );
}

export default App;
