import * as types from "./Type";
import axios from "axios";
import { URL } from "../ApiURL";

//@ts-ignore
const GetAllBids = () => async (dispatch) => {
  dispatch({ type: types.GET_BID_REQUEST });
  return await axios
    .get("http://localhost:8080/getbids")
    .then((res) => {
      dispatch({
        type: types.GET_BID_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((e) => {
      dispatch({
        type: types.GET_BID_FAILURE,
        payload: e?.response?.data?.message,
      });
    });
};

//@ts-ignore
const AddProduct = (data) => (dispatch) => {
  dispatch({ type: types.ADD_PRODUCT_REQUEST });
  return axios
    .post(`${URL}/addproduct`, data)
    .then((res) => {
      dispatch({
        type: types.ADD_PRODUCT_SUCCESS,
        payload: res.data,
      });
      return res.data;
    })
    .catch((e) => {
      dispatch({
        type: types.ADD_PRODUCT_FAILURE,
        payload: e?.response?.data?.message,
      });
    });
};

//@ts-ignore
const yourProduct = (data) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_REQUEST });
  return axios
    .post(`${URL}/yourproduct`, data)
    .then((res) => {
      dispatch({
        type: types.GET_PRODUCT_SUCCESS,
        payload: res.data,
      });
      return res.data;
    })
    .catch((e) => {
      dispatch({
        type: types.GET_PRODUCT_FAILURE,
        payload: e?.response?.data?.message,
      });
    });
};

//@ts-ignore
const yourBid = (data) => (dispatch) => {
  dispatch({ type: types.YOUR_BID_REQUEST });
  return axios
    .post(`${URL}/addbid`, data)
    .then((res) => {
      dispatch({
        type: types.YOUR_BID_SUCCESS,
        payload: res.data,
      });
      return res.data;
    })
    .catch((e) => {
      dispatch({
        type: types.YOUR_BID_FAILURE,
        payload: e?.response?.data?.message,
      });
    });
};

export { GetAllBids, AddProduct, yourProduct, yourBid };
