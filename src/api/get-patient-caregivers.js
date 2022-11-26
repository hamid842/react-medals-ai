import * as ajax from "@/utils/ajax";
import {catchError, EMPTY, map} from "rxjs";

export const getPatientCaregivers = (userId) => {
    return ajax
        .get(`${import.meta.env.VITE_PATIENT_CARE_GIVER_INFO}/getAllCaregiverInfoByUserId/${userId}`).pipe(
            map(({response}) => response),
            catchError((error) => {
                console.log("error: ", error);
                return EMPTY;
            })
        );
};