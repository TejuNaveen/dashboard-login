import React from 'react';
import {createStore} from 'redux';
import combinedReducer from './Reducer';

const Store = createStore(combinedReducer);

export default Store;

