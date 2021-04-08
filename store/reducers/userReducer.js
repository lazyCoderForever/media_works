import * as types from "../types";

const initialState = {
  users: [],
  user: {},
  userPosts: {},
  page: "",
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_USERS:
      return {
        ...state,
        page: "users",
        users: payload,
        loading: false,
        error: null,
      };
    case types.GET_USER:
      return {
        ...state,
        page: "posts",
        user: payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
