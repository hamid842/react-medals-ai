// action - state management
import * as actionTypes from '../actions';

const initialState = {
  loggedInUserName: "",
  isLoading: false,
  errorMessage: "",
  isAdmin:false,
  isPatient:false,
  isCaregiver:false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_ACTION:
      return { ...state, isLoading: true };
    case actionTypes.LOGIN_SUCCESS_ACTION:
      return {
        ...state,
        isLoading: false,
        loggedInUserName: action.payload,
      };
    case actionTypes.LOGIN_FAILED_ACTION:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload?.detail,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default loginReducer;
