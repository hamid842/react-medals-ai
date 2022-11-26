import * as actionTypes from "@/store/actions";
import jwtDecode from "jwt-decode";

export function login(username, password, navigate) {
    return {
        type: actionTypes.LOGIN_ACTION,
        payload: {username, password, navigate},
    };
}

export function loginSuccessAction(token, navigate) {
    navigate("/dashboard")

        return {
        type: actionTypes.LOGIN_SUCCESS_ACTION,
        payload: token,
    };
}

export function loginFailedAction(error) {
    return {
        type: actionTypes.LOGIN_FAILED_ACTION,
        payload: error,
    };
}

export function logoutAction(navigate) {
    navigate("/landing");
    return {
        type: actionTypes.LOGOUT,
    };
}
