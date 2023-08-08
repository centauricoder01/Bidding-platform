import * as types from "./Types";
import axios from "axios";
import {URL} from "../index"
import { Dispatch } from "redux";

//login user
export const NurseLogin = (data: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: types.LOGIN_USER_REQUEST });
    const res = await axios.post(`${URL}/login`, data);
    dispatch({
      type: types.LOGIN_USER_SUCCESS,
      payload: {
        message: res.data.message,
        user: res.data.user,
        token: res.data.token,
      },
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: types.LOGIN_USER_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

// REGISTER NURSE
export const UserRegister = (data: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: types.LOGIN_USER_REQUEST });
    const res = await axios.post(
      `{URL}/signup`,
      data
    );
    console.log(res);
    return res.data;
    // dispatch({
    //   type: types.REGISTER_NURSE_SUCCESS,
    //   payload: {
    //     message: res.data.message,
    //     user: res.data.user,
    //     // token: res.data.token,
    //     report: res.data.report,
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.LOGIN_USER_ERROR,
      payload: {
        message: error,
      },
    });
  }
};