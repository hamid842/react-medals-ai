// action - state management
import * as actionTypes from '../actions';

const initialState = {
    loggedInUserName: "",
    isLoggedIn: false,
    isLoading: false,
    errorMessage: "",
    isAdmin: false,
    isPatient: false,
    isCaregiver: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_ACTION:
            return {...state, isLoading: true};
        case actionTypes.LOGIN_SUCCESS_ACTION:
            const isCaregiver = action.payload?.realm_access?.roles?.includes("LOVED_ONE") || action.payload?.realm_access?.roles?.includes("DOCTOR") || action.payload?.realm_access?.roles?.includes("NURSE")
            const isAdmin = action.payload?.realm_access?.roles?.includes("ADMIN")
            const isPatient = action.payload?.realm_access?.roles?.includes("PATIENT")
            return {
                ...state,
                isLoading: false,
                loggedInUserName: action.payload.preferred_username,
                isLoggedIn: true,
                isCaregiver,
                isAdmin,
                isPatient
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
