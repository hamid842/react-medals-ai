import {useContext} from "react";

// material-ui
import {useTheme} from "@mui/material/styles";
import {Avatar, ButtonBase} from "@mui/material";

import {IconSun, IconSunOff} from "@tabler/icons";

import {ColorModeContext} from "@/App";


const ChangeThemeButton = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        // <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit">
        //     {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
        // </IconButton>
        <ButtonBase sx={{borderRadius: '12px'}}>
            <Avatar
                variant="rounded"
                sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.mediumAvatar,
                    transition: 'all .2s ease-in-out',
                    background: theme.palette.secondary.light,
                    color: theme.palette.secondary.dark,
                    '&[aria-controls="menu-list-grow"],&:hover': {
                        background: theme.palette.secondary.dark,
                        color: theme.palette.secondary.light
                    }
                }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
            >
                {theme.palette.mode === 'dark' ? <IconSunOff stroke={1.5} size="1.3rem"/> :
                    <IconSun stroke={1.5} size="1.3rem"/>}
            </Avatar>
        </ButtonBase>
    );
}
export default ChangeThemeButton;
