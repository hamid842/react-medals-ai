import { useEffect, useState } from "react";
// material-ui
import { Button, Grid, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//third party
import { Formik } from "formik";
import * as Yup from "yup";
// project imports
import AppField from "@/ui-component/AppTextField";
import InsuranceSelect from "@/views/pages/register-patient/form/InsuranceSelect";
import PharmacySwitch from "@/views/pages/register-patient/form/PharmacySwitch";
import { insuranceCompanies$ } from "@/api/get-insurance-companies";

// ============================|| GENERAL INFO FORM ||============================ //

const GeneralInformation = ({
  handleNext,
  handleBack,
  checked,
  onChangeSwitch,
}) => {
  const [patientGeneralInfo] = useState({
    insuranceCompany: "",
    insuranceId: "",
  });

  const validationSchema = Yup.object().shape({
    insuranceCompany: Yup.string().required("This field is required!"),
    insuranceId: Yup.string().required("This field is required!"),
  });

  useEffect(() => {
    insuranceCompanies$.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
    });
  }, []);

  return (
    <Formik
      initialValues={patientGeneralInfo}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
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
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <InsuranceSelect
                value={values.insuranceCompany}
                error={Boolean(
                  touched.insuranceCompany && errors.insuranceCompany
                )}
                errors={touched.insuranceCompany && errors.insuranceCompany}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <AppField
                id={"insurance-id"}
                label={"Insurance ID"}
                value={values.insuranceId}
                error={Boolean(touched.insuranceId && errors.insuranceId)}
                errors={touched.insuranceId && errors.insuranceId}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                  startIcon={<ArrowBackIcon />}
                >
                  Back
                </Button>
                <PharmacySwitch checked={checked} onChange={onChangeSwitch} />
                <Button
                  variant="outlined"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  endIcon={<ArrowForwardIcon />}
                >
                  {checked ? "Continue" : "Finish"}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};
export default GeneralInformation;
