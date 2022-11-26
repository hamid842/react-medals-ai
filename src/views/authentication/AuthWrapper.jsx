// material-ui
import { styled } from '@mui/material/styles';

import backgroundImage from '@/assets/images/bg.jpg'

// ==============================|| AUTHENTICATION WRAPPER ||============================== //

const AuthWrapper = styled('div')(( ) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    minHeight:'100vh',
    overflow:'hidden'
}));

export default AuthWrapper;