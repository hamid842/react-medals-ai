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
    const [loading,setLoading] = useState(false)

    const getUsername = ()=>{
        if(loggedInUserName) {
            return loggedInUserName;
        }else {
            const decodedToken = jwtDecode(localStorage.getItem('token'))
            return decodedToken.preferred_username
        }
    }
    useEffect(() => {
        setLoading(true);
        const appointments$ = getAppointments(getUsername());
        appointments$.subscribe({
            next: data => setAppointments(data),
            error: () => setLoading(false),
            complete: () => setLoading(false)
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
                <Loading visible={loading}/>
            )}
        </>
    )
}
export default Appointments;