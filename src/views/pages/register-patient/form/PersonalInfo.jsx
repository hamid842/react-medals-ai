import { useState } from "react";
// material-ui
import {
  Button,
  Grid,
  Stack,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Third party
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

// project imports
import AppField from "@/ui-component/AppTextField";
import { registerPatient } from "@/store/actions/patient";
import { login } from "@/store/actions/login";
import PasswordField from "@/ui-component/PasswordField";
import { strengthColor, strengthIndicator } from "@/utils/password-strength";

// TODO check if patient need password or not
// TODO check fields with Mehdi
// ==============================|| PATIENT PERSONAL INFO ||============================== //

const PersonalInfo = ({ handleNext }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [passStrength, setPassStrength] = useState(0);
  const [level, setLevel] = useState();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setPassStrength(temp);
    setLevel(strengthColor(temp));
  };

  const patientPersonalInfo = {
    firstName: "",
    lastName: "",
    email: "",
    birthDate: new Date(),
    password: "",
    confirmPass: "",
    phoneNumber1: "",
    phoneNumber2: "",
    address: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required!"),
    lastName: Yup.string().required("Last Name is required!"),
    email: Yup.string().email().required("Email is required!"),
    password: Yup.string().required("Password is required!"),
    confirmPass: Yup.string().required("This field is required!"),
    phoneNumber1: Yup.string().required("Phone number is required!"),
    phoneNumber2: Yup.string().required("Mobile number is required!"),
    birthDate: Yup.date().required("Birth date is required!"),
  });

  return (
    <Formik
      initialValues={patientPersonalInfo}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(registerPatient(values));
        setSubmitting(false);
      }}
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
            <Grid item xs={12} sm={12} lg={6}>
              <AppField
                id={"first-name"}
                label={"First Name"}
                name={"firstName"}
                value={values.firstName}
                error={Boolean(touched.firstName && errors.firstName)}
                errors={touched.firstName && errors.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <AppField
                id={"last-name"}
                label={"Last Name"}
                name={"lastName"}
                value={values.lastName}
                error={Boolean(touched.lastName && errors.lastName)}
                errors={touched.lastName && errors.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <AppField
                id={"email"}
                label={"Email"}
                name={"email"}
                value={values.email}
                error={Boolean(touched.email && errors.email)}
                errors={touched.email && errors.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <AppField
                shrink={true}
                type={"date"}
                value={values.birthDate}
                id={"birth-date"}
                label={"Birth Date"}
                name={"birthDate"}
                error={Boolean(touched.birthDate && errors.birthDate)}
                errors={touched.birthDate && errors.birthDate}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <PasswordField
                value={values.password}
                error={Boolean(touched.password && errors.password)}
                errors={touched.password && errors.password}
                touched={touched}
                showPassword={showPassword}
                strength={passStrength}
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
                value={values.confirmPass}
                error={Boolean(touched.confirmPass && errors.confirmPass)}
                errors={touched.confirmPass && errors.confirmPass}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <AppField
                id={"phoneNumber1"}
                label={"Phone Number"}
                name={"phoneNumber1"}
                value={values.phoneNumber1}
                error={Boolean(touched.phoneNumber1 && errors.phoneNumber1)}
                errors={touched.phoneNumber1 && errors.phoneNumber1}
                onBlur={handleBlur}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start" sx={{ marginTop: 2 }}>
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
                value={values.phoneNumber2}
                error={Boolean(touched.phoneNumber2 && errors.phoneNumber2)}
                errors={touched.phoneNumber2 && errors.phoneNumber2}
                onBlur={handleBlur}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start" sx={{ marginTop: 2 }}>
                    +1
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <AppField
                id={"address"}
                label={"Address"}
                name={"address"}
                value={values.address}
                error={Boolean(touched.address && errors.address)}
                errors={touched.address && errors.address}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <Stack direction={"row"} justifyContent={"flex-end"}>
                <Button
                  variant="outlined"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  endIcon={
                    isSubmitting ? <CircularProgress /> : <ArrowForwardIcon />
                  }
                >
                  {"Continue"}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};
export default PersonalInfo;
