import {useState} from "react";
import {useNavigate} from "react-router-dom";

// material-ui
import {useTheme} from "@mui/material/styles";
import {
    Box,
    Button,
    Checkbox,
    CircularProgress,
    FormControl,
    FormControlLabel,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
} from "@mui/material";

// third party
import * as Yup from "yup";
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";

// project imports
import AnimateButton from "@/ui-component/extended/AnimateButton";
import {login} from "@/store/actions/login";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// ============================|| AuthLogin ||============================ //
const AuthLogin = ({others}) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginState = useSelector((state) => state.login);
    const [checked, setChecked] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                }}
                // TODO set password match with keycloak
                // TODO set logout in keycloak
                validationSchema={Yup.object().shape({
                    username: Yup.string().required("Username is required!"),
                    password: Yup.string().required("Password is required!"),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    dispatch(login(values.username, values.password, navigate));
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
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl
                            fullWidth
                            error={Boolean(touched.username && errors.username)}
                            sx={{...theme.typography.customInput}}
                        >
                            <InputLabel htmlFor="outlined-adornment-userName-login">
                                Username
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-userName-login"
                                value={values.username}
                                name="username"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Username"
                                inputProps={{}}
                            />
                            {touched.username && errors.username && (
                                <FormHelperText
                                    error
                                    id="standard-weight-helper-text-userName-login"
                                >
                                    {errors.username}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{...theme.typography.customInput}}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-login">
                                Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-login"
                                type={showPassword ? "text" : "password"}
                                value={values.password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText
                                    error
                                    id="standard-weight-helper-text-password-login"
                                >
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            spacing={1}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={(event) => setChecked(event.target.checked)}
                                        name="checked"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Typography
                                variant="subtitle1"
                                color="secondary"
                                sx={{textDecoration: "none", cursor: "pointer"}}
                            >
                                Forgot Password?
                            </Typography>
                        </Stack>
                        <small style={{color:"red"}}>{loginState.errorMessage}</small>
                        <Box sx={{mt: 2}}>
                            <AnimateButton type={loginState.loading ? "rotate" : "scale"}>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: theme.palette.common.preSchool,
                                        "&:hover": {
                                            backgroundColor: theme.palette.common.preSchool,
                                        },
                                    }}
                                    startIcon={loginState.isLoading && <CircularProgress size={15} color={'inherit'}/>}
                                >
                                    {loginState.isLoading ? "Signing in ... " : "Sign In"}
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthLogin;
