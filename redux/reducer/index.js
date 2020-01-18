import { combineReducers } from 'redux';

import fetchNewsReducer from './fetchNewsReducer'; 
import selectedNewsReducer from './selectedNewsReducer';
const rootReducer = combineReducers({
    fetchNews: fetchNewsReducer,
    selectedNews: selectedNewsReducer
})
export default rootReducer;
