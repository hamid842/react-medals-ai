import {createContext, useMemo, useState} from 'react';

import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

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
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
            </ColorModeContext.Provider>
        </StyledEngineProvider>
    );
};

export default App;
