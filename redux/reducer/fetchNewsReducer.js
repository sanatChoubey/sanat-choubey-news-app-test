import actionTypes from '../../Config/actionTypes';

const initalState = {
    NewsData:[],
    Loading:false
}

export default function fetchNewsReducer(state= initalState, { type, payload}){
    switch(type){
        case actionTypes.FETCH_NEWS_DATA_INITAITE:
            return {...state, ...payload, Loading:true};
        case actionTypes.FECTH_NEW_DATA_SUCCESSFUL:
            return {...state, NewsData:payload, Loading:false}
        case actionTypes.FETCH_NEW_DATA_ERROR:
            return {...state, Error:payload, Loading:false} 
        
        default:
            return state    
    }
}