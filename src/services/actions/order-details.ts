import Api from "../../utils/Api";
import {
  OPEN_ORDER_POPUP,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
  CLOSE_ORDER_POPUP,
} from "../constants";
import { TOrder } from "../types/data";
import { AppThunk, TAppDispatch } from "../types";
import { getCookie, setCookie } from "../../utils/utils";
import { refreshMainToken } from "../../utils/utils";
import axios from "axios";
import { BASEURL } from "../../utils/utils";

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

export type TOrderDetailsActions =
  | IOpenOrderPopupAction
  | IGetOrderRequestAction
  | IGetOrderSuccessAction
  | IGetOrderErrorAction
  | ICloseOrderPopupAction;

export const getOrderNumber: AppThunk = (
  idData: string[],
  token: string,
  refresh: string,
  callback: (res: any) => void
) => {
  return function (dispatch: TAppDispatch) {
    dispatch({ type: GET_ORDER_REQUEST });
    axios
      .post<TOrder>(
        `${BASEURL}orders`,
        { ingredients: idData },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + "token",
          },
        }
      )
      .then((res) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          data: res.data.order.number,
          orderData: res.data,
          result: res.data.success,
        });
      })

      //Api.getOrderNumber(idData, token, refresh, callback)

      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ORDER_ERROR });
      });
  };
};

/* const refreshAuthToken = () => {
  const token = getCookie('refreshToken')
  axios.post(`${BASEURL}auth/token`, { token: token }, { headers: { "Content-Type": "application/json" } })
}

axios.interceptors.response.use(function (response) {

  return response;
}, async function (error) {
  const data = await refreshAuthToken()
  console.log(data)


  // axios.post(`${BASEURL}auth/token`, {token : getCookie('refreshToken') }, {  headers: { "Content-Type": "application/json" }} )






  return Promise.reject(error);


});
 */
axios.post(
  `${BASEURL}auth/token`,
  { token: getCookie("refreshToken") },
  { headers: { "Content-Type": "application/json" } }
);

/* refreshToken(token: string) {
  return fetch(`${this.url}auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token }),
  }).then(this.checkResponse);
} */

/* getOrderNumber(
  arrayOfId: Array < string >,
  token: string,
  refresh: string,
  callback: (res: any) => void
) {
  return fetch(`${this.url}orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ ingredients: arrayOfId }),
  })
    .then(this.checkResponse)
    .catch((res) => {
      if (!res.success) {
        this.refreshToken(refresh).then((res) => {
          callback(res);
          fetch(`${this.url}orders`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: res.accessToken,
            },
          }).then(this.checkResponse);
        });
      }
    });
} */
