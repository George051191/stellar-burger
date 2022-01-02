import { BURGER_DATA_REQUEST, BURGER_DATA_SUCCESS, BURGER_DATA_ERROR } from "../actions/burger-ingredients";

const initialState = {
    ingredients: [],
    buns: [],
    souces: [],
    fillings: [],
    dataRequest: false,
    dataRequestFailed: false
}


export const burgerDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case BURGER_DATA_REQUEST:
            return {
                ...state,
                dataRequest: true
            };
        case BURGER_DATA_SUCCESS:
            return {
                ...state,
                ingredients: action.data,
                buns: action.buns,
                souces: action.souces,
                fillings: action.fillings,
                dataRequest: false
            };
        case BURGER_DATA_ERROR:
            return {
                ...state,
                dataRequest: false,
                dataRequestFailed: true
            };
        default:
            return {...state };
    }
}