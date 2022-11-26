// material-ui
import {Grid, Typography} from '@mui/material'

// project imports
import logo from '@/assets/images/logo.png'

// ==============================|| LOGO SVG ||============================== //

const Logo = ({width,height,titleVariant,titleColor}) => {
    return (
        <Grid container alignItems={'center'} spacing={2}>
            <Grid item>
                <img src={logo} width={width} height={height} alt={'Logo'}/>
            </Grid>
            <Grid item sx={{textAlign: 'center'}}>
                <Typography variant={titleVariant} color={titleColor}>MEDALS AI</Typography>
            </Grid>
        </Grid>
    );
};

export default Logo;
