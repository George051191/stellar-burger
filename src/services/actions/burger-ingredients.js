import Api from "../../components/utils/Api";

export const BURGER_DATA_REQUEST = 'BURGER_DATA_REQUEST';
export const BURGER_DATA_SUCCESS = 'BURGER_DATA_SUCCESS';
export const BURGER_DATA_ERROR = 'BURGER_DATA_ERROR';
export const ADD_AMMOUNT = 'ADD_AMOUNT';
export const DECREASE_AMOUNT = 'DECREASE_AMOUNT';
export const SET_BUN_AMMOUNT = 'SET_BUN_AMMOUNT';
export const DECREASE_BUN_AMMOUNT = 'DECREASE_BUN_AMMOUNT';



export function getBurgerData() {
    return function(dispatch) {
        dispatch({ type: BURGER_DATA_REQUEST })
        Api.getBurgerIngredientsData()
            .then(res => {
                dispatch({
                    type: BURGER_DATA_SUCCESS,
                    data: res.data,
                })
            })
            .catch(err => { dispatch({ type: BURGER_DATA_ERROR }) })
    }
}