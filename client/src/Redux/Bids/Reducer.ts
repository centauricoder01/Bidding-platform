import * as types from "./Type";

const initialState = {
  allBids: [],
  loading: false,
  error: false,
};

//@ts-ignore
const bidsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // get all Roles:-
    case types.GET_BID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_BID_SUCCESS:
      localStorage.setItem("Bids", JSON.stringify(payload));
      return {
        ...state,
        loading: false,
        error: false,
        allBids: payload,
      };
    case types.GET_BID_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export { bidsReducer };
