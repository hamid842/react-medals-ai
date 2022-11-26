// material-ui
import {styled} from '@mui/material/styles';

// ==============================|| FORM WRAPPER ||============================== //

const FormWrapper = styled('div')(({theme}) => ({
    width: '50%',
    padding:30,
    position: 'fixed',
    right: 0,
    [theme.breakpoints.down('sm')]:{
       position:'relative',
        width:'100vw'
    }
}));

export default FormWrapper;