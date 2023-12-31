import * as types from "./Type";
import axios from "axios";
import { URL } from "../ApiURL";

//@ts-ignore
const GetAllBids = () => async (dispatch) => {
  dispatch({ type: types.GET_BID_REQUEST });
  return await axios
    .get(`${URL}/getbids`)
    .then((res) => {
      dispatch({
        type: types.GET_BID_SUCCESS,
        payload: res.data,
      });
      
    })
    .catch((e) => {
      dispatch({
        type: types.GET_BID_FAILURE,
        payload: e?.response?.data?.message,
      });
    });
};

//@ts-ignore
const AddProduct = (data) => async (dispatch) => {
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
const yourProduct = (value) => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_REQUEST });

  return axios
    .post(`${URL}/yourproduct`, value)
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
const yourBid = (data) => async (dispatch) => {
  dispatch({ type: types.YOUR_BID_REQUEST });
  console.log(data, "THIS IS Data")
  return axios
    .post(`${URL}/addbid`, data)
    .then((res) => {
      dispatch({
        type: types.YOUR_BID_SUCCESS,
        payload: res.data,
      });
      console.log("This is res.data",res.data)
    })
    .catch((e) => {
      dispatch({
        type: types.YOUR_BID_FAILURE,
        payload: e?.response?.data?.message,
      });
    });
};

export { GetAllBids, AddProduct, yourProduct, yourBid };
