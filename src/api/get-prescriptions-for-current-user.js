import * as ajax from "@/utils/ajax";
import { catchError, concatMap, EMPTY, map } from "rxjs";

export const prescriptions$ = ajax
  .get(import.meta.env.VITE_PRESCRIPTIONS_FOR_CURRENT_USER_API)
  .pipe(
    map(({ response }) => response),
    catchError((error) => {
      console.log("error: ", error);
      return EMPTY;
    })
  );
