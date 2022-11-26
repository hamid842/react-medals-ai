// material-ui
import Backdrop from '@mui/material/Backdrop';

// third party
import {HashLoader} from "react-spinners";

// ==============================|| APP BACKDROP ||================================ //

const AppBackdrop = ({loading}) => {
    return (
        <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={loading}
        >
            <HashLoader color="#D35269"/>
        </Backdrop>
    );
}
export default AppBackdrop;
