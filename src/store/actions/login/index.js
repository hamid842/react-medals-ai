import * as actionTypes from "@/store/actions";

export function login(username, password, navigate) {
    return {
        type: actionTypes.LOGIN_ACTION,
        payload: {username, password, navigate},
    };
}

export function loginSuccessAction(decodedToken, navigate) {
    console.log(decodedToken?.realm_access?.roles)
    if (decodedToken?.realm_access?.roles?.includes("LOVED_ONE") || decodedToken?.realm_access?.roles?.includes("DOCTOR") || decodedToken?.realm_access?.roles?.includes("NURSE"))
        navigate("/caregiver-patients-list")
    else navigate("/dashboard")
    return {
        type: actionTypes.LOGIN_SUCCESS_ACTION,
        payload: decodedToken,
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
