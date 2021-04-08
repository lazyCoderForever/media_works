import * as types from "../types";

const fetchUserPosts = userId => async dispatch => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/?userId=${userId}`
    );
    if (res.ok) {
      let data = await res.json();
      dispatch({
        type: types.GET_USER_POSTS,
        payload: data,
      });
    } else {
      let error = res.json();
      throw new Error(error.message || "Can't get data about users");
    }
  } catch (err) {
    dispatch({
      type: types.GET_USER_POSTS,
      payload: err,
    });
  }
};

export { fetchUserPosts };
