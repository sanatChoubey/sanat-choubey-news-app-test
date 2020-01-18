import actionTypes from '../../Config/actionTypes';

const initalState = {
    NewsData:[],
    Loading:false
}

export default function fetchNewsReducer(state= initalState, { type, payload}){
    switch(type){
        case actionTypes.FETCH_NEWS_DATA_INITAITE:
            return {...state, ...payload, Loading:true};
        default:
            return state    
    }
}