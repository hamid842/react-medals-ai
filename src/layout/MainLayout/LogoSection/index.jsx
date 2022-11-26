import {Link} from 'react-router-dom';

// material-ui
import {ButtonBase} from '@mui/material';

// project imports
import Logo from '@/ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({width, height, titleVariant, titleColor}) => (
    <ButtonBase disableRipple component={Link} to={'/'}>
        <Logo width={width} height={height} titleVariant={titleVariant} titleColor={titleColor}/>
    </ButtonBase>
);

export default LogoSection;
