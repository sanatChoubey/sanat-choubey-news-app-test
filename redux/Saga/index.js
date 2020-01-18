import { takeLatest } from 'redux-saga/effects';
import actionTypes from '../../Config/actionTypes';
import { fetchNewsData } from './fetchNewsDataSaga';

export function* rootSaga (){
    yield takeLatest(actionTypes.FETCH_NEWS_DATA_INITAITE,fetchNewsData);
}