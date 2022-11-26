// material-ui
import { styled } from "@mui/material/styles";

// project imports
import backgroundImage from "@/assets/images/reg-patient.jpg";

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const RegisterFormWrapper = styled("div")(({ theme }) => ({
  width: "50%",
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  minHeight: "100vh",
  overflow: "hidden",
  position: "fixed",
  left: 0,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export default RegisterFormWrapper;
