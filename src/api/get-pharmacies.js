import { ajax } from "rxjs/ajax";
import { catchError, map } from "rxjs";

export const pharmacies$ = ajax(import.meta.env.VITE_GET_PHARMACIES_API).pipe(
  map((response) => console.log("Insurance Companies:", response)),
  catchError((error) => {
    console.log("error: ", error);
    return of(error);
  })
);
