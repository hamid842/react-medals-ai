import {
  REGISTER_PATIENT_ACTION,
  REGISTER_PATIENT_SUCCESS_ACTION,
  REGISTER_PATIENT_FAILED_ACTION,
} from "@/store/actions";

export function registerPatient(patientData) {
  return {
    type: REGISTER_PATIENT_ACTION,
    payload: patientData,
  };
}

export function registerPatientSuccess(response) {
  return {
    type: REGISTER_PATIENT_SUCCESS_ACTION,
    payload: { response },
  };
}

export function registerPatientFailed(error) {
  return {
    type: REGISTER_PATIENT_FAILED_ACTION,
    payload: { error },
  };
}
