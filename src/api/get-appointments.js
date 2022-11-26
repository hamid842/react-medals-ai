import * as ajax from "@/utils/ajax";
import {catchError, EMPTY, map} from "rxjs";

export const getAppointments = (username) => {
    return ajax
        .get(`${import.meta.env.VITE_PATIENT_INFOS_API}/appointmentsByUsername/${username}`).pipe(
            map(({response}) => response),
            catchError((error) => {
                console.log("error: ", error);
                return EMPTY;
            })
        );
};