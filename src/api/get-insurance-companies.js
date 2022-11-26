import { ajax } from "rxjs/ajax";
import {catchError, map, of} from "rxjs";

export const insuranceCompanies$ = ajax(
  import.meta.env.VITE_GET_INSURANCE_COMPANIES_API
).pipe(
  map((response) => console.log("Insurance Companies:", response)),
  catchError((error) => {
    console.log("error: ", error);
    return of(error);
  })
);
