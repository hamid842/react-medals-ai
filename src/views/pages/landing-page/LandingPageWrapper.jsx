// material-ui
import { styled } from '@mui/material/styles';

import backgroundImage from '@/assets/images/landing.jpg'

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const AuthWrapper = styled('div')(({theme} ) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    overflow:'hidden',
    [theme.breakpoints.down('sm')]:{
        height:'100%'
    }
}));

export default AuthWrapper;