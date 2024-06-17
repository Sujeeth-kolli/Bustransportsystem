import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';

import { config } from '@/config';
import { ApprovalsDone } from '@/components/dashboard/overview/approvals-done';
import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
import { PendingRequestsProgress } from '@/components/dashboard/overview/pending-requests';
import { TotalRequests } from '@/components/dashboard/overview/total-requests';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={3} md={4} sm={12}>
        <TotalRequests value="5000" />
      </Grid>
      &ensp; &ensp;
      <Grid lg={3} md={4} sm={12}>
        <ApprovalsDone value="2500" />
      </Grid>
      &ensp; &ensp;
      <Grid lg={3} md={4} sm={12}>
        <PendingRequestsProgress value="2000" />
      </Grid>
      <Grid lg={8} md={12} xs={12}>
        <LatestOrders
          orders={[
            {
              id: 'ORD-007',
              customer: { name: 'Ekaterina Tankova' },
              amount: 30.5,
              status: 'Approved',
              createdAt: undefined
            },
            {
              id: 'ORD-006',
              customer: { name: 'Cao Yu' },
              amount: 25.1,
              status: 'Approved',
              createdAt: undefined
            },
            {
              id: 'ORD-004',
              customer: { name: 'Alexa Richardson' },
              amount: 10.99,
              status: 'Rejected',
              createdAt: undefined
            },
            {
              id: 'ORD-003',
              customer: { name: 'Anje Keizer' },
              amount: 96.43,
              status: 'Approved',
              createdAt: undefined
            },
            {
              id: 'ORD-002',
              customer: { name: 'Clarke Gillebert' },
              amount: 32.54,
              status: 'Approved',
              createdAt: undefined
            },
            {
              id: 'ORD-001',
              customer: { name: 'Adam Denisov' },
              amount: 16.76,
              status: 'Approved',
              createdAt: undefined
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}
