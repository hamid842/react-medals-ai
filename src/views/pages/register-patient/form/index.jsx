import { useState } from "react";

// material-ui
import {
  Grid,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

// project imports
import FormWrapper from "../form/FormWrapper";
import PersonalInfo from "./PersonalInfo";
import GeneralInformation from "./GeneralInformation";
import PharmacyInformation from "./PharmacyInformation";

// ============================|| REGISTER PATIENT FORM SECTION ||============================ //

const RegisterPatientFormSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [addPharmacy, setAddPharmacy] = useState(false);

  const handleChangeSwitch = (e) => setAddPharmacy(e.target.checked);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSave = () => alert("Saved");

  return (
    <FormWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant={"h4"}>
            Signing up as patient (Device owner)
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stepper activeStep={activeStep} orientation={"vertical"}>
            <Step>
              <StepLabel>Personal information</StepLabel>
              <StepContent>
                <PersonalInfo handleNext={handleNext} />
              </StepContent>
            </Step>
            <Step>
              <StepLabel>General information</StepLabel>
              <StepContent>
                <GeneralInformation
                  handleNext={handleNext}
                  handleBack={handleBack}
                  checked={addPharmacy}
                  onChangeSwitch={handleChangeSwitch}
                />
              </StepContent>
            </Step>
            {addPharmacy && (
              <Step>
                <StepLabel>Pharmacy information</StepLabel>
                <StepContent>
                  <PharmacyInformation
                    handleBack={handleBack}
                    handleSave={handleSave}
                  />
                </StepContent>
              </Step>
            )}
          </Stepper>
        </Grid>
      </Grid>
    </FormWrapper>
  );
};
export default RegisterPatientFormSection;
