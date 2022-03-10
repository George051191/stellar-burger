import {WS_CONNECTION_CLOSED, WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_GET_MESSAGE, WS_AUTH_CONNECTION_ERROR, WS_AUTH_CONNECTION_SUCCESS, WS_AUTH_CONNECTION_GET_MESSAGE } from "../constants";
import { TFeedOrder, TFeedOrdersResult } from '../types/data';
import { TAuthOrdersFeedActions } from '../actions/authuser-orders-feed';
import { WsActionsForReducer } from '../actions/orders-feed';

type TUserOrdersFeedState = {
  order: TFeedOrdersResult | null,
  wsConnected: boolean,
  error: boolean
}

const userOrdersFeedState: TUserOrdersFeedState = {
  order: null,
  wsConnected: false,
  error: false
}


export const userOrdersFeedReducer = (state = userOrdersFeedState, action: TAuthOrdersFeedActions ) => {
  switch (action.type) {
    case  WS_AUTH_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true
      }
    case WS_AUTH_CONNECTION_ERROR:
      return {
        ...state,
        error: true
      }
    case WS_AUTH_CONNECTION_GET_MESSAGE:
      return {
        ...state,
        order: action.payload
      }
    default:
      return state

  }
}
