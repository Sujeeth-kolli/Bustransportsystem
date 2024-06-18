import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'dashboard', title: 'Dashboard', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'buspass', title: 'Bus Pass Details', href: paths.dashboard.customers, icon: 'users' },
  { key: 'routes', title: 'Routes', href: paths.dashboard.integrations, icon: 'plugs-connected' },
] satisfies NavItemConfig[];
