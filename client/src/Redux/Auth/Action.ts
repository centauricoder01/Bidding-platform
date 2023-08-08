import * as types from "./Types";

const TOKEN = localStorage.getItem("token");

const initialState = {
  userLogin: { loading: false, error: false, message: "" },
  userLogout: { message: "" },
  data: {
    isAuthenticated: !!TOKEN,
    token: TOKEN,
    user: null,
  },
};

// @ts-ignore
export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.LOGIN_USER_REQUEST:
      return {
        ...state,
        userLogin: { loading: true, error: false },
      };
    case types.LOGIN_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        userLogin: { loading: false, error: false, message: payload.message },
        data: {
          isAuthenticated: payload.token ? true : false,
          token: payload.token,
          user: payload.user,
        },
      };
    case types.LOGIN_USER_ERROR:
      return {
        ...state,
        userLogin: { loading: false, error: true, message: payload.message },
      };

    default:
      return state;
  }
}
