import { createStore } from 'redux';
import rootReducer from './reducers/index';

/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
