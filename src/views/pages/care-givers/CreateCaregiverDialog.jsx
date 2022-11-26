import {useState} from "react";
// material-ui
import {Dialog, Fab, DialogContent} from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
// project imports
import CaregiverForm from '@/views/pages/register-care-giver/form/CreateCaregiverForm'

// ==============================|| CREATE CAREGIVER ||============================== //

const CreateCaregiverDialog = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Fab sx={{position:'absolute',bottom:16,right:40}} color={'secondary'} onClick={handleClickOpen}><AddIcon /></Fab>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogContent>
                  <CaregiverForm isModal/>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default CreateCaregiverDialog;
