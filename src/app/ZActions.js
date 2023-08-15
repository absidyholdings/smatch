export const types = {
  STATUS: {
    STANDBY: "STANDBY",
    PENDING: "PENDING",
    ERROR: "ERROR"
  },
  FETCH_TOKEN_PENDING: "FETCH_TOKEN_PENDING",
  FETCH_TOKEN_SUCCESS: "FETCH_TOKEN_SUCCESS",
  FETCH_TOKEN_FAILURE: "FETCH_TOKEN_FAILURE"
}

export const actions = {
  getTokenPending: () => {
    return {
      type: types.FETCH_TOKEN_PENDING
    }
  },
  getTokenSuccess: (token) => {
    return {
      type: types.FETCH_TOKEN_SUCCESS,
      token
    }
  },
  getTokenFailure: (error) => {
    return {
      type: types.FETCH_TOKEN_FAILURE,
      error
    }
  }
}
