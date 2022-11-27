import {useState} from "react";
import {useNavigate} from "react-router-dom";
// material-ui
import {Button, CircularProgress, Grid, InputAdornment, MenuItem, Stack, Typography} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from '@mui/icons-material/Close'
// project imports
import AppField from "@/ui-component/AppTextField";
import PasswordField from "@/ui-component/PasswordField";
import AppSelectField from "@/ui-component/AppSelectField";
import {strengthColor, strengthIndicator} from "@/utils/password-strength";
// third party
import {Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useSnackbar} from "notistack";
import {useDispatch} from "react-redux";
import {login} from "@/store/actions/login";
// TODO what fields are required
// TODO fields is good or not
// TODO caregiver automatically login after register or not(with what credentials)

// ============================|| CREATE CAREGIVER FORM ||============================ //

//Endpoints
const registerCaregiverApi = import.meta.env.VITE_REGISTER_CARE_GIVER_API;

const CreateCaregiverForm = ({isModal,caregiverDetails}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar()
    const [showPass, setShowPass] = useState(false);
    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState();

    const handleClickShowPassword = () => {
        setShowPass(!showPass);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };
    const caregiverInfo = {
        firstName: caregiverDetails?.firstName,
        lastName: caregiverDetails?.lastName,
        email: caregiverDetails?.email,
        phoneNumber1: caregiverDetails?.phoneNumber1,
        phoneNumber2: caregiverDetails?.phoneNumber2,
        password: caregiverDetails?.password,
        confirmPass: caregiverDetails?.password,
        socialSecurityNo: caregiverDetails?.socialSecurityNo,
        address: caregiverDetails?.address,
        relationshipWithUser: caregiverDetails?.relationshipWithUser,
    };

    const relations = [
        {key: "Loved one", value: "LOVED_ONE"},
        {key: "Doctor", value: "DOCTOR"},
        {key: "Nurse", value: "NURSE"},
    ];

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("First Name is required!"),
        lastName: Yup.string().required("Last Name is required!"),
        email: Yup.string().email().required("Email is required!"),
        phoneNumber1: Yup.string().required("Phone number is required!"),
        phoneNumber2: Yup.string().required("Mobile number is required!"),
        password: Yup.string().required("Password is required!"),
        confirmPass: Yup.string().required("This field is required!"),
        socialSecurityNo: Yup.string().required("Mobile number is required!"),
        address: Yup.string(),
        relationshipWithUser: Yup.string().required("Mobile number is required!"),
    });

    // const loginAsCaregiver = async (values) => {
    //     await axios.post(loginApi, {username: values.email, password: values.password})
    //         .then(res => {
    //             if (res.status === 200 || 201) {
    //                 navigate("/caregiver-patients-list");
    //                 enqueueSnackbar("You are logged in as caregiver", {variant: "info"})
    //             }
    //         }).catch(err => {
    //             console.log(err)
    //             enqueueSnackbar(err?.response?.data?.detail, {variant: "error"})
    //         })
    // }

    const handleSubmit = async (values, {setErrors, setSubmitting}) => {
        if (values.password !== values.confirmPass) enqueueSnackbar("Passwords don't match!", {variant: "error"})
        else await axios
            .post(registerCaregiverApi, {
                ...values,
                user: {login: values.email}
            }, {headers: {password: values.password}})
            .then((res) => {
                if (res.status === 200 || 201) {
                    enqueueSnackbar("Registered successfully.", {variant: "success"})
                    setSubmitting(true);
                    dispatch(login(values.username, values.password, navigate));
                }
            })
            .catch((err) => {
                enqueueSnackbar(err?.response?.data?.message, {variant: "error"})
                setErrors(err.response.data);
                setSubmitting(false);
            });
    }

    return (
        <Formik
            initialValues={caregiverInfo}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  touched,
                  values,
                  isSubmitting,
              }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant={"h4"}>
                                {isModal ? "Editing caregiver" : "Register new caregiver"}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <AppField
                                id={"first-name"}
                                label={"First Name"}
                                name={"firstName"}
                                value={values?.firstName}
                                error={Boolean(touched?.firstName && errors?.firstName)}
                                errors={touched?.firstName && errors?.firstName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <AppField
                                id={"last-name"}
                                label={"Last Name"}
                                name={"lastName"}
                                value={values?.lastName}
                                error={Boolean(touched?.lastName && errors?.lastName)}
                                errors={touched?.lastName && errors?.lastName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <AppField
                                id={"socialSecurityNo"}
                                label={"Social Security No."}
                                name={"socialSecurityNo"}
                                value={values?.socialSecurityNo}
                                error={Boolean(
                                    touched?.socialSecurityNo &&
                                    errors?.socialSecurityNo
                                )}
                                errors={
                                    touched?.socialSecurityNo &&
                                    errors?.socialSecurityNo
                                }
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <AppField
                                id={"email"}
                                label={"Email"}
                                type={"email"}
                                name={"email"}
                                value={values?.email}
                                error={Boolean(touched?.email && errors?.email)}
                                errors={touched?.email && errors?.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <AppField
                                id={"phoneNumber1"}
                                label={"Phone Number"}
                                name={"phoneNumber1"}
                                value={values?.phoneNumber1}
                                error={Boolean(touched?.phoneNumber1 && errors?.phoneNumber1)}
                                errors={touched?.phoneNumber1 && errors?.phoneNumber1}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                startAdornment={
                                    <InputAdornment position="start" sx={{marginTop: 2}}>
                                        +1
                                    </InputAdornment>
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <AppField
                                id={"phoneNumber2"}
                                label={"Mobile Number"}
                                name={"phoneNumber2"}
                                value={values?.phoneNumber2}
                                error={Boolean(touched?.phoneNumber2 && errors?.phoneNumber2)}
                                errors={touched?.phoneNumber2 && errors?.phoneNumber2}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                startAdornment={
                                    <InputAdornment position="start" sx={{marginTop: 2}}>
                                        +1
                                    </InputAdornment>
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <PasswordField
                                value={values?.password}
                                error={Boolean(touched?.password && errors?.password)}
                                errors={touched?.password && errors?.password}
                                touched={touched}
                                showPassword={showPass}
                                strength={strength}
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    changePassword(e.target.value);
                                }}
                                level={level}
                                handleClickShowPassword={handleClickShowPassword}
                                handleMouseDownPassword={handleMouseDownPassword}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <AppField
                                id={"confirmPass"}
                                type="password"
                                label={"Confirm Password"}
                                name={"confirmPass"}
                                value={values?.confirmPass}
                                error={Boolean(touched?.confirmPass && errors?.confirmPass)}
                                errors={touched?.confirmPass && errors?.confirmPass}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                color={values.password === values.confirmPass ? "success" : ""}
                                endAdornment={values.password === values.confirmPass ? <CheckIcon color={'success'}/> :
                                    <CloseIcon color={'error'}/>}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12}>
                            <AppField
                                id={"address"}
                                label={"Address"}
                                name={"address"}
                                value={values?.address}
                                error={Boolean(touched?.address && errors?.address)}
                                errors={touched?.address && errors?.address}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12}>
                            <AppSelectField
                                id={"relationshipWithUser"}
                                label={"Relation"}
                                name={"relationshipWithUser"}
                                value={values?.relationshipWithUser ?? ""}
                                error={Boolean(
                                    touched?.relationshipWithUser &&
                                    errors?.relationshipWithUser
                                )}
                                errors={
                                    touched?.relationshipWithUser &&
                                    errors?.relationshipWithUser
                                }
                                onBlur={handleBlur}
                                onChange={handleChange}
                            >
                                {relations.map((relation) => (
                                    <MenuItem key={relation.key} value={relation.value ?? ""}>
                                        {relation.key}
                                    </MenuItem>
                                ))}
                            </AppSelectField>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12}>
                            <Stack direction={"row"} justifyContent={"flex-end"}>
                                <Button
                                    variant="outlined"
                                    color="success"
                                    type="submit"
                                    sx={{mt: 1, mr: 1, width: 100}}
                                    startIcon={
                                        isSubmitting ? (
                                            <CircularProgress size={15} color="success"/>
                                        ) : (
                                            <CheckIcon/>
                                        )
                                    }
                                >
                                    {"Save"}
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    )
}
export default CreateCaregiverForm;