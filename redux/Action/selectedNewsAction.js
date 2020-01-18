import actionTypes from '../../Config/actionTypes'

export const selectedNewsAction = (data) => ({
    type:actionTypes.SELECTED_NEWS,
    payload:data
}) 