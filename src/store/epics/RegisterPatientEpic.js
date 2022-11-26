// Third party
import { ofType } from "redux-observable";
import { catchError, map, of, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
// project imports
import { REGISTER_PATIENT_ACTION } from "../actions";
import {
  registerPatientFailed,
  registerPatientSuccess,
} from "../actions/patient";

// ============================= Patient Epic ===============================
export const registerPatientEpic = (action$) =>
  action$.pipe(
    ofType(REGISTER_PATIENT_ACTION),
    switchMap((action) =>
      ajax({
        url: import.meta.env.VITE_REGISTER_PATIENT_API,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: action.payload,
      }).pipe(
        map((response) => registerPatientSuccess(response)),
        catchError((error) => of(registerPatientFailed(error)))
      )
    )
  );
