import { combineReducers } from 'redux';

import fetchNewsReducer from './fetchNewsReducer'; 

const rootReducer = combineReducers({
    fetchNews:fetchNewsReducer,
})
export default rootReducer;
