import * as ajax from "@/utils/ajax";
import {catchError, EMPTY, map} from "rxjs";

export const getTimeTablesOfPatient = (username) => {
    if (username) {
        return ajax
            .get(`${import.meta.env.VITE_GET_TIMETABLES_API}?login=${username}`).pipe(
                map(({response}) => response),
                catchError((error) => {
                    console.log("error: ", error);
                    return EMPTY;
                })
            );
    }
};
