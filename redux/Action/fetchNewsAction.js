import actionTypes from '../../Config/actionTypes'

export const fetchNewsInitiate = (data) => {
    return ({
        type: actionTypes.FETCH_NEWS_DATA_INITAITE,
        payload: data
    })
};

export const fetchNewsSuccessful = (data) => {
    return ({
        type: actionTypes.FECTH_NEW_DATA_SUCCESSFUL,
        payload: data
    })
}
export const fetchNewsError = (data) => {
    return ({
        type: actionTypes.FETCH_NEW_DATA_ERROR,
        payload: data
    })
}
