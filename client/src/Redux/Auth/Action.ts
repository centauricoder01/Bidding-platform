import * as types from "./Type";
import axios from "axios";
import { URL } from "../ApiURL";

//@ts-ignore
const LoginUser = (data) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post(`${URL}/login`, data)
    .then((res) => {
      dispatch({
        type: types.USER_LOGIN_SUCCESS,
        payload: res.data,
      });
      
    })
    .catch((e) => {
      dispatch({
        type: types.USER_LOGIN_FAILURE,
        payload: e?.response?.data?.message,
      });
    });
};



//@ts-ignore
const SignupUser = (data) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post(`${URL}/signup`, data)
    .then((res) => {
      console.log(res)
    })
    .catch((e) => {
      dispatch({
        type: types.USER_LOGIN_FAILURE,
        payload: e?.response?.data?.message,
      });
    });
};

export {SignupUser , LoginUser}