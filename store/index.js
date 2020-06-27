/** @format */

import reducer from './../reducers';
import { createStore } from 'redux';

const initialState = {
	latlng: [],
};

const store = createStore(reducer, initialState);

export default store;
