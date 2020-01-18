import actionTypes from '../../Config/actionTypes'

export const fetchNewsInitiate = (data) => {
    return ({
        type:actionTypes.FETCH_NEWS_DATA_INITAITE,
        payload:data
    })
}