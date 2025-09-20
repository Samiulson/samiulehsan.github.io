// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard: IconDashboard,
    IconDeviceAnalytics
};

//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//

export const dashboard_example = {
    id: 'dashboard',
    title: 'Dashboard_new',
    type: 'group',
    children: [
        {
            id: 'default_new',
            title: 'Dashboard_new',
            type: 'item',
            url: '/dashboard/default',
            icon: icons['IconDashboard'],
            breadcrumbs: false
        }
    ]
};
