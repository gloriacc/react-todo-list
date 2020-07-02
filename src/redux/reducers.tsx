import {ADD_TODO, TOGGLE_TODO, SET_FILTER} from './actions';
import {StateType, ActionType} from '../type';

const initState = {
  filter: 'all',
  items: []
};

const todoApp =(state: StateType = initState, action: ActionType) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        items: [
          {
            id: Math.random(),
            text: action.value,
            done: false
          },
          ...state.items
        ]
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        items: state.items.map((item) => {
          if (item.id === action.value) {
            return Object.assign({}, item, {
              done: !item.done
            })
          }
          return item;
        })
      });
    case SET_FILTER:
      return Object.assign({}, state, {
        filter: action.value
      });
    default:
      return state;
  }
};

export {todoApp};