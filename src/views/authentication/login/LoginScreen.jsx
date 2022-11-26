import { Link } from 'react-router-dom';

// material-ui
import {useTheme} from '@mui/material/styles';
import {Grid, Stack, Divider, Typography, useMediaQuery} from '@mui/material';

// project import
import AuthWrapper from "../AuthWrapper";
import FormWrapper from "../FormWrapper";
import Logo from "@/ui-component/Logo";
import AuthLogin from "./AuthLogin";
import AppBackdrop from "@/ui-component/AppBackdrop";
import {useSelector} from "react-redux";

// ==============================|| LOGIN SCREEN ||============================== //

const LoginScreen = () => {
    const theme = useTheme();
    const loginState = useSelector((state) => state.login)
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <AppBackdrop loading={loginState.loading}/>
            <AuthWrapper>
                <Grid container direction="column" justifyContent="flex-end" sx={{minHeight: '100vh'}}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" alignItems="center"
                              sx={{minHeight: 'calc(100vh - 68px)'}}>
                            <Grid item sx={{m: {xs: 1, sm: 3}, mb: 0}}>
                                <FormWrapper>
                                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                                        <Grid item sx={{mb: 3}}>
                                            <Logo width={80} height={80} titleVariant={'h4'}/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid
                                                container
                                                direction={matchDownSM ? 'column-reverse' : 'row'}
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <Grid item>
                                                    <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                        <Typography
                                                            color={theme.palette.common.preSchool}
                                                            gutterBottom
                                                            variant={matchDownSM ? 'h3' : 'h2'}
                                                        >
                                                            Hi, Welcome Back
                                                        </Typography>
                                                        <Typography
                                                            variant="caption"
                                                            fontSize="16px"
                                                            textAlign={matchDownSM ? 'center' : 'inherit'}
                                                        >
                                                            Enter your credentials to continue
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <AuthLogin />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Divider />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid item container direction="column" alignItems="center" xs={12}>
                                                <Typography
                                                    component={Link}
                                                    to="/register"
                                                    variant="subtitle1"
                                                    sx={{ textDecoration: 'none' }}
                                                >
                                                    Don&apos;t have an account?
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </FormWrapper>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </AuthWrapper>
        </>
    )
}
export default LoginScreen;