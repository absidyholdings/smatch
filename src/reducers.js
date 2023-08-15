import {combineReducers} from "redux";
// import {loginReducer} from "./app/login/loginReducer";
import {ZReducer} from "./app/ZReducer";

export default combineReducers({
  // login: loginReducer,
  app: ZReducer
});
