import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setFilter} from '../redux/actions';
import {StateType} from '../type';
import {filterOptions} from './filterOptions';

const FilterTabs = () => {
  const tab = useSelector<StateType, string>(state => state.filter);
  const dispatch = useDispatch();
  return (
    <ul className="filterTabs">
      {Object.entries(filterOptions).map(option =>
        <li className={tab === option[1] ? 'activeTab' : ''}
            key={option[0]}
            onClick={() => dispatch(setFilter(option[1]))}
        >{option[1]}</li>
      )}
    </ul>
  )
};
export {FilterTabs};