import * as types from "./Types";
import axios from "axios";

//login user
export const NurseLogin = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_NURSE_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/nurses/login",
      data
    );
    dispatch({
      type: types.LOGIN_NURSE_SUCCESS,
      payload: {
        message: res.data.message,
        user: res.data.user,
        token: res.data.token,
      },
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: types.LOGIN_NURSE_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

// REGISTER NURSE
export const UserRegister = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_NURSE_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/nurses/register",
      data
    );
    // console.log(res);
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
      type: types.REGISTER_NURSE_ERROR,
      payload: {
        message: error,
      },
    });
  }
};