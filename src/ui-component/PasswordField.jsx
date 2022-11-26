// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// ==============================|| PASSWORD FIELD ||================================ //

const PasswordField = ({
  value,
  onChange,
  touched,
  error,
  errors,
  onBlur,
  handleClickShowPassword,
  handleMouseDownPassword,
  showPassword,
  strength,
  level,
}) => {
  const theme = useTheme();
  return (
    <>
      <FormControl
        fullWidth
        error={error}
        sx={{ ...theme.typography.customInput }}
      >
        <InputLabel htmlFor="outlined-adornment-password-register">
          Password
        </InputLabel>
        <OutlinedInput
          id="password"
          type={showPassword ? "text" : "password"}
          value={value}
          name="password"
          label="Password"
          onBlur={onBlur}
          onChange={onChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                size="large"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          inputProps={{}}
        />
        {touched?.password && errors?.password && (
          <FormHelperText
            error
            id="standard-weight-helper-text-password-register"
          >
            {errors?.password}
          </FormHelperText>
        )}
      </FormControl>

      {strength !== 0 && (
        <FormControl fullWidth>
          <Box sx={{ mb: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Box
                  style={{ backgroundColor: level?.color }}
                  sx={{ width: 85, height: 8, borderRadius: "7px" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" fontSize="0.75rem">
                  {level?.label}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </FormControl>
      )}
    </>
  );
};

export default PasswordField;
