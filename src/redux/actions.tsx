const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_FILTER = 'SET_FILTER';

const addTodo = (text: string) => {
  return {
    type: ADD_TODO,
    value: text
  }
};

const toggleTodo = (id: number) => {
  return {
    type: TOGGLE_TODO,
    value: id
  }
};

const setFilter = (filter: string) => {
  return {
    type: SET_FILTER,
    value: filter
  }
};

export {ADD_TODO, TOGGLE_TODO, SET_FILTER, addTodo, toggleTodo, setFilter};