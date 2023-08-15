import {types} from "./ZActions";

const initialState = {
  status: types.STATUS.STANDBY,
  error: null,
  token: null
};

export const ZReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_TOKEN_PENDING:
      console.log();
      return Object.assign({}, state, {
        status: types.STATUS.PENDING,
        error: null,
        token: null,
      });
    case types.FETCH_TOKEN_SUCCESS:
      return Object.assign({}, state, {
        status: types.STATUS.STANDBY,
        error: null,
        token: action.token
      });
    case types.FETCH_TOKEN_ERROR:
      return Object.assign({}, state, {
        status: types.STATUS.ERROR,
        error: action.error,
        token: null
      });
    default:
      return state;
  }
}
