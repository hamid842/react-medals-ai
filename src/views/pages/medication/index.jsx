import FullCalendar from "@fullcalendar/react";
import {useEffect, useState} from "react";
// project imports
import {prescriptions$} from "@/api/get-prescriptions-for-current-user";
import dayGridPlugin from "@fullcalendar/daygrid";
import RenderEventContent from "./RenderEventContent";
import axios from "axios";

// ============================|| MEDICATION HISTORY ||============================ //

const MedicationHistory = () => {
    const [prescriptions, setPrescriptions] = useState([]);
    const [timetables, setTimetables] = useState([]);

    const getPrescriptionTimetable = async (id) => {
        await axios(`${import.meta.env.VITE_TIME_TABLES_FOR_PRESCRIPTION_ID_API}/${id}`)
            .then(res => res.data)
            .catch(err => console.log(err))
    }

    const getTimeTablesList = async () => {
        await prescriptions$.subscribe({
            next: data => setPrescriptions(data),
            error: err => console.log(err),
            complete: () => console.log("fetched")
        })
        return  prescriptions?.map(prescription => ({
            "name": prescription.medicine.brandName,
            "timetables": getPrescriptionTimetable(prescription.id)
        }))

    }

    useEffect(() => {
    setTimetables(getTimeTablesList)

    }, []);
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                eventContent={<RenderEventContent/>}
            />

        </>
    );
};
export default MedicationHistory;
