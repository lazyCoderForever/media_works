import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { userPostsReducer } from "./userPostsReducer";
export default combineReducers({
  users: userReducer,
  posts: userPostsReducer,
});
