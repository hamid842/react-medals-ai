import {createContext, useMemo, useState} from 'react';
// third party
import {useSelector} from 'react-redux';
import {SnackbarProvider} from 'notistack';
// material ui
import {ThemeProvider} from '@mui/material/styles';
import {StyledEngineProvider} from '@mui/material';
// routing
import Routes from '@/routes';
// defaultTheme
import themes from '@/themes';
// project imports
import NavigationScroll from '@/layout/NavigationScroll';

// ==============================|| APP ||============================== //

export const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
});

const App = () => {
    const customization = useSelector((state) => state.customization);
    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        [],
    );

    const theme = themes(customization, mode)
    return (
        <StyledEngineProvider injectFirst>
            <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={3}>
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
                </SnackbarProvider>
            </ThemeProvider>
            </ColorModeContext.Provider>
        </StyledEngineProvider>
    );
};

export default App;
