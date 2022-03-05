import { WS_CONNECTION_CLOSED, WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_GET_MESSAGE, WS_SEND_MESSAGE } from "../constants";
import { TFeedOrder } from '../types/data';
import { WsActionsForReducer } from '../actions/orders-feed';

type TFeedReducerState = {
  orders: Array<TFeedOrder> | null,
  wsConnected: boolean,
  error: boolean
}

const FeedReducerState: TFeedReducerState = {
  orders: null,
  wsConnected: false,
  error: false
}



export const FeedReducer = (state = FeedReducerState, action: WsActionsForReducer): TFeedReducerState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true
      }
    case WS_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload
      }
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected:false
      }
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
}
