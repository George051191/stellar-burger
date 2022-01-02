import Api from "../../components/utils/Api";

export const BURGER_DATA_REQUEST = 'BURGER_DATA_REQUEST';
export const BURGER_DATA_SUCCESS = 'BURGER_DATA_SUCCESS';
export const BURGER_DATA_ERROR = 'BURGER_DATA_ERROR';

export function getBurgerData() {
    return function(dispatch) {
        dispatch({ type: BURGER_DATA_REQUEST })
        Api.getBurgerIngredientsData()
            .then(res => {
                dispatch({
                    type: BURGER_DATA_SUCCESS,
                    data: res.data,
                    buns: res.data.filter(element => { return element.type === 'bun'; }),
                    souces: res.data.filter(element => { return element.type === 'sauce'; }),
                    fillings: res.data.filter(element => { return element.type === 'main'; })
                })
            })
            .catch(err => { dispatch({ type: BURGER_DATA_ERROR }) })
    }
}