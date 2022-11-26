// material-ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Stack} from '@mui/material';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        height: 700,
        [theme.breakpoints.down('sm')]: {
            height:'100%'
        }
    }
}));

// third party
import {useNavigate} from "react-router-dom";

import patientImage from '@/assets/images/patient.jpg'
import careGiverImage from '@/assets/images/caregiver.jpg'
import {Link} from "react-router-dom";

const LandingContent = () => {
    const navigate = useNavigate()
    const classes = useStyles()
    return (
        <Stack direction={'column'} justifyContent={'space-around'} alignItems={'center'} spacing={3}
               className={classes.container}>
            <Typography variant={'h1'} sx={{color: '#51a7d6'}}>Welcome to Medals AI</Typography>
            <Typography variant={'h4'} sx={{color: 'white'}}>To sign in, please select an item below</Typography>
            <Stack direction={{xs: 'column', sm: 'row'}} spacing={3} justifyContent={'center'} alignItems={'center'}>
                <Card sx={{maxWidth: 345}} onClick={() => navigate('/register-patient')}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="270"
                            image={patientImage}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Sign up as a patient (Device owner)
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{maxWidth: 345}} onClick={() => navigate('/register-care-giver')}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="270"
                            image={careGiverImage}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Sign up as a caregiver
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Stack>
        </Stack>
    );
}
export default LandingContent;
