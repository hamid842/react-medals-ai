import {lazy} from 'react';

// project imports
import Loadable from '@/ui-component/Loadable';
import MinimalLayout from "@/layout/MinimalLayout";

// dashboard routing
const LoginScreen = Loadable(lazy(() => import('@/views/authentication/login/LoginScreen')));
const RegisterScreen = Loadable(lazy(() => import('@/views/authentication/register/RegisterScreen')));
const LandingPage = Loadable(lazy(() => import('@/views/pages/landing-page')));
const RegisterPatient = Loadable(lazy(() => import('@/views/pages/register-patient')));
const RegisterCareGiver = Loadable(lazy(() => import('@/views/pages/register-care-giver')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout/>,
    children: [
        {
            path: '/',
            element: <LandingPage/>
        },
        {
            path: '/landing',
            element: <LandingPage/>
        },
        {
            path: '/login',
            element: <LoginScreen/>
        },
        {
            path: '/register',
            element: <RegisterScreen/>
        },
        {
            path: '/register-patient',
            element: <RegisterPatient/>
        },
        {
            path: '/register-care-giver',
            element: <RegisterCareGiver/>
        }
    ],

};

export default AuthenticationRoutes;
