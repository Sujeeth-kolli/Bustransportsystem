import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { CustomersFilters } from '@/components/dashboard/bus-pass-details/bus-pass-filters';
import { CustomersTable, type Customer } from '@/components/dashboard/bus-pass-details/bus-pass-table';

export const metadata = { title: `Customers | Dashboard | ${config.site.name}` };

const customers: Customer[] = [
  {
    id: 'USR-001',
    name: 'Alcides Antonio',
    avatar: '/assets/avatar-10.png',
    email: 'idcse@gmail.com',
    phone: '908-691-3242',
    passStatus: '/approval',
    busPassId: 'BP-010',
    paymentStatus: 'paid',
    stop: 'Main Street',
    passValidity: '2024-12-31',
  },
  {
    id: 'USR-002',
    name: 'Marcus Finn',
    avatar: '/assets/avatar-9.png',
    email: 'idcse@gmail.com',
    phone: '415-907-2647',
    passStatus: '/rejection',
    busPassId: 'BP-009',
    paymentStatus: 'not paid',
    stop: 'First Avenue',
    passValidity: '2025-01-15',
  },
];

export default function Page(): React.ReactElement {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Student Details</Typography>
        </Stack>
        <div>
          <Button startIcon={<AddIcon />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <CustomersFilters />
      <CustomersTable count={customers.length} page={page} rows={paginatedCustomers} rowsPerPage={rowsPerPage} />
    </Stack>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
