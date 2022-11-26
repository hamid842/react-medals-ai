import { useEffect , useState} from "react";
// material-ui
import { Button, Grid, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// third party
import { Formik } from "formik";
import * as Yup from "yup";
//project imports
import PharmacySelect from "./InsuranceSelect";
import AppField from "@/ui-component/AppTextField";
import { pharmacies$ } from "@/api/get-pharmacies";

// ============================|| PHARMACY INFO FIELD ||============================ //

const PharmacyInformation = ({ handleBack, handleSave }) => {
  const [pharmacyInfo] = useState({
    pharmacyName: "",
  });
  const validationSchema = Yup.object().shape({
    pharmacyName: Yup.string().required("This field is required!"),
  });

  useEffect(() => {
    pharmacies$.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
    });
  }, []);

  return (
    <Formik
      initialValues={pharmacyInfo}
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
        isSubmitting,
        touched,
        values,
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <PharmacySelect
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
                id={"pharmacy-id"}
                label={"Pharmacy address"}
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
                <Button
                  variant="outlined"
                  onClick={handleSave}
                  sx={{ mt: 1, mr: 1 }}
                  endIcon={<ArrowForwardIcon />}
                >
                  {"Finish"}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};
export default PharmacyInformation;
