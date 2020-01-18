import { takeLatest } from 'redux-saga/effects';
import actionTypes from '../../Config/actionTypes';
import { fetchNewsData } from './fetchNewsDataSaga';
import { selectedNewsSaga } from './selectedNewsSaga';
export function* rootSaga (){
    yield takeLatest(actionTypes.FETCH_NEWS_DATA_INITAITE, fetchNewsData);
    yield takeLatest(actionTypes.SELECTED_NEWS, selectedNewsSaga)
}