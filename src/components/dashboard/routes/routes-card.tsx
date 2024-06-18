import * as React from 'react';
import { Schedule as ScheduleIcon } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

export interface Route {
  id: string;
  name: string;
  description: string;
  icon: string;
  trips: number;
  updatedAt: Date;
}

export interface RouteCardProps {
  route: Route;
}

export function RouteCard({ route }: RouteCardProps): React.JSX.Element {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent sx={{ flex: '1 1 auto' }}>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar src={route.icon} variant="square" />
          </Box>
          <Stack spacing={1}>
            <Typography align="center" variant="h5">
              {route.name}
            </Typography>
            <Typography align="center" variant="body1">
              {route.description}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
          <ScheduleIcon fontSize="small" />
          <Typography color="text.secondary" display="inline" variant="body2">
            Updated {dayjs(route.updatedAt).format('MMM D, YYYY')}
          </Typography>
        </Stack>
        <Typography color="text.secondary" display="inline" variant="body2">
          {route.trips} trips
        </Typography>
      </Stack>
    </Card>
  );
}
