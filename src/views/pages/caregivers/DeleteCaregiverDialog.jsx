import {forwardRef, useState} from "react";
// material-ui
import {
    Button,
    Alert,
    AlertTitle,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    MenuItem, CircularProgress
} from '@mui/material';
import {useTheme} from "@mui/styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// project imports
import * as ajax from '@/utils/ajax'
import {map} from "rxjs";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// ===========================|| DELETE CAREGIVER DIALOG ||=========================== //
const DeleteCaregiverDialog = ({closeMenu, caregiverDetails}) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
        closeMenu();
    };

    const handleClose = () => {
        setOpen(false);

    };
    // TODO check with Razieh
    const handleDeleteCaregiver = async () => {
        setLoading(true);
        await ajax.remove(`${import.meta.env.VITE_PATIENT_CARE_GIVER_INFO}/${caregiverDetails?.id}`).pipe(
            map((response) => {
                console.log(response)
                response.responseStatus === 200 && setLoading(false)
            })
        )
            .subscribe((data) => console.log(data));
        await setLoading(false)
    }

    return (
        <div>
            <MenuItem onClick={handleClickOpen}>
                <DeleteOutlineIcon sx={{mr: 1.75}}/> Delete
            </MenuItem>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{`Sure to delete ${caregiverDetails?.firstName} ${caregiverDetails?.lastName}?`}</DialogTitle>
                <DialogContent>
                    <Alert severity="warning" sx={{backgroundColor: theme.palette.warning.dark}}>
                        <AlertTitle>Warning</AlertTitle>
                        You're deleting <strong>{caregiverDetails?.firstName} {caregiverDetails?.lastName}</strong>.
                        Please make sure before delete!
                    </Alert>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteCaregiver} startIcon={loading &&
                        <CircularProgress size={15} color={"inherit"}/>}>{loading ? "Deleting... " : "Yes"}</Button>
                    <Button onClick={handleClose}>no</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default DeleteCaregiverDialog;
