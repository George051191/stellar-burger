import Api from "../../utils/Api";
import { BURGER_DATA_REQUEST, BURGER_DATA_SUCCESS, BURGER_DATA_ERROR, ADD_AMMOUNT, DECREASE_AMOUNT, CLEAN_INGREDIENTS_AMOUNTS } from "../constants";
import { TIngredient } from "../types/data";

export interface IBurgerDataRequest {
  readonly type: typeof BURGER_DATA_REQUEST;
}

export interface IBurgerDataSuccessAction {
  readonly type: typeof BURGER_DATA_SUCCESS;
  readonly data: Array<TIngredient>;
}

export interface IBurgerDataErrorAction {
  readonly type: typeof BURGER_DATA_ERROR;
}

export interface IAddAmountAction {
  readonly type: typeof ADD_AMMOUNT;
  readonly id: string;
}

export interface IDecreaseAmountAction {
  readonly type: typeof DECREASE_AMOUNT;
  readonly id: string;
}

export interface ICleanIngredientsAmount {
  readonly type: typeof CLEAN_INGREDIENTS_AMOUNTS;
}

export type TBurgerIngredientsActions = IBurgerDataRequest | IBurgerDataSuccessAction | IBurgerDataErrorAction | IAddAmountAction | IDecreaseAmountAction | ICleanIngredientsAmount;

/* export const BURGER_DATA_REQUEST = 'BURGER_DATA_REQUEST';
export const BURGER_DATA_SUCCESS = 'BURGER_DATA_SUCCESS';
export const BURGER_DATA_ERROR = 'BURGER_DATA_ERROR';
export const ADD_AMMOUNT = 'ADD_AMOUNT';
export const DECREASE_AMOUNT = 'DECREASE_AMOUNT';
export const CLEAN_INGREDIENTS_AMOUNTS = 'CLEAN_INGREDIENTS_AMOUNTS' */





/* export function getBurgerData() {
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
 */
