import configData from '../../Config/config';
import axios from 'axios';
import { put } from 'redux-saga/effects';
import { fetchNewsSuccessful, fetchNewsError } from '../Action/fetchNewsAction';

export function* fetchNewsData (){
    try{
        const resultData = yield axios.get(configData.apiUrl)
        yield put(fetchNewsSuccessful(resultData.data.articles))

    }catch(e){
        yield put(fetchNewsError({error:e}))
    }
}