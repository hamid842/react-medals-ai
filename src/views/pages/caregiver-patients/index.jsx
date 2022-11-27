import {useEffect, useState} from "react";
import {getAppointments} from "@/api/get-appointments";
import {getCaregiverPatients} from "@/api/get-caregiver-patients";
import jwtDecode from "jwt-decode";
import {useSelector} from "react-redux";
import PatientItem from "@/views/pages/caregiver-patients/PatientItem";

const CaregiverPatients = () => {
    const loginState = useSelector(({login})=>login)
    const [patientsList,setPatientsList] = useState([]);
    const getUsername = ()=>{
        if(loginState.loggedInUserName) {
            return loginState.loggedInUserName;
        }else {
            const decodedToken = jwtDecode(localStorage.getItem('token'))
            return decodedToken.preferred_username
        }
    }
    useEffect(() => {
        const patients$ = getCaregiverPatients(getUsername());
        patients$.subscribe({
            next: data => setPatientsList(data),
            error: err => console.log(err),
            complete: () => console.log("Patients fetched for this caregiver")
        })
    }, [])
    return (
        <>{patientsList.length && patientsList?.map(patient=>{
            return (
                <PatientItem key={patient?.id} patientDetails={patient} />
            )
        })}</>
    )
}

export default CaregiverPatients;