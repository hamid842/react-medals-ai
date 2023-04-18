import {useEffect, useState} from "react";
// material-ui
// project imports
import {getPatientCaregivers} from "@/api/get-patient-caregivers";
import Loading from "@/ui-component/Loading";
import CaregiverItem from "./CaregiverItem";
import AddCaregiverDialog from "@/views/pages/caregivers/AddCaregiverDialog";

// ===========================|| CAREGIVERS ||=========================== //

const CareGivers = () => {
    const [caregivers, setCaregivers] = useState([]);

    useEffect(() => {
        // TODO make this function dynamic to get logged in user ID
        const currentPatientCareGivers$ = getPatientCaregivers(2)
        currentPatientCareGivers$.subscribe({
            next: data => setCaregivers(data),
            error: err => console.log(err),
            complete: () => console.log("Current patient caregivers fetched")
        })
    }, [])
    return (
        <>
            {caregivers.length ? (
                caregivers?.map((caregiver, index) => {
                    return (
                        <CaregiverItem
                            key={index}
                            caregiverDetails={caregiver}
                        />
                    );
                })
            ) : (
                <Loading visible={caregivers.length === 0}/>
            )}
            <AddCaregiverDialog />
        </>
    )
}
export default CareGivers;