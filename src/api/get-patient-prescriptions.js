import { ajax } from "rxjs/ajax";
import { catchError, map } from "rxjs";

export const patientPrescriptions$ = ajax(
  import.meta.env.VITE_PRESCRIPTIONS_API
).pipe(
  map((response) => console.log("Insurance Companies:", response)),
  catchError((error) => {
    console.log("error: ", error);
    return of(error);
  })
);
