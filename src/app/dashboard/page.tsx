import * as React from 'react';
import type { Metadata } from 'next';

import Grid from '@mui/material/Grid';



import { config } from '@/config';
import { ApprovalsDone } from '@/components/dashboard/overview/approvals-done';
import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
import { PendingRequestsProgress } from '@/components/dashboard/overview/pending-requests';
import { TotalRequests } from '@/components/dashboard/overview/total-requests';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid item lg={4} md={6} sm={12}>
        <TotalRequests value="5000" />
      </Grid>
      <Grid item lg={4} md={6} sm={12}>
        <ApprovalsDone value="2500" />
      </Grid>
      <Grid item lg={4} md={6} sm={12}>
        <PendingRequestsProgress value="2000" />
      </Grid>
      &ensp; &ensp;
      <br />
      &ensp; &ensp;
      <Grid lg={12} md={18} xs={12}>
        <LatestOrders
          orders={[
            {
              id: '007',
              users: { name: 'Ekaterina Tankova' },
              status: 'Approved',

            

            },
            {
              id: '006',
              users: { name: 'Cao Yu' },
              status: 'Approved',
             

            },
            {
              id: '004',
              users: { name: 'Alexa Richardson' },
              status: 'Rejected',

             

            },
            {
              id: '003',
              users: { name: 'Anje Keizer' },
              status: 'Approved',

             

            },
            {
              id: '002',
              users: { name: 'Clarke Gillebert' },
              status: 'Approved',

            },
            {
              id: '001',
              users: { name: 'Adam Denisov' },
              status: 'Rejected',

            },
            {
              id: '001',
              users: { name: 'Adam Denisov' },
              status: 'Rejected',

            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}
