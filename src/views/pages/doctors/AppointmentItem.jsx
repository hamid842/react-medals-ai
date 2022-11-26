// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography,Chip} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
// project imports
import MainCard from "@/ui-component/cards/MainCard";
import TotalIncomeCard from "@/ui-component/cards/Skeleton/TotalIncomeCard";
import {renderDateTimeStatus} from "@/utils/render-dateTime-status";
//third party
import PropTypes from "prop-types";
import dayjs from "dayjs";

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));

// ==============================|| DOCTORS - APPOINTMENTS ||============================== //

const AppointmentItem = ({appointmentDetails})=>{
    const theme = useTheme();

    return (
        <Box sx={{margin:1}}>
            {!appointmentDetails ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2 }}>
                        <Grid2 container alignItems={"center"} justifyContent={"center"}>
                            <Grid2 xs={12} sm={4} lg={4}>
                                <List sx={{ py: 0 }}>
                                    <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                        <ListItemAvatar>
                                            <Avatar
                                                variant="rounded"
                                                sx={{
                                                    ...theme.typography.commonAvatar,
                                                    ...theme.typography.largeAvatar,
                                                    backgroundColor: theme.palette.warning.light,
                                                    color: theme.palette.warning.dark
                                                }}
                                            >
                                                <AddAlarmIcon fontSize="inherit" />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            sx={{
                                                py: 0,
                                                mt: 0.45,
                                                mb: 0.45
                                            }}
                                            primary={<Typography variant="h4">{appointmentDetails?.drName}</Typography>}
                                            secondary={
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        color: theme.palette.grey[500],
                                                        mt: 0.5
                                                    }}
                                                >
                                                    {appointmentDetails?.speciality}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                </List>
                            </Grid2>
                            <Grid2 xs={12} sm={4} lg={4}>
                                <Typography variant={"subtitle1"}>Visit Date</Typography>
                                <Typography>{dayjs(appointmentDetails.visitDateTime).format("YYYY-MM-DD HH:mm")}</Typography>
                            </Grid2>
                            <Grid2 xs={12} sm={4} lg={4} sx={{textAlign:"center"}}>
                                <Chip
                                    sx={{width:100}}
                                    label={renderDateTimeStatus(appointmentDetails.visitDateTime)}
                                    color={dayjs(appointmentDetails.visitDateTime) > dayjs(new Date()) ? "success" : "error" }/>
                            </Grid2>
                        </Grid2>

                    </Box>
                </CardWrapper>
            )}
        </Box>
    );
};

AppointmentItem.propTypes = {
    appointmentDetails: PropTypes.object
};
export default AppointmentItem;