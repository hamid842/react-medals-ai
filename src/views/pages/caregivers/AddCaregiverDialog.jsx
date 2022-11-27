import {useState} from "react";
// material-ui
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Fab,
    Grid
} from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
// third party
import * as Yup from "yup";
import {Formik} from "formik";
// project imports
import AppField from "@/ui-component/AppTextField";
import axios from "axios";


// ==============================|| CREATE CAREGIVER ||============================== //

//Endpoints
const getAllCaregivers = import.meta.env.VITE_GET_ALL_CAREGIVERS_API;

const AddCaregiverDialog = () => {
    const [open, setOpen] = useState(false);
    const [caption, setCaption] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCaption(false)
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required!"),

    });

    const caregiverInfo = {
        email: ""
    }

    const searchForCaregiver = async (values, {setErrors, setSubmitting}) => {
        setSubmitting(true);
        await axios(`${getAllCaregivers}?email.equals=${values.email}`).then(res => {
            if (res.status === 200 || 201) {
                setSubmitting(false);
                res?.data?.length > 0 && setCaption(true);
            }
        }).catch(err => {
            console.log(err);
            setErrors(err);
        })
    }

    return (
        <div>
            <Fab sx={{position: 'absolute', bottom: 16, right: 40}} color={'secondary'}
                 onClick={handleClickOpen}><AddIcon/></Fab>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle sx={{fontSize: 20}}>
                    {"Add new caregiver"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{mb: 1}}>
                        Please type the caregiver's email who want to add to your caregivers list correctly. If he/she
                        exists in system you will see the caption.
                    </DialogContentText>
                    <Formik
                        initialValues={caregiverInfo}
                        validationSchema={validationSchema}
                        onSubmit={searchForCaregiver}
                    >
                        {({
                              errors,
                              handleBlur,
                              handleChange,
                              handleSubmit,
                              touched,
                              values,
                              isSubmitting
                          }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} lg={12}>
                                        <AppField
                                            id={"email"}
                                            label={"Caregiver's email"}
                                            name={"email"}
                                            value={values?.email}
                                            error={Boolean(touched?.email && errors?.email)}
                                            errors={touched?.email && errors?.email}
                                            onBlur={searchForCaregiver}
                                            onChange={handleChange}
                                        />
                                        <small
                                            style={{color: "green"}}>{caption && `"${values.email}" is exist in the system. Click add to continue.`}</small>
                                    </Grid>
                                </Grid>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type={'submit'}
                                            startIcon={isSubmitting && <CircularProgress color={'inherit'} size={15}/>}>
                                        Add
                                    </Button>
                                </DialogActions>
                            </form>
                        )}
                    </Formik>
                </DialogContent>

            </Dialog>
        </div>
    );
}

export default AddCaregiverDialog;
