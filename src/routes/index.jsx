// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
// third party
import {useSelector} from "react-redux";
import {useRoutes} from 'react-router-dom';
// project imports
import config from '@/config';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const loginState = useSelector((state) => state.login);
    if (loginState.isLoggedIn) {
        return useRoutes([MainRoutes], config.basename);
    } else {
        return useRoutes([AuthenticationRoutes], config.basename);
    }
}
