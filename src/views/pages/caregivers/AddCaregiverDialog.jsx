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
    FormControl,
    Grid,
    InputLabel,
    OutlinedInput,
    Typography
} from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
// third party
import axios from "axios";
// project imports
import Autocomplete from "@mui/material/Autocomplete";
import {useTheme} from "@mui/material/styles";
import {useSnackbar} from "notistack";


// ==============================|| CREATE CAREGIVER ||============================== //

//Endpoints
const getAllCaregivers = import.meta.env.VITE_GET_ALL_CAREGIVERS_API;

const AddCaregiverDialog = () => {
    const theme = useTheme();
    const {enqueueSnackbar} = useSnackbar();
    const [open, setOpen] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [loading, setLoading] = useState(false);
    const [addLoading, setAddLoading] = useState(false);
    const [options, setOptions] = useState([])
    const [typedEmail, setTypedEmail] = useState("")
    const [selectedCaregiver, setSelectedCaregiver] = useState()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const renderOption = (props,option) => {
        if (option) {
            return (
                <Grid container alignItems={'center'} sx={{p: 1}} {...props}>
                    <Grid item xs={12} sm={12} lg={12}>
                        <Typography variant={'body1'}>
                            {option?.firstName + " " + option?.lastName}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        <Typography variant={'caption'}>{option?.email}</Typography>
                    </Grid>
                </Grid>
            )
        } else {
            return <></>
        }

    };


    const handleKeyDown = async (event) => {
        if (event.key === "Enter") {
            setLoading(true)
            await axios(`${getAllCaregivers}?email.equals=${typedEmail}`).then(res => {
                if (res.status === 200 || 201) {
                    setOpenOptions(true)
                    setOptions(res.data);
                    setLoading(false)
                }
            }).catch(err => {
                setLoading(false);
                console.log(err);
            })
        }
    }

    const addCaregiverToPatient = ()=>{
        if (!selectedCaregiver){
            enqueueSnackbar("Please select a caregiver first!",{variant:"error"})
        }else{
            setOpenOptions(true);

        }
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
                        Please type the caregiver's email who want to add to your caregivers list correctly and press
                        'Enter'. If he/she
                        exists in system you will see the caption.
                    </DialogContentText>
                    <Grid container>
                        <Grid item xs={12} sm={12} lg={12}>
                            <Autocomplete
                                size={"small"}
                                open={openOptions}
                                options={options}
                                filterOptions={(options) => options}
                                noOptionsText={"Press Enter Please.."}
                                autoHighlight
                                onOpen={() => {
                                    setOpenOptions(true);
                                }}
                                onClose={() => {
                                    setOptions([]);
                                    setOpenOptions(false);
                                }}
                                onChange={(event, value) =>
                                    setSelectedCaregiver(value)
                                }
                                renderOption={(props, option) => renderOption(props,option)}
                                getOptionLabel={(option) => option.firstName+" "+option.lastName}
                                getOptionSelected={
                                    (option, value) => option?.id === value?.id
                                }

                                renderInput={params => (
                                    <FormControl
                                        fullWidth
                                        sx={{...theme.typography.customInput}}
                                        ref={params.InputProps.ref}
                                    >
                                        <InputLabel htmlFor={"caregiver-autocomplete"}>
                                            Type the caregiver email and press ENTER
                                        </InputLabel>
                                        <OutlinedInput
                                            id={"caregiver-autocomplete"}
                                            type={"email"}
                                            size={"small"}
                                            fullWidth
                                            required
                                            value={typedEmail}
                                            onChange={(event) => setTypedEmail(event.target.value)}
                                            onKeyDown={handleKeyDown}
                                            endAdornment={loading && <CircularProgress size={"15px"}/>}
                                            {...params}
                                        />
                                    </FormControl>
                                )}

                            />
                        </Grid>
                    </Grid>
                    <DialogActions sx={{mt:3}}>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={addCaregiverToPatient} startIcon={addLoading && <CircularProgress  size={"15px"}/>}>
                            Add
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddCaregiverDialog;
