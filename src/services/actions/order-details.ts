import Api from "../../utils/Api";
import { OPEN_ORDER_POPUP, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_ERROR, CLOSE_ORDER_POPUP } from "../constants";
import { TOrder } from "../types/data";

export interface IOpenOrderPopupAction {
  readonly type: typeof OPEN_ORDER_POPUP;
}

export interface IGetOrderRequestAction {
  readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccessAction {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly data: number;
  readonly orderData: TOrder;
  readonly result: boolean;
}

export interface IGetOrderErrorAction {
  readonly type: typeof GET_ORDER_ERROR;
}

export interface ICloseOrderPopupAction {
  readonly type: typeof CLOSE_ORDER_POPUP;
}


export type TOrderDetailsActions = IOpenOrderPopupAction | IGetOrderRequestAction | IGetOrderSuccessAction | IGetOrderErrorAction | ICloseOrderPopupAction;
/* export const OPEN_ORDER_POPUP = 'OPEN_ORDER_POPUP';
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';
export const CLOSE_ORDER_POPUP = 'CLOSE_ORDER_POPUP'; */





/* export function getOrderNumber(idData) {
    return function(dispatch) {
        dispatch({ type: GET_ORDER_REQUEST })
        Api.getOrderNumber(idData)
            .then(res => {

                dispatch({ type: GET_ORDER_SUCCESS, data: res.order.number, orderData: res, result: res.success })
            })
            .catch(err => { dispatch({ type: GET_ORDER_ERROR }) })

    }
} */
