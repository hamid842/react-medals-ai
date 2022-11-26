// material-ui
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

//project imports
import Wrapper from "./RegisterFormWrapper";
import Logo from "@/ui-component/Logo";

// ==============================|| REGISTER PATIENT ||============================== //

const RegisterPatient = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <Box sx={{ m: 2 }}>
        <Logo
          width={120}
          height={100}
          titleVariant={"h2"}
          titleColor={theme.palette.grey[700]}
        />
      </Box>
    </Wrapper>
  );
};
export default RegisterPatient;
