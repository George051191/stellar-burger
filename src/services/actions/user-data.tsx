import { RESET_ERROR, RESET_SUCCESS, RESET_REQUEST, SET_PASSWORD_ERROR, SET_PASSWORD_REQUEST, SET_PASSWORD_SUCCESS, CREATE_USER_ERROR, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants";
import { AppThunk, TAppDispatch } from "../types";
import Api from "../../utils/Api";
import { TUser } from "../types/data";
import { setCookie } from "../../utils/utils";

export interface ILoginRequest {
  readonly type: typeof LOGIN_REQUEST
}

export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
  readonly email: string;
  readonly name: string;
  readonly status: boolean
}

export interface ILoginError {
  readonly type: typeof LOGIN_ERROR;
}


export interface IResetError {
  readonly type: typeof RESET_ERROR;
}

export interface IResetSuccess {
  readonly type: typeof RESET_SUCCESS;
  readonly success: boolean;
}

export interface IResetRequest {
  readonly type: typeof RESET_REQUEST;
}

export interface ISetPasswordError {
  readonly type: typeof SET_PASSWORD_ERROR
}

export interface ISetPasswordRequest {
  readonly type: typeof SET_PASSWORD_REQUEST,
}

export interface ISetPasswordSuccess {
  readonly type: typeof SET_PASSWORD_SUCCESS,
  readonly success: boolean
}

export interface ICreateUserRequest {
  readonly type: typeof CREATE_USER_REQUEST
}

export interface ICreateUserSuccess {
  readonly type: typeof CREATE_USER_SUCCESS,
  readonly payload: TUser
}

export interface ICreateUserError {
  readonly type: typeof CREATE_USER_ERROR
}

export type TUserRequestActions = IResetError | IResetSuccess | IResetRequest | ISetPasswordError | ISetPasswordRequest | ISetPasswordSuccess | ICreateUserRequest | ICreateUserSuccess | ICreateUserError | ILoginError | ILoginRequest | ILoginSuccess;


export const getPasswordReset: AppThunk = (email: string) => {
  return function (dispatch: TAppDispatch) {
    dispatch({ type: RESET_REQUEST });
    Api.setPasswordReset(email)
      .then(res => dispatch({ type: RESET_SUCCESS, success: res.success }))
      .catch(err => dispatch({ type: RESET_ERROR }))
  }
}

export const setNewPassword: AppThunk = (password: string, token: string) => {
  return function (dispatch: TAppDispatch) {
    dispatch({ type: SET_PASSWORD_REQUEST })
    Api.setNewPassword(password, token)
      .then(res => dispatch({ type: SET_PASSWORD_SUCCESS, success: res.success }))
      .catch(err => dispatch({ type: SET_PASSWORD_ERROR }))
  }
}

export const createUser: AppThunk = (email: string, password: string, name: string) => {
  return function (dispatch: TAppDispatch) {
    dispatch({ type: CREATE_USER_REQUEST })
    Api.createNewUser(email, password, name)
      .then(res => {
        setCookie('token', res.accessToken.split('Bearer ')[1], {expires: 12000000});
        setCookie('refreshToken', res.refreshToken);
        dispatch({ type: CREATE_USER_SUCCESS, payload: res })
      })
      .catch(err => dispatch({ type: CREATE_USER_ERROR }))
  }
}

export const loginUser: AppThunk = (email: string, password: string) => {
  return function (dispatch: TAppDispatch) {
    dispatch({ type: LOGIN_REQUEST });
    Api.loginRequest(email, password)
      .then(res => {
        setCookie('token', res.accessToken.split('Bearer ')[1], {expires: 12000000});
        setCookie('refreshToken', res.refreshToken);
        dispatch({ type: LOGIN_SUCCESS, email: res.user.email, name: res.user.name , status: res.success})
      })
      .catch(err => dispatch({ type: LOGIN_ERROR }))
  }
}
