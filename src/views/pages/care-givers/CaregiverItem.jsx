import {useState} from "react";
// material-ui
import {styled, useTheme} from "@mui/material/styles";
import {Avatar, Box, Grid, Menu, Typography} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// project imports
import {renderRelationship} from "@/utils/render-relationship";
import MainCard from "@/ui-component/cards/MainCard";
import SkeletonEarningCard from "@/ui-component/cards/Skeleton/EarningCard";
import EditCaregiverDialog from "@/views/pages/care-givers/EditCaregiverDialog";
import DeleteCaregiverDialog from "@/views/pages/care-givers/DeleteCaregiverDialog";

const CaregiverCardWrapper = styled(MainCard)(({theme}) => ({
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

// ===========================|| CAREGIVER ITEM ||=========================== //

const CaregiverItem = ({caregiverDetails}) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{marginY: 2}}>
            {!caregiverDetails ? (
                <SkeletonEarningCard/>
            ) : (
                <CaregiverCardWrapper border={false} content={false}>
                    <Box sx={{p: 2.25}}>
                        <Grid container direction="column">
                            <Grid item>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.largeAvatar,
                                                backgroundColor: theme.palette.secondary[800],
                                                mt: 1
                                            }}
                                        >
                                            {caregiverDetails?.profileImageUrl && <img src={caregiverDetails?.profileImageUrl} alt="Pic"/>}
                                        </Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Typography>{caregiverDetails?.socialSecurityNo}</Typography>
                                        <Typography>{caregiverDetails?.email}</Typography>
                                        <Typography>{caregiverDetails?.phoneNumber1}</Typography>
                                        <Typography>{caregiverDetails?.phoneNumber2}</Typography>
                                        <Typography>{caregiverDetails?.address}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.mediumAvatar,
                                                backgroundColor: theme.palette.secondary.dark,
                                                color: theme.palette.secondary[200],
                                                zIndex: 1
                                            }}
                                            aria-controls="menu-earning-card"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreHorizIcon fontSize="inherit"/>
                                        </Avatar>
                                        <Menu
                                            id="menu-earning-card"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            variant="selectedMenu"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'
                                            }}
                                        >
                                            <EditCaregiverDialog closeMenu={handleClose} caregiverDetails={caregiverDetails}/>
                                            <DeleteCaregiverDialog closeMenu={handleClose} caregiverDetails={caregiverDetails}/>
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems="center">
                                    <Grid item>
                                        <Typography
                                            sx={{fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75}}>
                                            {caregiverDetails?.firstName} {caregiverDetails?.lastName}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{mb: 1.25}}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.secondary[200]
                                    }}
                                >
                                    {renderRelationship(caregiverDetails?.relationshipWithUser)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CaregiverCardWrapper>
            )}
        </Box>
    )
}
export default CaregiverItem;