/**
 * @param {{preferred_username:string}} data
 */
import {useEffect, useState} from "react";
// project imports
import {getAppointments} from "@/api/get-appointments";
import {useSelector} from "react-redux";
import Loading from "@/ui-component/Loading";
import AppointmentItem from './AppointmentItem'
// third party
import jwtDecode from "jwt-decode";

// ==============================< DOCTORS - APPOINTMENT ITEM >============================== //

const Appointments = () => {
    const {loggedInUserName} = useSelector(({login}) =>login)
    const [appointments, setAppointments] = useState([]);

    // const dummyAppointments = [
    //     {
    //         "drName": "Dr.Brown",
    //         "speciality": "NEPHROLOGY",
    //         "visitDateTime": "2022-10-10T14:00:00"
    //     },
    //     {
    //         "drName": "Dr.Jackson",
    //         "speciality": "PSYCHIATRY",
    //         "visitDateTime": "2022-09-29T11:30:00"
    //     },
    //     {
    //         "drName": "Dr.White",
    //         "speciality": "INTERNAL_MEDICINE",
    //         "visitDateTime": "2022-09-10T15:00:00"
    //     },
    //     {
    //         "drName": "Dr.White",
    //         "speciality": "INTERNAL_MEDICINE",
    //         "visitDateTime": "2022-12-10T18:30:00"
    //     }
    // ]


    const getUsername = ()=>{
        if(loggedInUserName) {
            return loggedInUserName;
        }else {
            const decodedToken = jwtDecode(localStorage.getItem('token'))
            return decodedToken.preferred_username
        }
    }
    useEffect(() => {
        const appointments$ = getAppointments(getUsername());
        appointments$.subscribe({
            next: data => setAppointments(data),
            error: err => console.log(err),
            complete: () => console.log("Appointments fetched")
        })
    }, [])
    return (
        <>
            {appointments.length ? (
                appointments?.map((appointment, index) => {
                    return (
                        <AppointmentItem
                            key={index}
                            appointmentDetails={appointment}
                        />
                    );
                })
            ) : (
                <Loading visible={appointments.length === 0}/>
            )}
        </>
    )
}
export default Appointments;