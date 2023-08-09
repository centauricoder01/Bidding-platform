import * as types from "./Type";

const initialState = {
  isAuthtication: false,
  User: [],
  loading: false,
  error: false,
};

//@ts-ignore
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // get all Roles:-
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.USER_LOGIN_SUCCESS:
      localStorage.setItem("UserInfo", JSON.stringify(payload));
      localStorage.setItem("IsAutication", "true");
      return {
        ...state,
        loading: false,
        error: false,
        isAuthtication: true,
        User: payload,
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export { reducer };
