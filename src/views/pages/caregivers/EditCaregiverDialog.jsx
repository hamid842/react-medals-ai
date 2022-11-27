import {useState} from "react";
// material-ui
import {MenuItem,Dialog,DialogContent} from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// project imports
import CaregiverForm from "@/views/pages/register-care-giver/form/CreateCaregiverForm";

// ===========================|| EDIT CAREGIVER DIALOG ||=========================== //

const EditCaregiverDialog = ({closeMenu,caregiverDetails}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        closeMenu();
    };

    const handleClose = () => {
        setOpen(false);

    };

    return (
        <div>
            <MenuItem onClick={handleClickOpen}>
                <DriveFileRenameOutlineIcon sx={{ mr: 1.75 }} /> Edit
            </MenuItem>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogContent>
                    <CaregiverForm isModal caregiverDetails={caregiverDetails}/>
                </DialogContent>
            </Dialog>
        </div>
    );
}
export default EditCaregiverDialog;
