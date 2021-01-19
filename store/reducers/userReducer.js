import * as types from "../types";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
