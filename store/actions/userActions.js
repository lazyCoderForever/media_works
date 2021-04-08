import * as types from "../types";

const fetchUsers = () => async dispatch => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (res.ok) {
      let data = await res.json();
      dispatch({
        type: types.GET_USERS,
        payload: data,
      });
    } else {
      let error = res.json();
      throw new Error(error.message || "Can't get data about users");
    }
  } catch (err) {
    dispatch({
      type: types.GET_USERS,
      payload: err,
    });
  }
};

const fetchUser = userId => async dispatch => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (res.ok) {
      let data = await res.json();
      dispatch({
        type: types.GET_USER,
        payload: data,
      });
    } else {
      let error = res.json();
      throw new Error(error.message || "Can't get data about users");
    }
  } catch (err) {
    dispatch({
      type: types.GET_USER,
      payload: err,
    });
  }
};

export { fetchUsers, fetchUser };
