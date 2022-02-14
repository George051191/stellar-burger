import { RESET_REQUEST, RESET_ERROR, RESET_SUCCESS, SET_PASSWORD_ERROR, SET_PASSWORD_REQUEST, SET_PASSWORD_SUCCESS, CREATE_USER_ERROR, CREATE_USER_REQUEST, CREATE_USER_SUCCESS } from "../constants";
import { TUserRequestActions } from "../actions/user-data";

type TUserState = {
  resetAnswer: boolean | '';
  resetPending: boolean;
  resetPasswordError: boolean;
  isPasswordChanged: boolean;
  userName: string;
  userEmail: string;
  isUserSent: boolean;
}


const userInitialState: TUserState = {
  resetAnswer: false,
  resetPending: false,
  resetPasswordError: false,
  isPasswordChanged: false,
  userEmail: '',
  userName: '',
  isUserSent: false
}

export const userDataReducer = (state = userInitialState, action: TUserRequestActions) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        isUserSent: true
      }
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isUserCreate: false,
        userName: action.payload.user.name,
        userEmail: action.payload.user.email
      }
    case RESET_REQUEST:
      return {
        ...state,
        resetPending: true
      }
    case RESET_SUCCESS:
      return {
        resetAnswer: action.success,
        resetPending: false
      }
    case RESET_ERROR:
      return {
        ...state,
        resetPasswordError: true
      }
    case SET_PASSWORD_SUCCESS:
      return {
        ...state,
        isPasswordChanged: true
      }
    default:
      return state

  }
}
