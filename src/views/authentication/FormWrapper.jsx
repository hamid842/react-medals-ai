// material-ui
import { Box } from '@mui/material';

// project import
import MainCard from '@/ui-component/cards/MainCard';

// ==============================|| FORM WRAPPER ||============================== //

const FormWrapper= ({ children, ...other }) => (
    <MainCard
        sx={{
            opacity:0.8,
            maxWidth: { xs: 400, lg: 475 },
            margin: { xs: 2.5, md: 3 },
            '& > *': {
                flexGrow: 1,
                flexBasis: '50%'
            },
        }}
        content={false}
        {...other}
    >
        <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
    </MainCard>
);

export default FormWrapper;