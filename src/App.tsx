import React from 'react';
import './App.scss';
import {AddItem} from './components/AddItem';
import {ItemList} from './components/ItemList';
import {FilterTabs} from './components/FilterTabs';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <AddItem/>
        <FilterTabs/>
        <ItemList/>
      </div>
    </div>
  );
}
export {App};
