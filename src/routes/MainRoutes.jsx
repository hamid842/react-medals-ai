import {lazy} from 'react';

// project imports
import MainLayout from '@/layout/MainLayout';
import Loadable from '@/ui-component/Loadable';

// dashboard routing
const Dashboard = Loadable(lazy(() => import('@/views/dashboard')));
const MedicationHistory = Loadable(lazy(() => import('@/views/pages/medication')));
const Appointments = Loadable(lazy(() => import('@/views/pages/doctors')));
const ActivityRecords = Loadable(lazy(() => import('@/views/pages/health-data/activity-records')));
const BloodOxygen = Loadable(lazy(() => import('@/views/pages/health-data/blood-oxygen')));
const Ecg = Loadable(lazy(() => import('@/views/pages/health-data/ecg')));
const Analytics = Loadable(lazy(() => import('@/views/pages/health-data/analytics')));
const Caregivers = Loadable(lazy(() => import('@/views/pages/caregivers')));
const Logs = Loadable(lazy(() => import('@/views/pages/setting')));
const CaregiverPatients = Loadable(lazy(() => import('@/views/pages/caregiver-patients')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout/>,
    children: [
        {
            path: 'dashboard',
            element: <Dashboard/>
        },
        {
            path: 'medication-history',
            element: <MedicationHistory/>
        },
        {
            path: 'appointments',
            element: <Appointments/>
        },
        {
            path: 'activity-records',
            element: <ActivityRecords/>
        },
        {
            path: 'blood-oxygen',
            element: <BloodOxygen/>
        },
        {
            path: 'ecg',
            element: <Ecg/>
        },
        {
            path: 'analytics',
            element: <Analytics/>
        },
        {
            path: 'caregivers',
            element: <Caregivers/>
        },
        {
            path: 'logs',
            element: <Logs/>
        },
        {
            path: 'caregiver-patients-list',
            element: <CaregiverPatients/>
        }
    ],

};

export default MainRoutes;
