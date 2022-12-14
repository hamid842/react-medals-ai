import FullCalendar from "@fullcalendar/react";
import {useEffect, useState} from "react";
// project imports
import dayGridPlugin from "@fullcalendar/daygrid";
import {useSelector} from "react-redux";
import {getTimeTablesOfPatient} from "@/api/get-time-tables-of-patient";
import Loading from "@/ui-component/Loading";
import {Stack, Typography} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; //TAKEN
import WatchLaterIcon from '@mui/icons-material/WatchLater'; //NOT_TAKEN
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle'; //INSTEAD
import ErrorIcon from '@mui/icons-material/Error'; //MISSED
import CancelOutlined from "@mui/icons-material/Cancel"; //LOST

// ============================|| MEDICATION HISTORY ||============================ //

const MedicationHistory = () => {
    const loginState = useSelector(state => state.login)
    const [timetables, setTimetables] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const patientTimetables$ = getTimeTablesOfPatient(loginState.loggedInUserName);
        patientTimetables$.subscribe({
            next: data => setTimetables(data),
            error: () => setLoading(false),
            complete: () => setLoading(false)
        })
    }, []);

    const renderIcon = (isTaken) => {
        if (isTaken === "NOT_TAKEN")
            return <WatchLaterIcon color={'disabled'} fontSize={'small'} sx={{m: 0.5}}/>
        if (isTaken === "TAKEN")
            return <CheckCircleIcon color={'success'} fontSize={'small'} sx={{m: 0.5}}/>
        if (isTaken === "MISSED")
            return <ErrorIcon color={'error'} fontSize={'small'} sx={{m: 0.5}}/>
        if (isTaken === "INSTEAD")
            return <ChangeCircleIcon color={'secondary'} fontSize={'small'} sx={{m: 0.5}}/>
        if (isTaken === "LOST")
            return <CancelOutlined color={'error'} fontSize={'small'} sx={{m: 0.5}}/>
    }

    const renderEventContent = (eventInfo) => {
        console.log(eventInfo)
        return (
            <Stack direction={'row'} alignItems={"center"}>
                <span>
                    {renderIcon(eventInfo.event.extendedProps?.isTaken)}
                </span>
                <span style={{paddingBottom: 3}}>
                    <b>{eventInfo.event?.title}</b>
                </span>
            </Stack>
        )
    }
    return (
        <>
            {loading ?
                <Loading visible={loading}/> :
                <>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                        <Stack direction={'row'} alignItems={'center'}>
                            <span><CheckCircleIcon color={'success'} fontSize={'small'} sx={{m: 0.5}}/></span>
                            <span><Typography sx={{paddingRight: 5}}>Taken</Typography></span>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'}>
                            <span><WatchLaterIcon color={'disabled'} fontSize={'small'} sx={{m: 0.5}}/></span>
                            <span><Typography sx={{paddingRight: 5}}>NOT Taken</Typography></span>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'}>
                            <span><ErrorIcon color={'error'} fontSize={'small'} sx={{m: 0.5}}/></span>
                            <span><Typography sx={{paddingRight: 5}}>Missed</Typography></span>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'}>
                            <span><ChangeCircleIcon color={'secondary'} fontSize={'small'} sx={{m: 0.5}}/></span>
                            <span><Typography sx={{paddingRight: 5}}>Instead</Typography></span>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'}>
                            <span><CancelOutlined color={'error'} fontSize={'small'} sx={{m: 0.5}}/></span>
                            <span><Typography sx={{paddingRight: 5}}>Lost</Typography></span>
                        </Stack>
                    </Stack>
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        events={timetables?.map(({id, prescription, startDatetime, endDateTime, isTaken}) => ({
                            "id": id,
                            "title": prescription.medicine.brandName,
                            "description": prescription.medicine.brandName,
                            "start": startDatetime,
                            "end": endDateTime,
                            extendedProps: {
                                "isTaken": isTaken
                            }
                        }))}
                        eventContent={renderEventContent}
                    />
                </>
            }
        </>
    );
};
export default MedicationHistory;
