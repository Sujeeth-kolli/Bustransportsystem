import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Dashboard', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Bus Pass Details', href: paths.dashboard.customers, icon: 'users' },
  { key: 'integrations', title: 'Routes', href: paths.dashboard.integrations, icon: 'plugs-connected' },
] satisfies NavItemConfig[];
