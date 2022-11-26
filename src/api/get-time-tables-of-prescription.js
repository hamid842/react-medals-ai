import * as ajax from "@/utils/ajax";
import {catchError, EMPTY, map} from "rxjs";

export const getTimeTables = (prescriptionId) => {
    return ajax
        .get(`${import.meta.env.VITE_TIME_TABLES_FOR_PRESCRIPTION_ID_API}/${prescriptionId}`).pipe(
            map(({response}) => response),
            catchError((error) => {
                console.log("error: ", error);
                return EMPTY;
            })
        );
};
