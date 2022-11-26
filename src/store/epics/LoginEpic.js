// Third party
import {ofType} from "redux-observable";
import {catchError, map, of, switchMap} from "rxjs";
import {ajax} from "rxjs/ajax";
// project imports
import * as actionTypes from "../actions";
import jwtDecode from "jwt-decode";
import {loginFailedAction, loginSuccessAction} from "@/store/actions/login";

// =============================< LOGIN EPIC >=============================== //
export const loginUserEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.LOGIN_ACTION),
        switchMap((action) =>
            ajax({
                url: import.meta.env.VITE_LOGIN_API,
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: {
                    username: action.payload.username,
                    password: action.payload.password,
                },
            }).pipe(
                map(({response}) => {
                    localStorage.setItem("token", response?.access_token);
                    const decodedToken = jwtDecode(response?.access_token)
                    return loginSuccessAction(decodedToken.preferred_username,action.payload.navigate)
                }),
                catchError(error => of({
                    type: actionTypes.LOGIN_FAILED_ACTION,
                    payload: error.xhr.response,
                    error: true
                }))
            )
        )
    )


