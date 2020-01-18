import actionTypes from '../../Config/actionTypes';

const initalState = {
    NewsData:[],
    Loading:false
}

export default function selectedNewsReducer (state = initalState, { type, payload}) {
    switch(type){
        case actionTypes.SELECTED_NEWS:
            return payload;
        default :
            return state    
    }
} 