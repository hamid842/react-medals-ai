// assets
import {
    IconPill,
    IconHistory,
    IconStethoscope,
    IconFileCertificate,
    IconClock,
    IconActivity,
    IconLungs,
    IconWaveSine,
    IconPhysotherapist,
    IconAdjustments,
    IconBrandGoogleAnalytics
} from '@tabler/icons';

// constant
const icons = {
    IconPill,
    IconHistory,
    IconStethoscope,
    IconClock,
    IconFileCertificate,
    IconActivity,
    IconLungs,
    IconWaveSine,
    IconPhysotherapist,
    IconAdjustments,
    IconBrandGoogleAnalytics
}

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    children: [
        {
            id: 'medication',
            title: 'Medication',
            type: 'collapse',
            url:'/medication-history',
            icon: icons.IconPill,
            children: [
                {
                    id: 'history',
                    title: 'History',
                    type: 'item',
                    url:'/medication-history',
                    icon: icons.IconHistory,
                },
            ]
        },
        {
            id: 'doctors',
            title: 'Doctors',
            type: 'collapse',
            url:'/appointments',
            icon: icons.IconStethoscope,
            children: [
                {
                    id: 'appointments',
                    title: 'Appointments',
                    type: 'item',
                    url:'/appointments',
                    icon: icons.IconClock,
                },
            ]
        },
        {
            id: 'health',
            title: 'Health data',
            type: 'collapse',
            icon: icons.IconFileCertificate,
            children: [
                {
                    id: 'activity-records',
                    title: 'Activity records',
                    type: 'item',
                    url:'/activity-records',
                    icon: icons.IconActivity,
                },
                {
                    id: 'blood-oxygen',
                    title: 'Blood oxygen',
                    type: 'item',
                    url:'/blood-oxygen',
                    icon: icons.IconLungs,
                },
                {
                    id: 'ecg',
                    title: 'ECG',
                    type: 'item',
                    url:'/ecg',
                    icon: icons.IconWaveSine,
                },
                {
                    id: 'analytics',
                    title: 'Analytics',
                    type: 'item',
                    url:'/analytics',
                    icon: icons.IconBrandGoogleAnalytics,
                }
            ]
        },
        {
            id: 'care-givers',
            title: 'Caregivers',
            type: 'item',
            url:'/caregivers',
            icon: icons.IconPhysotherapist,
        },
        {
            id: 'setting',
            title: 'Setting',
            type: 'collapse',
            url:'/logs',
            icon: icons.IconAdjustments,
            children: [
                {
                    id: 'logs',
                    title: 'Logs',
                    type: 'item',
                    url:'/logs',
                    icon: icons.IconBrandGoogleAnalytics,
                },
            ]
        },

    ]
};

export default pages;
