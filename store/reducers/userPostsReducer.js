import * as types from "../types";

const initialState = {
  posts: [],
};

export const userPostsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_USER_POSTS:
      return {
        ...state,
        posts: payload,
      };
    default:
      return state;
  }
};
