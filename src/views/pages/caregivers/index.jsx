import {useEffect, useState} from "react";
// material-ui
import AddIcon from '@mui/icons-material/Add'
// project imports
import {getPatientCaregivers} from "@/api/get-patient-caregivers";
import Loading from "@/ui-component/Loading";
import CaregiverItem from "./CaregiverItem";
import {Fab} from "@mui/material";
import AddCaregiverDialog from "@/views/pages/caregivers/AddCaregiverDialog";

// ===========================|| CAREGIVERS ||=========================== //

const CareGivers = () => {
    const [caregivers, setCaregivers] = useState([]);

    // const dummyCaregivers = [
    //     {
    //         "id": 1,
    //         "firstName": "Richard",
    //         "lastName": "Richard",
    //         "socialSecurityNo": null,
    //         "address": null,
    //         "phoneNumber1": null,
    //         "phoneNumber2": null,
    //         "email": "Richard@Richard.com",
    //         "relationshipWithUser": "NURSE",
    //         "profileImageUrl": null,
    //         "user": {
    //             "id": "1",
    //             "login": "razieh68.kanani@gmail.com"
    //         }
    //     },
    //     {
    //         "id": 2,
    //         "firstName": "Rose",
    //         "lastName": "Rose",
    //         "socialSecurityNo": null,
    //         "address": null,
    //         "phoneNumber1": null,
    //         "phoneNumber2": null,
    //         "email": "Rose@Rose",
    //         "relationshipWithUser": "LOVED_ONE",
    //         "profileImageUrl": null,
    //         "user": {
    //             "id": "3",
    //             "login": "test"
    //         }
    //     }
    // ]
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