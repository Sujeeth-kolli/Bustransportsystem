import * as React from 'react';
import { Add as AddIcon, Route as RouteIcon } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

import { config } from '@/config';
import { RouteCard, type Route } from '@/components/dashboard/routes/routes-card'; // Renamed IntegrationCard to RouteCard

// Renamed Integration to Route
import { RoutesFilters } from '@/components/dashboard/routes/routes-filters'; // Renamed CompaniesFilters to RoutesFilters

export const metadata = { title: `Bus Routes | Dashboard | ${config.site.name}` };

const routes = [
  {
    id: 'ROUTE-001',
    name: 'Route 1',
    description: 'Route from City Center to College',
    icon: '/assets/icon-route-1.png',
    trips: 14,
    updatedAt: dayjs().subtract(30, 'minutes').toDate(),
  },
  {
    id: 'ROUTE-002',
    name: 'Route 2',
    description: 'Route from City Center to College',
    icon: '/assets/icon-route-2.png',
    trips: 10,
    updatedAt: dayjs().subtract(1, 'hour').toDate(),
  },
  // Add more routes as needed
] as Route[];

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Bus Routes</Typography>
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
            <Button color="inherit" startIcon={<AddIcon />}>
              Add Route
            </Button>
            <Button color="inherit" startIcon={<RouteIcon />}>
              Add Trip
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <RoutesFilters />
      <Grid container spacing={3}>
        {routes.map((route) => (
          <Grid key={route.id} lg={4} md={6} xs={12}>
            <RouteCard route={route} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination count={3} size="small" />
      </Box>
    </Stack>
  );
}
