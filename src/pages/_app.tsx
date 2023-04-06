import {ReactElement, ReactNode} from "react";
// Next.js
import {NextPage} from "next";
import {AppProps} from "next/app";
// Material ui
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
// Third Party
import {CacheProvider} from "@emotion/react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// Project imports
import {createEmotionCache} from "@/utils/create-emotion-cache";
import {useNprogress} from "@/hooks/useNprogress";
import {useAtom} from "jotai";
import {themeMode} from "@/stores/theme";

const clientSideEmotionCache = createEmotionCache();


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout,
    emotionCache: any
}

const App = ({Component, emotionCache = clientSideEmotionCache, pageProps}: AppPropsWithLayout) => {
    useNprogress();
    const [mode,] = useAtom(themeMode)
    const theme = createTheme({
        palette: {
            mode,
        },
    });
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <ToastContainer theme={'colored'} icon limit={3}/>
                {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
        </CacheProvider>
    )
}
export default App;
